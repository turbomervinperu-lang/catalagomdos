import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
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

