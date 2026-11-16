const { Client } = require('pg');
const fs = require('fs');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

async function dump() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();
  const res = await client.query('SELECT id, name, category, price, description FROM "Product" ORDER BY id ASC;');
  fs.writeFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/products_dump.json', JSON.stringify(res.rows, null, 2), 'utf-8');
  console.log('Dumped', res.rows.length, 'products.');
  await client.end();
}
dump().catch(console.error);
