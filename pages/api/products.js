import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  // Si la variable de entorno no está definida, devolvemos datos de ejemplo
  if (!process.env.POSTGRES_URL) {
    return res.status(200).json([
      { id: 1, name: 'Producto demo', price: '$10', image: '/placeholder.png' },
      { id: 2, name: 'Otro demo', price: '$20', image: '/placeholder.png' }
    ]);
  }
  const { search = '' } = req.query;
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });
  try {
    await client.connect();
    const query = search
      ? 'SELECT * FROM "Product" WHERE name ILIKE $1 ORDER BY name'
      : 'SELECT * FROM "Product" ORDER BY name';
    const params = search ? [`%${search}%`] : [];
    const result = await client.query(query, params);
    res.status(200).json(result.rows);
  } catch (e) {
    console.error('API error', e);
    res.status(500).json({ error: e.message });
  } finally {
    await client.end();
  }
}
