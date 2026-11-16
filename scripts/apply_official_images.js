const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config({ path: 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/.env' });

const officialDir = path.join(__dirname, '..', 'public', 'products', 'official');
if (!fs.existsSync(officialDir)) fs.mkdirSync(officialDir, { recursive: true });

function curlDownload(url, filename) {
  const dest = path.join(officialDir, filename);
  try {
    const cmd = `curl.exe -s -L -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" "${url}" -o "${dest}"`;
    execSync(cmd, { timeout: 15000 });
    if (fs.existsSync(dest) && fs.statSync(dest).size > 2000) {
      console.log(`✓ OK: ${filename} (${fs.statSync(dest).size} bytes)`);
      return `/products/official/${filename}`;
    } else {
      console.warn(`✗ Too small or empty: ${filename}`);
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      return null;
    }
  } catch (err) {
    console.error(`✗ Error downloading ${filename}:`, err.message);
    if (fs.existsSync(dest)) fs.unlinkSync(dest);
    return null;
  }
}

// Mapa de productos oficiales por ID o patrón
const officialMap = [
  // Monitores
  { id: 36, file: 'msi_pro_mp225.webp', url: 'https://storage-asset.msi.com/global/picture/product/product_1708065696475d116608a37b41be5d39cb858a5c42.webp' },
  { id: 54, file: 'xiaomi_g27i.png', url: 'https://i02.appmifile.com/13_operator_sg/29/08/2023/1eb6d4eb5ec741910ee2ba8e53fe1db5.png' },

  // Procesadores
  { id: 104, file: 'intel_i3_10100f.jpg', url: 'https://m.media-amazon.com/images/I/61N-c3E82gL._AC_SL1500_.jpg' },
  { id: 105, file: 'intel_i5_12400.jpg', url: 'https://m.media-amazon.com/images/I/51wN8dZ8vLL._AC_SL1000_.jpg' },
  { id: 106, file: 'intel_i7_14700.jpg', url: 'https://m.media-amazon.com/images/I/61F1v563U0L._AC_SL1500_.jpg' },
  { id: 107, file: 'intel_i9_14900.jpg', url: 'https://m.media-amazon.com/images/I/61Y-F0e70TL._AC_SL1500_.jpg' },
  { id: 113, file: 'amd_ryzen9_9900x.jpg', url: 'https://m.media-amazon.com/images/I/51zJ8U9Qv7L._AC_SL1000_.jpg' },
  { id: 114, file: 'amd_ryzen5_9600x.jpg', url: 'https://m.media-amazon.com/images/I/51p8q-wD9yL._AC_SL1000_.jpg' },
  { id: 115, file: 'amd_ryzen5_8600g.jpg', url: 'https://m.media-amazon.com/images/I/51sV+v-3FpL._AC_SL1000_.jpg' },
  { id: 116, file: 'amd_ryzen5_5500.jpg', url: 'https://m.media-amazon.com/images/I/61V69znh56L._AC_SL1384_.jpg' },
  { id: 117, file: 'amd_ryzen5_5600gt.jpg', url: 'https://m.media-amazon.com/images/I/51f9MhR6iYL._AC_SL1000_.jpg' },
  { id: 118, file: 'amd_ryzen5_7600x.jpg', url: 'https://m.media-amazon.com/images/I/512yvI1E9bL._AC_SL1000_.jpg' },
  { id: 119, file: 'amd_ryzen5_7600x_box.jpg', url: 'https://m.media-amazon.com/images/I/512yvI1E9bL._AC_SL1000_.jpg' },

  // Placas Madres
  { id: 150, file: 'asus_rtx3050_dual.png', url: 'https://dlcdnwebimgs.asus.com/gain/CE913DB7-A287-48DF-A62E-09FE9A59B5DC/w1000/h1000' },
  { id: 152, file: 'gigabyte_z890_eagle.png', url: 'https://www.gigabyte.com/FileUpload/Global/KeyFeature/2873/innergigabyte/images/box.png' },
  { id: 153, file: 'asus_prime_b550m_a.png', url: 'https://dlcdnwebimgs.asus.com/gain/B570A700-1707-42CE-8302-601CEE3C0F98/w1000/h1000' },
  { id: 154, file: 'asus_prime_a520m_k.png', url: 'https://dlcdnwebimgs.asus.com/gain/3DCEBC4E-DF1C-4B90-9FF6-8E300B4B52EE/w1000/h1000' },
  { id: 155, file: 'asus_prime_h610m_k.png', url: 'https://dlcdnwebimgs.asus.com/gain/E3F0A274-C5A1-4239-B6F1-3F713837D9EB/w1000/h1000' },

  // Almacenamiento
  { id: 135, file: 'kingston_nv3.jpg', url: 'https://media.kingston.com/kingston/product/ktc-product-ssd-snv3s-1000g-1-zm-lg.jpg' },
  { id: 136, file: 'kingston_fury_renegade.jpg', url: 'https://media.kingston.com/kingston/product/ktc-product-ssd-sfyrsk-1000g-1-zm-lg.jpg' },
  { id: 145, file: 'adata_su630.png', url: 'https://www.adata.com/upload/Product/ProductModel/Images/594_product.png' },
  { id: 146, file: 'adata_su650.png', url: 'https://www.adata.com/upload/Product/ProductModel/Images/611_product.png' },

  // Memoria Ram
  { id: 121, file: 'corsair_vengeance_lpx.png', url: 'https://www.corsair.com/medias/sys_master/images/images/h82/h84/9110756032542/-CMK16GX4M2B3200C16-Gallery-VENG-LPX-BLK-01.png' },
  { id: 122, file: 'xpg_spectrix_d60g.png', url: 'https://www.xpg.com/upload/Product/ProductModel/Images/588_product.png' },
  { id: 124, file: 'xpg_gammix_d35_black.png', url: 'https://www.xpg.com/upload/Product/ProductModel/Images/929_product.png' },
  { id: 125, file: 'xpg_gammix_d35_white.png', url: 'https://www.xpg.com/upload/Product/ProductModel/Images/930_product.png' },

  // Refrigeración
  { id: 64, file: 'corsair_titan_240_black.png', url: 'https://www.corsair.com/medias/sys_master/images/images/h8d/h9e/10663456768030/-CW-9061016-WW-Gallery-Titan-240-RX-RGB-BLK-01.png' },
  { id: 65, file: 'corsair_titan_240_white.png', url: 'https://www.corsair.com/medias/sys_master/images/images/hbe/hf9/10663459291166/-CW-9061020-WW-Gallery-Titan-240-RX-RGB-WHT-01.png' },
  { id: 66, file: 'msi_coreliquid_a13_black.png', url: 'https://storage-asset.msi.com/global/picture/product/product_1717056637380d196412e2c5e50529949ca8101569.png' },
  { id: 67, file: 'msi_coreliquid_a13_white.png', url: 'https://storage-asset.msi.com/global/picture/product/product_17170568019623e18a8019488a1b6379f85c18b105.png' },

  // Fuentes de Poder
  { id: 165, file: 'seasonic_focus_gx1000.png', url: 'https://seasonic.com/wp-content/uploads/2023/11/FOCUS-GX-ATX-3.0-Front-1.png' },
  { id: 166, file: 'evga_500_w2.png', url: 'https://images.evga.com/products/spec/100-W2-0500-K1.png' },
  { id: 167, file: 'msi_mag_a650bn.png', url: 'https://storage-asset.msi.com/global/picture/product/product_1629881856711c183cf5354beba05d93d3950efb0e.png' },
  { id: 168, file: 'xpg_pylon_650.png', url: 'https://www.xpg.com/upload/Product/ProductModel/Images/710_product.png' },
  { id: 169, file: 'xpg_pylon_650_b.png', url: 'https://www.xpg.com/upload/Product/ProductModel/Images/710_product.png' },
];

async function apply() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();

  console.log('1. Limpiando todas las imágenes erróneas y dejando en blanco por defecto...');
  await client.query('UPDATE "Product" SET "imageUrl" = \'\', images = \'[]\';');
  console.log('✓ Todas las imágenes restablecidas a blanco.');

  console.log('2. Descargando y asignando imágenes oficiales verificadas...');
  let count = 0;
  for (const item of officialMap) {
    const localPath = curlDownload(item.url, item.file);
    if (localPath) {
      await client.query(
        'UPDATE "Product" SET "imageUrl" = $1, images = $2 WHERE id = $3;',
        [localPath, JSON.stringify([localPath]), item.id]
      );
      count++;
    }
  }

  console.log(`✓ Asignadas ${count} imágenes oficiales verificadas.`);
  console.log('✓ Los demás productos han quedado en blanco para subida manual por el usuario en el panel.');

  await client.end();
}

apply().catch(console.error);

