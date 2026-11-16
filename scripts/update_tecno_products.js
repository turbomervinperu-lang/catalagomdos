require('dotenv').config();
const { Client } = require('pg');

async function updateProducts() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  await client.query('DELETE FROM "Product"');

  const tecnoProducts = [
    {
      name: 'Disco Sólido SSD Kingston 480GB SATA 2.5"',
      description: 'Lectura hasta 500MB/s, ideal para repotenciar laptops y PC de escritorio.',
      price: 34.50,
      imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=60'
    },
    {
      name: 'Memoria RAM DDR4 16GB 3200MHz Kingston Fury Beast',
      description: 'Alto rendimiento para gaming y multitarea profesional. Disipador de calor negro.',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=60'
    },
    {
      name: 'Mantenimiento Preventivo y Limpieza de PC / Laptop',
      description: 'Cambio de pasta térmica de alta conductividad, limpieza profunda de ventiladores y optimización del sistema.',
      price: 25.00,
      imageUrl: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&auto=format&fit=crop&q=60'
    },
    {
      name: 'Laptop Gamer ASUS TUF Core i7 16GB RAM RTX 3050',
      description: 'Pantalla 144Hz FHD, 512GB NVMe SSD, teclado retroiluminado RGB, Windows 11 Pro.',
      price: 849.00,
      imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=60'
    }
  ];

  for (const p of tecnoProducts) {
    await client.query(
      'INSERT INTO "Product" (name, description, price, "imageUrl") VALUES ($1, $2, $3, $4)',
      [p.name, p.description, p.price, p.imageUrl]
    );
  }

  console.log('Productos de TECNOSISTEMAS MDOS actualizados con éxito en la base de datos.');
  await client.end();
}

updateProducts().catch(err => {
  console.error(err);
  process.exit(1);
});

