// pages/api/admin/orders.js
import { Client } from 'pg';
import dotenv from 'dotenv';
import { verifyAdminToken } from '../../../lib/adminAuth';

dotenv.config();

export default async function handler(req, res) {
  // Protección: Solo el administrador autenticado puede ver, modificar o eliminar pedidos
  const auth = verifyAdminToken(req);
  if (!auth.valid) {
    return res.status(401).json({ error: auth.error });
  }

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    if (req.method === 'GET') {
      const result = await client.query(`
        SELECT id, items, total, created_at, COALESCE(status, 'Pendiente') as status 
        FROM "Order" 
        ORDER BY id DESC;
      `);
      return res.status(200).json(result.rows);
    }

    if (req.method === 'PUT') {
      const { id, status } = req.body;
      if (!id || !status) {
        return res.status(400).json({ error: 'Faltan parámetros id o status' });
      }
      const result = await client.query(
        `UPDATE "Order" SET status = $1 WHERE id = $2 RETURNING id, status;`,
        [status, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Orden no encontrada' });
      }
      return res.status(200).json({ ok: true, order: result.rows[0] });
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'Falta el id de la orden' });
      }
      await client.query(`DELETE FROM "Order" WHERE id = $1;`, [id]);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API Orders error:', err);
    return res.status(500).json({ error: err.message });
  } finally {
    await client.end();
  }
}
