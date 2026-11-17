const { put } = require('@vercel/blob');
const { Client } = require('pg');
const fs = require('fs');
const crypto = require('crypto');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

const BACKUP = 'C:/Users/OCANDO CARIDAD/.gemini/antigravity/brain/c3866054-4051-4b11-b03b-9480d6b472d7/scratch/images_backup.json';
const DRY = process.argv.includes('--dry');

function parseDataUrl(d) {
  const m = /^data:([^;]+);base64,(.+)$/s.exec(d);
  if (!m) return null;
  return { type: m[1], buf: Buffer.from(m[2], 'base64') };
}

async function run() {
  const client = new Client({ connectionString: process.env.POSTGRES_URL, ssl: { rejectUnauthorized: false } });
  await client.connect();
  const { rows } = await client.query('SELECT id, "imageUrl", images FROM "Product" ORDER BY id;');

  fs.mkdirSync(require('path').dirname(BACKUP), { recursive: true });
  fs.writeFileSync(BACKUP, JSON.stringify(rows));
  console.log('Backup saved:', rows.length, 'rows ->', BACKUP);

  const cache = new Map(); // hash -> url
  let uploaded = 0, reused = 0, migratedProducts = 0, failed = 0, bytes = 0;

  for (const r of rows) {
    const imgs = Array.isArray(r.images) ? r.images.filter(Boolean) : [];
    const list = imgs.length ? imgs : (r.imageUrl ? [r.imageUrl] : []);
    if (!list.some((i) => typeof i === 'string' && i.startsWith('data:'))) continue;

    const newList = [];
    let ok = true;
    for (let idx = 0; idx < list.length; idx++) {
      const img = list[idx];
      if (!img.startsWith('data:')) { newList.push(img); continue; }
      const parsed = parseDataUrl(img);
      if (!parsed) { ok = false; console.error(`✗ product ${r.id}: invalid data URL`); break; }
      const hash = crypto.createHash('sha1').update(parsed.buf).digest('hex');
      if (cache.has(hash)) { newList.push(cache.get(hash)); reused++; continue; }
      if (DRY) { newList.push('DRY'); continue; }
      try {
        const ext = parsed.type.includes('png') ? 'png' : parsed.type.includes('webp') ? 'webp' : 'jpg';
        const blob = await put(`products/p${r.id}-${idx + 1}-${hash.slice(0, 8)}.${ext}`, parsed.buf, {
          access: 'public', contentType: parsed.type, addRandomSuffix: false, allowOverwrite: true
        });
        // verify the file is reachable before touching the database
        const head = await fetch(blob.url, { method: 'HEAD' });
        if (!head.ok) throw new Error('HEAD ' + head.status);
        cache.set(hash, blob.url);
        newList.push(blob.url);
        uploaded++; bytes += parsed.buf.length;
      } catch (e) {
        ok = false; failed++;
        console.error(`✗ product ${r.id}: upload failed:`, e.message);
        break;
      }
    }
    if (!ok || DRY) continue;
    await client.query('UPDATE "Product" SET "imageUrl" = $1, images = $2::jsonb WHERE id = $3;',
      [newList[0] || '', JSON.stringify(newList), r.id]);
    migratedProducts++;
    console.log(`✓ product ${r.id} migrated (${newList.length} img)`);
  }

  console.log({ uploaded, reused, migratedProducts, failed, uploadedMB: (bytes / 1048576).toFixed(2), dry: DRY });
  await client.end();
}
run().catch((e) => { console.error(e); process.exit(1); });
