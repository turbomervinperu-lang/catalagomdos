const { Client } = require('pg');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

async function run() {
  const client = new Client({ connectionString: process.env.POSTGRES_URL, ssl: { rejectUnauthorized: false } });
  await client.connect();

  const t0 = Date.now();
  const all = await client.query('SELECT id, name, description, "imageUrl", images FROM "Product";');
  console.log('Query time ms:', Date.now() - t0, '| rows:', all.rows.length);

  const payload = JSON.stringify(all.rows);
  console.log('Total JSON payload KB:', (payload.length / 1024).toFixed(1));

  let base64Count = 0, base64Bytes = 0, pathCount = 0, urlCount = 0, empty = 0;
  all.rows.forEach(r => {
    const imgs = Array.isArray(r.images) ? r.images : [];
    const list = imgs.length ? imgs : (r.imageUrl ? [r.imageUrl] : []);
    if (!list.length) empty++;
    list.forEach(i => {
      if (typeof i !== 'string') return;
      if (i.startsWith('data:')) { base64Count++; base64Bytes += i.length; }
      else if (i.startsWith('/')) pathCount++;
      else urlCount++;
    });
  });
  console.log({ base64Count, base64KB: (base64Bytes / 1024).toFixed(1), pathCount, urlCount, productsWithoutImage: empty });

  const big = all.rows
    .map(r => ({ id: r.id, kb: (JSON.stringify(r).length / 1024).toFixed(1) }))
    .sort((a, b) => b.kb - a.kb).slice(0, 5);
  console.log('Heaviest rows:', big);
  await client.end();
}
run().catch(console.error);

