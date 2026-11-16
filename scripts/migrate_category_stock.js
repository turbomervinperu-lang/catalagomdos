require('dotenv').config();
const { Client } = require('pg');

async function migrateCategoryAndStock() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  console.log('Verificando y agregando columnas category y stock...');
  await client.query(`
    ALTER TABLE "Product"
    ADD COLUMN IF NOT EXISTS "category" TEXT DEFAULT 'Otros',
    ADD COLUMN IF NOT EXISTS "stock" TEXT DEFAULT '+5';
  `);

  const res = await client.query(`
    SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'Product';
  `);
  console.log('Columnas en Product:', res.rows.map(r => r.column_name));

  // Ajustar categorías existentes para los productos demo
  await client.query(`
    UPDATE "Product" SET "category" = 'Almacenamiento', "stock" = '+5' WHERE "name" ILIKE '%SSD%' OR "name" ILIKE '%Disco%';
    UPDATE "Product" SET "category" = 'Memoria Ram', "stock" = '+5' WHERE "name" ILIKE '%RAM%' OR "name" ILIKE '%Kingston Fury%';
    UPDATE "Product" SET "category" = 'Otros', "stock" = 'Disponible' WHERE "name" ILIKE '%Mantenimiento%';
    UPDATE "Product" SET "category" = 'Otros', "stock" = '3' WHERE "name" ILIKE '%ASUS TUF%' OR "name" ILIKE '%Laptop%';
  `);

  console.log('Migración completada con éxito.');
  await client.end();
}

migrateCategoryAndStock().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

