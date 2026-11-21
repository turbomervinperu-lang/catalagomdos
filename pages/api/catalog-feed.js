// pages/api/catalog-feed.js
// Feed CSV oficial compatible con Meta Commerce Manager (WhatsApp Business & Facebook/Instagram Shop).
// Uso:
//   - Todos los productos: https://catalagomdos.vercel.app/api/catalog-feed
//   - Solo una categoría:  https://catalagomdos.vercel.app/api/catalog-feed?category=Case
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

function csvEscape(val) {
  const s = String(val ?? '').replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
  if (/[",]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function detectBrand(name) {
  const u = (name || '').toUpperCase();
  const brands = [
    'THELION', 'MICRONICS', 'MICRONIC', 'DEEPCOOL', 'DEEP COOL', 'ANTRYX',
    'HALION', 'ENKORE', 'CYBERTEL', 'XPG', 'ANTEC', 'COUGAR', 'COOLER MASTER',
    'TEROS', 'DATAONE', 'CLIPPER', 'RUIX', 'ASUS', 'ROG', 'MSI', 'GIGABYTE',
    'KINGSTON', 'ADATA', 'HP', 'CORSAIR', 'AMD', 'INTEL', 'LOGITECH', 'HIKSEMI',
    'WESTERN DIGITAL', 'WESTER DIGITAL', 'MICRON', 'LG', 'SAMSUNG', 'AOC'
  ];
  for (const b of brands) {
    if (u.includes(b)) {
      if (b === 'MICRONIC') return 'MICRONICS';
      if (b === 'DEEP COOL') return 'DEEPCOOL';
      if (b === 'WESTER DIGITAL') return 'WESTERN DIGITAL';
      return b;
    }
  }
  return 'TECNOSISTEMAS MDOS';
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    const { category } = req.query;

    const params = [];
    let where = '';
    if (category && String(category).trim() && String(category).trim() !== 'Mostrar todas') {
      params.push(String(category).trim());
      where = `WHERE category = $1`;
    }

    const result = await client.query(
      `SELECT id, name, description, price, "imageUrl", COALESCE(images, '[]'::jsonb) as images, COALESCE(category, 'General') as category
       FROM "Product"
       ${where}
       ORDER BY id ASC`,
      params
    );

    const headers = [
      'id',
      'title',
      'description',
      'availability',
      'condition',
      'price',
      'link',
      'image_link',
      'additional_image_link',
      'brand',
      'origin_country',
      'product_type',
      'google_product_category'
    ];

    const lines = [headers.join(',')];

    for (const p of result.rows) {
      const imgs = (Array.isArray(p.images) && p.images.length > 0 ? p.images : (p.imageUrl ? [p.imageUrl] : []))
        .filter((u) => typeof u === 'string' && u.startsWith('http'));

      if (imgs.length === 0) continue; // Meta exige imagen HTTPS válida

      const priceNum = parseFloat(p.price);
      if (isNaN(priceNum) || priceNum <= 0) continue;

      const title = String(p.name || '').trim().slice(0, 150);
      const rawDesc = String(p.description || '').trim();
      const description = (rawDesc && rawDesc.length >= 10
        ? `${rawDesc} | Producto nuevo con garantía - TECNOSISTEMAS MDOS`
        : `${title} - Producto 100% nuevo con garantía en TECNOSISTEMAS MDOS. Visita nuestro catálogo en línea.`
      ).slice(0, 4900);

      const row = [
        `mdos-${p.id}`,
        title,
        description,
        'in stock',
        'new',
        `${priceNum.toFixed(2)} PEN`,
        'https://catalagomdos.vercel.app/',
        imgs[0],
        imgs.slice(1, 10).join(','),
        detectBrand(title),
        'CN',
        p.category || 'Case',
        'Electronics > Computers > Computer Components'
      ];

      lines.push(row.map(csvEscape).join(','));
    }

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'inline; filename="tecnosistemas-mdos-catalog.csv"');
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).send('\uFEFF' + lines.join('\n'));
  } catch (err) {
    console.error('Catalog feed error:', err);
    return res.status(500).json({ error: err.message });
  } finally {
    await client.end();
  }
}
