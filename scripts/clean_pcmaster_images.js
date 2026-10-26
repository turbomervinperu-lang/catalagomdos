const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getDb } = require('../api/db');

const r2 = new S3Client({
  region: 'auto',
  endpoint: 'https://' + process.env.R2_ACCOUNT_ID + '.r2.cloudflarestorage.com',
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function cleanBuffer(buf) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const ch = info.channels;

  // Box to clear top-left "pc master store" logo (calibrated for 430x430, scales proportionally)
  const logoMaxX = Math.round(w * 0.175); // ~75px
  const logoMaxY = Math.round(h * 0.193); // ~83px

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * ch;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // 1. Erase PC Master store logo completely
      if (x <= logoMaxX && y <= logoMaxY) {
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
        continue;
      }

      // 2. Erase light-gray watermark flames and background logos
      const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
      if (r >= 215 && g >= 215 && b >= 215 && maxDiff <= 12) {
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
      }
    }
  }

  return await sharp(data, { raw: { width: w, height: h, channels: ch } })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
}

async function run() {
  const catalogPath = path.join(__dirname, '..', 'data', 'products.json');
  const rawText = fs.readFileSync(catalogPath, 'utf8').replace(/^\uFEFF/, '');
  const catalog = JSON.parse(rawText);
  const sql = getDb();

  const pcmProducts = catalog.filter((x) => {
    const num = parseInt(x.id.replace('prod-', ''));
    return num >= 182 && num <= 251;
  });

  console.log(`Starting clean for ${pcmProducts.length} PC Master products...`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < pcmProducts.length; i++) {
    const prod = pcmProducts[i];
    const itemNum = i + 1;
    console.log(`\n[${itemNum}/${pcmProducts.length}] Processing ${prod.id}: ${prod.name}`);

    try {
      if (!prod.image || !prod.image.startsWith('http')) {
        console.warn(`Skipping ${prod.id}: invalid image URL`);
        continue;
      }

      const originalBuf = await fetchBuffer(prod.image);
      const cleanedBuf = await cleanBuffer(originalBuf);

      const key = `products/clean-${prod.id}.jpg`;
      await r2.send(
        new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME || 'catalago-mdos',
          Key: key,
          Body: cleanedBuf,
          ContentType: 'image/jpeg',
          CacheControl: 'public, max-age=31536000, immutable',
        })
      );

      const newUrl = `${process.env.R2_PUBLIC_URL}/${key}`;
      console.log(`  Uploaded to R2 -> ${newUrl}`);

      // Update in catalog object
      prod.image = newUrl;
      prod.images = [newUrl];

      // Update in Neon PostgreSQL
      const imagesJson = JSON.stringify([newUrl]);
      await sql`
        UPDATE products
        SET image = ${newUrl},
            images = ${imagesJson}::jsonb,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${prod.id};
      `;
      console.log(`  Neon DB updated for ${prod.id}`);

      successCount++;
    } catch (err) {
      console.error(`  Error processing ${prod.id}:`, err.message);
      failCount++;
    }
  }

  // Save updated local JSON catalog
  fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf8');
  console.log(`\nUpdated local data/products.json successfully.`);
  console.log(`Done! Success: ${successCount}, Failed: ${failCount}`);
}

run().catch((e) => {
  console.error('Fatal execution error:', e);
  process.exit(1);
});
