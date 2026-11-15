import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

function getPgClient() {
  return new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });
}

export default async function handler(req, res) {
  if (!process.env.POSTGRES_URL) {
    return res.status(200).json([
      { id: 1, name: 'Producto demo 1', price: 10, imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500' },
      { id: 2, name: 'Producto demo 2', price: 20, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' }
    ]);
  }

  const client = getPgClient();

  try {
    await client.connect();

    if (req.method === 'GET') {
      const { search = '' } = req.query;
      const query = search
        ? 'SELECT * FROM "Product" WHERE name ILIKE $1 ORDER BY id DESC'
        : 'SELECT * FROM "Product" ORDER BY id DESC';
      const params = search ? [`%${search}%`] : [];
      const result = await client.query(query, params);
      return res.status(200).json(result.rows);
    }

    if (req.method === 'POST') {
      const { name, description, price, imageUrl } = req.body;
      if (!name || price === undefined || isNaN(parseFloat(price))) {
        return res.status(400).json({ error: 'Nombre y precio válido son requeridos' });
      }
      const query = `
        INSERT INTO "Product" (name, description, price, "imageUrl")
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      const result = await client.query(query, [name, description || '', parseFloat(price), imageUrl || '']);
      return res.status(201).json(result.rows[0]);
    }

    if (req.method === 'PUT') {
      const { id, name, description, price, imageUrl } = req.body;
      if (!id || !name || price === undefined || isNaN(parseFloat(price))) {
        return res.status(400).json({ error: 'ID, nombre y precio válido son requeridos' });
      }
      const query = `
        UPDATE "Product"
        SET name = $1, description = $2, price = $3, "imageUrl" = $4
        WHERE id = $5
        RETURNING *;
      `;
      const result = await client.query(query, [name, description || '', parseFloat(price), imageUrl || '', id]);
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      return res.status(200).json(result.rows[0]);
    }

    if (req.method === 'DELETE') {
      const id = req.query.id || req.body?.id;
      if (!id) {
        return res.status(400).json({ error: 'ID de producto requerido' });
      }
      const result = await client.query('DELETE FROM "Product" WHERE id = $1 RETURNING id;', [id]);
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      return res.status(200).json({ ok: true, deletedId: id });
    }

    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  } catch (e) {
    console.error('API Error:', e);
    return res.status(500).json({ error: e.message });
  } finally {
    await client.end();
  }
}
