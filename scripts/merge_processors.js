const { Client } = require('pg');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

async function run() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  const countBefore = await client.query('SELECT COUNT(*) FROM "Product" WHERE category = \'Procesadores OEM\';');
  console.log('Products in Procesadores OEM before:', countBefore.rows[0].count);

  const updateRes = await client.query('UPDATE "Product" SET category = \'Procesadores\' WHERE category = \'Procesadores OEM\';');
  console.log('Updated rows:', updateRes.rowCount);

  const countAfter = await client.query('SELECT COUNT(*) FROM "Product" WHERE category = \'Procesadores\';');
  console.log('Total products in Procesadores now:', countAfter.rows[0].count);

  // Check any product with 'OFERTA'
  const ofertaCheck = await client.query('SELECT id, name, category, price FROM "Product" WHERE name ILIKE \'%OFERTA%\' OR description ILIKE \'%OFERTA%\';');
  console.log('Products currently with OFERTA in name/description:', ofertaCheck.rows);

  await client.end();
}

run().catch(console.error);

