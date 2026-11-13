// scripts/create_order_table.js
require('dotenv').config();
const { Client } = require('pg');
(async () => {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });
  try {
    await client.connect();
    const query = `
      CREATE TABLE IF NOT EXISTS "Order" (
        id SERIAL PRIMARY KEY,
        items JSONB NOT NULL,
        total NUMERIC(12,2) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT now()
      );`;
    await client.query(query);
    console.log('✅ Order table ensured');
  } catch (e) {
    console.error('❌ Error creating Order table', e);
  } finally {
    await client.end();
  }
})();

