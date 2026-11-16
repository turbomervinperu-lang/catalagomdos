const { Client } = require('pg');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

async function check() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();
  await client.query("ALTER TABLE \"Order\" ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'Pendiente';");
  const res = await client.query("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'Order';");
  console.log('Updated Order columns:', res.rows);
  await client.end();
}
check().catch(console.error);
