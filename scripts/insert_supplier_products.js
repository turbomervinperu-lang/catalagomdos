require('dotenv').config();
const { Client } = require('pg');
const xlsx = require('xlsx');

const excelPath = 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/ListaProductos_Chirimoya_Actualizada.xlsx';
const wb = xlsx.readFile(excelPath);
const sheet = wb.Sheets[wb.SheetNames[0]];
const products = xlsx.utils.sheet_to_json(sheet);

console.log(`Cargados ${products.length} productos del archivo Excel.`);

const CATEGORY_IMAGES = {
  'Monitores': 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
  'Refrigeración': 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80',
  'Case': 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80',
  'Procesadores': 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500&q=80',
  'Procesadores OEM': 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500&q=80',
  'Memoria Ram': 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=80',
  'Almacenamiento': 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80',
  'Tarjetas de Video': 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80',
  'Placas Madres': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
  'Fuente de Poder': 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80',
  'Estabilizadores / UPS': 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&q=80',
  'Periféricos': 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&q=80',
  'Otros': 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80'
};

async function insertProducts() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  console.log('Conectado a PostgreSQL. Insertando productos en el catálogo...');

  let insertedCount = 0;
  for (const p of products) {
    const name = String(p['PRODUCTO']).trim();
    const category = String(p['CATEGORÍA']).trim();
    const stock = String(p['STOCK']).trim();
    const price = parseFloat(p['PRECIO FINAL VENTA (S/)']);
    const description = String(p['DESCRIPCIÓN'] || name).trim();
    const img = CATEGORY_IMAGES[category] || CATEGORY_IMAGES['Otros'];
    const imagesJson = JSON.stringify([img]);

    await client.query(`
      INSERT INTO "Product" (name, category, stock, price, "imageUrl", images, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT DO NOTHING;
    `, [name, category, stock, price, img, imagesJson, description]);

    insertedCount++;
  }

  console.log(`Insertados / actualizados ${insertedCount} productos con éxito.`);

  const countRes = await client.query('SELECT count(*) FROM "Product";');
  console.log(`TOTAL GENERAL de productos en el catálogo: ${countRes.rows[0].count}`);

  const catRes = await client.query(`
    SELECT category, count(*) as cant 
    FROM "Product" 
    GROUP BY category 
    ORDER BY cant DESC;
  `);
  console.log('Resumen por categorías en base de datos:');
  console.table(catRes.rows);

  await client.end();
}

insertProducts().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

