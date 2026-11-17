// pages/api/admin/upload.js
// Recibe una imagen (data URL ya comprimida en el navegador), la sube al bucket
// de Vercel Blob y devuelve solo la URL pública corta.
import { put } from '@vercel/blob';
import { verifyAdminToken } from '../../../lib/adminAuth';

export const config = {
  api: { bodyParser: { sizeLimit: '4mb' } },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Protección: Solo administradores autorizados pueden subir imágenes
  const auth = verifyAdminToken(req);
  if (!auth.valid) {
    return res.status(401).json({ error: auth.error });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(500).json({ error: 'Almacenamiento de imágenes no configurado' });
  }

  try {
    const { dataUrl, name } = req.body || {};
    const m = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/s.exec(dataUrl || '');
    if (!m) {
      return res.status(400).json({ error: 'Imagen inválida' });
    }
    const type = m[1];
    const buf = Buffer.from(m[2], 'base64');
    if (buf.length > 3.5 * 1024 * 1024) {
      return res.status(413).json({ error: 'La imagen es demasiado grande' });
    }
    const ext = type.includes('png') ? 'png' : type.includes('webp') ? 'webp' : 'jpg';
    const safe = String(name || 'foto').toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40) || 'foto';

    const blob = await put(`products/${safe}.${ext}`, buf, {
      access: 'public',
      contentType: type,
      addRandomSuffix: true,
      cacheControlMaxAge: 31536000,
    });
    return res.status(200).json({ ok: true, url: blob.url });
  } catch (err) {
    console.error('Upload error:', err);
    return res.status(500).json({ error: err.message });
  }
}
