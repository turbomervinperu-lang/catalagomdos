require('dotenv').config();
const { Client } = require('pg');

async function migrateImagesColumn() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  await client.query(`
    ALTER TABLE "Product"
    ADD COLUMN IF NOT EXISTS "images" JSONB DEFAULT '[]'::jsonb;
  `);

  // Actualizar los productos existentes para que tengan su imagen actual en el array
  await client.query(`
    UPDATE "Product"
    SET "images" = jsonb_build_array("imageUrl")
    WHERE ("images" IS NULL OR jsonb_array_length("images") = 0) AND "imageUrl" IS NOT NULL AND "imageUrl" != '';
  `);

  console.log('Columna images agregada y sincronizada correctamente en PostgreSQL.');
  await client.end();
}

migrateImagesColumn().catch(err => {
  console.error(err);
  process.exit(1);
});
