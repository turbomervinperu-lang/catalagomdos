const { Client } = require('pg');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

async function test() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  const payload = {
    items: [
      { id: 101, name: 'CASE ENKORE DELTA ENC 1017 GABINETE 230W 8CM FAN', price: 59, quantity: 1 }
    ],
    customer: {
      name: 'Cliente Prueba Mdos',
      phone: '929198813',
      notes: 'Envío urgente a oficina'
    }
  };

  const res = await client.query(
    'INSERT INTO "Order" (items, total, status) VALUES ($1, $2, $3) RETURNING id, created_at, status, total;',
    [JSON.stringify(payload), 59.00, 'Pendiente']
  );
  console.log('Inserted test order:', res.rows[0]);

  const list = await client.query('SELECT id, total, status, created_at FROM "Order" ORDER BY id DESC LIMIT 3;');
  console.log('Latest orders in DB:', list.rows);

  await client.end();
}
test().catch(console.error);
