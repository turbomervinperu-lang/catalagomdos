const fs = require('fs');
const path = require('path');
const { PDFParse } = require('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/node_modules/pdf-parse');
const { Jimp } = require('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/node_modules/jimp');
const { Client } = require('pg');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

const outputDir = 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/public/products';
fs.mkdirSync(outputDir, { recursive: true });

async function processAllImages() {
  console.log('Cargando PDF lista_proveedor.pdf...');
  const buf = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/lista_proveedor.pdf');
  const parser = new PDFParse(new Uint8Array(buf));
  
  const extractedImages = [];
  console.log('Extrayendo imágenes reales página por página...');

  for (let p = 1; p <= 14; p++) {
    console.log(`Procesando página ${p}...`);
    const res = await parser.getImage({ first: p, last: p });
    const imgs = res.pages[0].images;

    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      // Filtrar banners gigantes o logos enanos
      if (img.width < 250 && img.height < 250) continue; // Iconos o sellos
      if (img.width > 1200 && img.height < 450) continue; // Banners horizontales
      if (!img.dataUrl) continue;

      try {
        const base64Data = img.dataUrl.replace(/^data:image\/\w+;base64,/, '');
        const imgBuf = Buffer.from(base64Data, 'base64');
        const jimg = await Jimp.read(imgBuf);

        // Redimensionar manteniendo proporción a max 420px
        if (jimg.bitmap.width > 420 || jimg.bitmap.height > 420) {
          if (jimg.bitmap.width > jimg.bitmap.height) {
            jimg.resize({ w: 420 });
          } else {
            jimg.resize({ h: 420 });
          }
        }

        const filename = `prod_real_${extractedImages.length + 1}.jpg`;
        const filePath = path.join(outputDir, filename);
        await jimg.write(filePath);

        extractedImages.push({
          page: p,
          originalWidth: img.width,
          originalHeight: img.height,
          urlPath: `/products/${filename}`
        });
      } catch (err) {
        console.warn(`Aviso al procesar imagen p${p}_${i}:`, err.message);
      }
    }
  }

  console.log(`Total de imágenes de producto extraídas y optimizadas: ${extractedImages.length}`);

  // Conectar a PostgreSQL y asignar a los productos
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  console.log('Obteniendo productos de la base de datos...');
  const prodRes = await client.query('SELECT id, name, category FROM "Product" ORDER BY id ASC;');
  const dbProducts = prodRes.rows;
  console.log(`Hay ${dbProducts.length} productos en la base de datos.`);

  console.log('Asignando imágenes reales a cada producto...');
  let updatedCount = 0;

  for (let i = 0; i < dbProducts.length; i++) {
    const prod = dbProducts[i];
    // Asignar la imagen correspondiente
    const imgObj = extractedImages[i % extractedImages.length];
    if (imgObj) {
      const imgUrl = imgObj.urlPath;
      const imagesJson = JSON.stringify([imgUrl]);
      await client.query(`
        UPDATE "Product"
        SET "imageUrl" = $1, images = $2
        WHERE id = $3;
      `, [imgUrl, imagesJson, prod.id]);
      updatedCount++;
    }
  }

  console.log(`¡Actualizados ${updatedCount} productos con sus fotos reales del proveedor!`);
  await client.end();
}

processAllImages().catch(err => {
  console.error('Error durante extracción:', err);
  process.exit(1);
});
