const { Client } = require('pg');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

async function run() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();
  const res = await client.query('SELECT id, name, category, price, "imageUrl" FROM "Product" ORDER BY id ASC;');
  console.log('Total products in DB:', res.rows.length);
  // Group by category
  const byCat = {};
  res.rows.forEach(r => {
    byCat[r.category] = (byCat[r.category] || 0) + 1;
  });
  console.log('Count by category:', byCat);
  console.log('First 20 items:');
  res.rows.slice(0, 20).forEach(r => {
    console.log(`[ID ${r.id}] [${r.category}] ${r.name}`);
  });
  await client.end();
}

run().catch(console.error);

