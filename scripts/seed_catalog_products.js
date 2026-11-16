require('dotenv').config();
const { Client } = require('pg');

const productsToSeed = [
  // Placas Madres (como en las imágenes 2 y 3)
  {
    name: 'PLACA MADRE A520M K GIGABYTE (AM4) (DDR4)',
    category: 'Placas Madres',
    stock: '+5',
    price: 170.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Soporte procesadores AMD Ryzen serie 5000 / 4000 / 3000, 2 ranuras DDR4, PCIe 3.0, M.2 NVMe, Gigabit LAN.'
  },
  {
    name: 'PLACA MADRE MSI A520M - A PRO (AM4) (DDR4)',
    category: 'Placas Madres',
    stock: '4',
    price: 175.00,
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500&q=80',
    description: 'Placa madre micro-ATX de alta durabilidad, audio boost, turbo M.2, DDR4 boost para máximo rendimiento.'
  },
  {
    name: 'PLACA MADRE ASUS PRIME A520M-K (AM4) (DDR4)',
    category: 'Placas Madres',
    stock: '+5',
    price: 182.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Socket AM4, disipadores VRM, protección 5X Protection III, HDMI, D-Sub, USB 3.2 Gen 1.'
  },
  {
    name: 'PLACA MADRE GIGABYTE H610M K (LGA1700) (DDR4)',
    category: 'Placas Madres',
    stock: '3',
    price: 229.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Compatible con Intel Core de 12va, 13ra y 14ta generación, diseño VRM digital hibrido.'
  },
  {
    name: 'PLACA MADRE GIGABYTE H610M K V2 (LGA1700) (DDR5)',
    category: 'Placas Madres',
    stock: '+5',
    price: 240.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Compatible con memoria DDR5 ultrarrápida, PCIe 4.0 x16, GbE LAN con gestión de ancho de banda.'
  },
  {
    name: 'PLACA MADRE ASUS PRIME H610M-K S/V/L (LGA1700) (DDR5)',
    category: 'Placas Madres',
    stock: '+5',
    price: 240.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Socket LGA1700, ranura M.2 de 32Gbps, conectores frontales USB 3.2 Gen 1.'
  },
  {
    name: 'PLACA MADRE ASROCK H610-HDV M.2 (LGA1700) (DDR5)',
    category: 'Placas Madres',
    stock: '4',
    price: 244.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Fases de poder resistentes, salidas HDMI, DisplayPort y D-Sub, ranura Ultra M.2.'
  },
  {
    name: 'PLACA MADRE ASUS PRIME H610M-K (LGA1700) (DDR4)',
    category: 'Placas Madres',
    stock: '+5',
    price: 245.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Doble canal DDR4, protección eléctrica avanzada, refrigeración optimizada.'
  },
  {
    name: 'PLACA MADRE GIGABYTE H610M K SVL (LGA1700) (DDR5)',
    category: 'Placas Madres',
    stock: '5',
    price: 255.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Versión SVL con salida de video multimonitor y alta estabilidad eléctrica.'
  },
  {
    name: 'PLACA MADRE GIGABYTE B550M-K (AM4) (DDR4)',
    category: 'Placas Madres',
    stock: '+5',
    price: 285.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Chipset AMD B550, PCIe 4.0 x16, conectores NVMe M.2 dobles, audio de alta definición.'
  },
  {
    name: 'PLACA MADRE ASUS PRIME B550M-A AC WIFI (AM4) (DDR4)',
    category: 'Placas Madres',
    stock: '+5',
    price: 334.00,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
    description: 'Wi-Fi integrado + Bluetooth, Aura Sync RGB, disipador VRM, compatibilidad con procesadores Ryzen 5000.'
  },

  // Periféricos y accesorios (como en la imagen 1)
  {
    name: 'KIT GAMER ENKORE BRAVIO 3 G1000-3 TECLADO +MOUSE+ PAD',
    category: 'Periféricos',
    stock: '+5',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&q=80',
    description: 'Combo Gamer 3 en 1: Teclado con retroiluminación RGB, mouse óptico ergonómico y mousepad antideslizante.'
  },
  {
    name: 'DISIPADOR DE TORRE DEEPCOOL AK620 DIGITAL SE',
    category: 'Refrigeración',
    stock: '1',
    price: 280.00,
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80',
    description: 'Disipador de doble torre con pantalla de estado digital en tiempo real y 6 tubos de disipación.'
  },
  {
    name: 'BASE PLEGABLE AIRBOOM PARA LAPTOP',
    category: 'Periféricos',
    stock: '+5',
    price: 10.00,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'Soporte ergonómico ajustable para laptops de 11 a 17 pulgadas, disipación pasiva.'
  },
  {
    name: 'MOUSE ENKORE FORTIS EMK155 WIFI',
    category: 'Periféricos',
    stock: '+5',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'Mouse inalámbrico 2.4GHz con nano receptor USB, diseño ergonómico para largas jornadas.'
  },
  {
    name: 'PARLANTE ENKORE BRAIN ENS301 RGB',
    category: 'Periféricos',
    stock: '+5',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80',
    description: 'Parlantes compactos 2.0 con iluminación dinámica RGB, conexión USB y Jack 3.5mm.'
  },
  {
    name: 'TECLADO OFICINA HALION HA-K390 USB',
    category: 'Periféricos',
    stock: '+5',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    description: 'Teclado multimedia resistente a derrames, teclas silenciosas y conexión USB Plug & Play.'
  },
  {
    name: 'PASTA TERMICA DEEPCOOL Z3 1.5GR',
    category: 'Refrigeración',
    stock: '3',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80',
    description: 'Pasta térmica de alta conductividad para CPUs y GPUs, no conductora de electricidad.'
  },
  {
    name: 'PARLANTE CYBERTEL STORM CYB S201 6W 2.0',
    category: 'Periféricos',
    stock: '+5',
    price: 17.00,
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80',
    description: 'Sonido estéreo envolvente de 6W RMS, control de volumen en cable, alimentación USB.'
  },
  {
    name: 'MOUSE OFICINA ACER OMW316 WHITE',
    category: 'Periféricos',
    stock: '5',
    price: 19.00,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'Mouse óptico con sensor de 1200 DPI, diseño ambidiestro en color blanco.'
  },
  {
    name: 'MOUSE OFICINA ACER OMW316 BLACK',
    category: 'Periféricos',
    stock: '4',
    price: 19.00,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'Mouse óptico con sensor de 1200 DPI, alta precisión y resistencia.'
  },
  {
    name: 'PARLANTE ENKORE CADET ENK S302 2.0',
    category: 'Periféricos',
    stock: '+5',
    price: 19.00,
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80',
    description: 'Altavoces de escritorio estéreo 2.0 con bajos reforzados y alimentación USB.'
  },
  {
    name: 'ADAPTADOR TP-LINK MERCUSYS MA530 NANO BLUETOOTH 5.4 USB',
    category: 'Periféricos',
    stock: '2',
    price: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&q=80',
    description: 'Adaptador Bluetooth 5.4 ultrarrápido y de ultra baja latencia para PC y laptops.'
  },
  {
    name: 'AUDIFONO GAMER HALION HA-S8 LED ROJO',
    category: 'Periféricos',
    stock: '2',
    price: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',
    description: 'Audífono con micrófono omnidireccional, almohadillas ergonómicas y luces LED rojas.'
  },
  {
    name: 'MOUSE GAMER CYBERTEL STRIKER WHITE CBX M601W 7200DPI',
    category: 'Periféricos',
    stock: '+5',
    price: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'Sensor óptico gamer de 7200 DPI ajustables, iluminación RGB personalizable, cable trenzado.'
  },
  {
    name: 'MOUSE GAMER HALION XTREME M607 BLACK/WHITE RGB 7200DPI',
    category: 'Periféricos',
    stock: '2',
    price: 23.00,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'Diseño ergonómico gamer con pesas ajustables y selector de resolución al instante.'
  },
  {
    name: 'ADAPTADOR TP-LINK UB500 NANO BLUETOOTH 5.4 USB',
    category: 'Periféricos',
    stock: '4',
    price: 23.00,
    imageUrl: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=500&q=80',
    description: 'Bluetooth 5.4 de largo alcance, empareja hasta 7 dispositivos simultáneos.'
  }
];

async function seedProducts() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  console.log(`Insertando / actualizando ${productsToSeed.length} productos reales...`);

  for (const p of productsToSeed) {
    const imagesJson = JSON.stringify([p.imageUrl]);
    await client.query(`
      INSERT INTO "Product" (name, category, stock, price, "imageUrl", images, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT DO NOTHING;
    `, [p.name, p.category, p.stock, p.price, p.imageUrl, imagesJson, p.description]);
  }

  const countRes = await client.query('SELECT count(*) FROM "Product";');
  console.log(`Total de productos en base de datos: ${countRes.rows[0].count}`);

  await client.end();
}

seedProducts().catch(err => {
  console.error('Error al insertar productos:', err);
  process.exit(1);
});
