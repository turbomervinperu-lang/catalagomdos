// pages/api/admin/auth.js
import { Client } from 'pg';
import dotenv from 'dotenv';
import { createAdminToken } from '../../../lib/adminAuth';

dotenv.config();

function getPgClient() {
  return new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, password, currentPassword, newPassword } = req.body || {};

  const client = getPgClient();

  try {
    await client.connect();

    // Obtener la contraseña actual guardada en Setting (o fallback 1927)
    const checkRes = await client.query('SELECT value FROM "Setting" WHERE key = $1', ['admin_password']);
    const savedPassword = checkRes.rows.length > 0 ? checkRes.rows[0].value : '1927';

    // 1. Iniciar sesión / Verificar contraseña
    if (action === 'login') {
      if (!password || password.toString().trim() !== savedPassword.toString().trim()) {
        return res.status(401).json({ ok: false, error: 'Contraseña incorrecta' });
      }
      const token = createAdminToken(12);
      return res.status(200).json({ ok: true, token, message: 'Acceso autorizado' });
    }

    // 2. Cambiar contraseña
    if (action === 'change-password') {
      if (!currentPassword || currentPassword.toString().trim() !== savedPassword.toString().trim()) {
        return res.status(401).json({ ok: false, error: 'La contraseña actual no es correcta' });
      }
      if (!newPassword || newPassword.toString().trim().length < 3) {
        return res.status(400).json({ ok: false, error: 'La nueva contraseña debe tener al menos 3 caracteres' });
      }

      const updateQuery = `
        INSERT INTO "Setting" (key, value)
        VALUES ('admin_password', $1)
        ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
      `;
      await client.query(updateQuery, [newPassword.toString().trim()]);

      const newToken = createAdminToken(12);
      return res.status(200).json({ ok: true, token: newToken, message: 'Contraseña actualizada exitosamente' });
    }

    return res.status(400).json({ error: 'Acción no válida' });
  } catch (err) {
    console.error('Auth error:', err);
    return res.status(500).json({ error: err.message });
  } finally {
    await client.end();
  }
}
