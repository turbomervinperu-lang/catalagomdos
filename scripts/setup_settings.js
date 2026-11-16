require('dotenv').config();
const { Client } = require('pg');

async function setupSettingsTable() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS "Setting" (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  // Insertar contraseña por defecto si no existe
  const res = await client.query('SELECT value FROM "Setting" WHERE key = $1', ['admin_password']);
  if (res.rows.length === 0) {
    await client.query('INSERT INTO "Setting" (key, value) VALUES ($1, $2)', ['admin_password', '1927']);
    console.log('Tabla Setting creada y contraseña inicial 1927 establecida.');
  } else {
    console.log('Tabla Setting ya existía. Clave actual configurada.');
  }

  await client.end();
}

setupSettingsTable().catch(err => {
  console.error(err);
  process.exit(1);
});

