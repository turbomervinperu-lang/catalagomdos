// pages/api/products.js
import { Client } from 'pg';
import dotenv from 'dotenv';
import { verifyAdminToken } from '../../lib/adminAuth';

dotenv.config();

function getPgClient() {
  return new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });
}

export default async function handler(req, res) {
  // Protección: Solo administradores autorizados pueden crear, modificar o eliminar productos
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    const auth = verifyAdminToken(req);
    if (!auth.valid) {
      return res.status(401).json({ error: auth.error });
    }
  }

  if (!process.env.POSTGRES_URL) {
    return res.status(200).json([
      { id: 1, name: 'Producto demo 1', price: 10, imageUrl: '', images: [], category: 'Almacenamiento', stock: '+5' },
      { id: 2, name: 'Producto demo 2', price: 20, imageUrl: '', images: [], category: 'Almacenamiento', stock: '+5' }
    ]);
  }

  const client = getPgClient();

  try {
    await client.connect();

    if (req.method === 'GET') {
      const { search = '', category = '', minPrice, maxPrice, sortBy = 'id_desc' } = req.query;

      let conditions = [];
      let params = [];

      if (search && search.trim()) {
        params.push(`%${search.trim()}%`);
        conditions.push(`(name ILIKE $${params.length} OR description ILIKE $${params.length})`);
      }

      if (category && category.trim() && category !== 'Mostrar todas') {
        params.push(category.trim());
        conditions.push(`category = $${params.length}`);
      }

      if (minPrice && !isNaN(parseFloat(minPrice))) {
        params.push(parseFloat(minPrice));
        conditions.push(`price >= $${params.length}`);
      }

      if (maxPrice && !isNaN(parseFloat(maxPrice))) {
        params.push(parseFloat(maxPrice));
        conditions.push(`price <= $${params.length}`);
      }

      let baseOrder = 'id DESC';
      if (sortBy === 'price_asc') baseOrder = 'price ASC';
      else if (sortBy === 'price_desc') baseOrder = 'price DESC';
      else if (sortBy === 'name_asc') baseOrder = 'name ASC';
      else if (sortBy === 'id_asc') baseOrder = 'id ASC';

      // Los productos que contengan la palabra OFERTA siempre aparecen de primeros al cargar
      const orderClause = `ORDER BY CASE WHEN (name ILIKE '%OFERTA%' OR description ILIKE '%OFERTA%') THEN 0 ELSE 1 END ASC, ${baseOrder}`;

      const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
      const query = `
        SELECT 
          id, 
          name, 
          description, 
          price, 
          "imageUrl", 
          COALESCE(images, '[]'::jsonb) as images,
          COALESCE(category, '') as category,
          COALESCE(stock, '+5') as stock
        FROM "Product"
        ${whereClause}
        ${orderClause}
      `;

      const result = await client.query(query, params);
      // Caché de CDN corta: el catálogo carga rápido y se refresca solo.
      // El panel de administración pide nocache=1 para ver los cambios al instante.
      if (req.query.nocache) {
        res.setHeader('Cache-Control', 'no-store');
      } else {
        res.setHeader('Cache-Control', 'public, s-maxage=20, stale-while-revalidate=120');
      }
      return res.status(200).json(result.rows);
    }

    if (req.method === 'POST') {
      const { name, description, price, imageUrl, images, category, stock } = req.body;
      if (!name || price === undefined || isNaN(parseFloat(price))) {
        return res.status(400).json({ error: 'Nombre y precio válido en Soles (S/) son requeridos' });
      }

      // Procesar array de hasta 4 imágenes
      let imagesArray = Array.isArray(images) ? images.filter(Boolean).slice(0, 4) : [];
      if (imagesArray.length === 0 && imageUrl) {
        imagesArray = [imageUrl];
      }
      const primaryImage = imagesArray[0] || imageUrl || '';
      const prodCategory = category && category.trim() ? category.trim() : '';
      const prodStock = stock && stock.trim() ? stock.trim() : '+5';

      const query = `
        INSERT INTO "Product" (name, description, price, "imageUrl", images, category, stock)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, name, description, price, "imageUrl", images, category, stock;
      `;
      const result = await client.query(query, [
        name,
        description || '',
        parseFloat(price),
        primaryImage,
        JSON.stringify(imagesArray),
        prodCategory,
        prodStock
      ]);
      return res.status(201).json(result.rows[0]);
    }

    if (req.method === 'PUT') {
      const { id, name, description, price, imageUrl, images, category, stock } = req.body;
      if (!id || !name || price === undefined || isNaN(parseFloat(price))) {
        return res.status(400).json({ error: 'ID, nombre y precio válido en Soles (S/) son requeridos' });
      }

      let imagesArray = Array.isArray(images) ? images.filter(Boolean).slice(0, 4) : [];
      if (imagesArray.length === 0 && imageUrl) {
        imagesArray = [imageUrl];
      }
      const primaryImage = imagesArray[0] || imageUrl || '';
      const prodCategory = category && category.trim() ? category.trim() : '';
      const prodStock = stock && stock.trim() ? stock.trim() : '+5';

      const query = `
        UPDATE "Product"
        SET name = $1, description = $2, price = $3, "imageUrl" = $4, images = $5, category = $6, stock = $7
        WHERE id = $8
        RETURNING id, name, description, price, "imageUrl", images, category, stock;
      `;
      const result = await client.query(query, [
        name,
        description || '',
        parseFloat(price),
        primaryImage,
        JSON.stringify(imagesArray),
        prodCategory,
        prodStock,
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
