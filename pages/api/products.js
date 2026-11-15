// pages/api/products.js
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
      { id: 1, name: 'Producto demo 1', price: 10, imageUrl: '', images: [] },
      { id: 2, name: 'Producto demo 2', price: 20, imageUrl: '', images: [] }
    ]);
  }

  const client = getPgClient();

  try {
    await client.connect();

    if (req.method === 'GET') {
      const { search = '', minPrice, maxPrice, sortBy = 'id_desc' } = req.query;

      let conditions = [];
      let params = [];

      if (search && search.trim()) {
        params.push(`%${search.trim()}%`);
        conditions.push(`(name ILIKE $${params.length} OR description ILIKE $${params.length})`);
      }

      if (minPrice && !isNaN(parseFloat(minPrice))) {
        params.push(parseFloat(minPrice));
        conditions.push(`price >= $${params.length}`);
      }

      if (maxPrice && !isNaN(parseFloat(maxPrice))) {
        params.push(parseFloat(maxPrice));
        conditions.push(`price <= $${params.length}`);
      }

      let orderClause = 'ORDER BY id DESC';
      if (sortBy === 'price_asc') orderClause = 'ORDER BY price ASC';
      else if (sortBy === 'price_desc') orderClause = 'ORDER BY price DESC';
      else if (sortBy === 'name_asc') orderClause = 'ORDER BY name ASC';
      else if (sortBy === 'id_asc') orderClause = 'ORDER BY id ASC';

      const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
      const query = `
        SELECT id, name, description, price, "imageUrl", COALESCE(images, '[]'::jsonb) as images
        FROM "Product"
        ${whereClause}
        ${orderClause}
      `;

      const result = await client.query(query, params);
      return res.status(200).json(result.rows);
    }

    if (req.method === 'POST') {
      const { name, description, price, imageUrl, images } = req.body;
      if (!name || price === undefined || isNaN(parseFloat(price))) {
        return res.status(400).json({ error: 'Nombre y precio válido en Soles (S/) son requeridos' });
      }

      // Procesar array de hasta 4 imágenes
      let imagesArray = Array.isArray(images) ? images.filter(Boolean).slice(0, 4) : [];
      if (imagesArray.length === 0 && imageUrl) {
        imagesArray = [imageUrl];
      }
      const primaryImage = imagesArray[0] || imageUrl || '';

      const query = `
        INSERT INTO "Product" (name, description, price, "imageUrl", images)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, name, description, price, "imageUrl", images;
      `;
      const result = await client.query(query, [
        name,
        description || '',
        parseFloat(price),
        primaryImage,
        JSON.stringify(imagesArray)
      ]);
      return res.status(201).json(result.rows[0]);
    }

    if (req.method === 'PUT') {
      const { id, name, description, price, imageUrl, images } = req.body;
      if (!id || !name || price === undefined || isNaN(parseFloat(price))) {
        return res.status(400).json({ error: 'ID, nombre y precio válido en Soles (S/) son requeridos' });
      }

      let imagesArray = Array.isArray(images) ? images.filter(Boolean).slice(0, 4) : [];
      if (imagesArray.length === 0 && imageUrl) {
        imagesArray = [imageUrl];
      }
      const primaryImage = imagesArray[0] || imageUrl || '';

      const query = `
        UPDATE "Product"
        SET name = $1, description = $2, price = $3, "imageUrl" = $4, images = $5
        WHERE id = $6
        RETURNING id, name, description, price, "imageUrl", images;
      `;
      const result = await client.query(query, [
        name,
        description || '',
        parseFloat(price),
        primaryImage,
        JSON.stringify(imagesArray),
        id
      ]);

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
