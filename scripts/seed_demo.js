require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  const countRes = await client.query('SELECT count(*) FROM "Product"');
  if (parseInt(countRes.rows[0].count) === 0) {
    const demoProducts = [
      {
        name: 'Camiseta Premium de Algodón',
        description: 'Camiseta de alta calidad 100% algodón, suave y transpirable.',
        price: 24.99,
        imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60'
      },
      {
        name: 'Zapatos Deportivos Urban',
        description: 'Zapatillas ligeras y ergonómicas para uso diario o deporte.',
        price: 59.50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60'
      },
      {
        name: 'Reloj Cronógrafo Elegance',
        description: 'Reloj resistente al agua con correa de cuero genuino.',
        price: 89.00,
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60'
      }
    ];

    for (const p of demoProducts) {
      await client.query(
        'INSERT INTO "Product" (name, description, price, "imageUrl") VALUES ($1, $2, $3, $4)',
        [p.name, p.description, p.price, p.imageUrl]
      );
    }
    console.log('Se insertaron 3 productos de demostración exitosamente.');
  } else {
    console.log(`Ya existen ${countRes.rows[0].count} productos en la base de datos.`);
  }

  await client.end();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

