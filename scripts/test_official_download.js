const { downloadImage } = require('./download_util');

async function testDownload() {
  const testUrls = [
    { name: 'msi_mp225.webp', url: 'https://storage-asset.msi.com/global/picture/product/product_1708065696475d116608a37b41be5d39cb858a5c42.webp' },
    { name: 'hp_e24_g4.png', url: 'https://ssl-product-images.www8-hp.com/digmedialib/world-products/v1/cv/004386419/004386419_01_500X500.png' },
    { name: 'samsung_g9.png', url: 'https://images.samsung.com/is/image/samsung/p6pim/pe/ls49dg930slxpe/gallery/pe-odyssey-oled-g9-g93sd-ls49dg930slxpe-542159828?$684_547_PNG$' },
    { name: 'samsung_g3_24.png', url: 'https://images.samsung.com/is/image/samsung/p6pim/pe/ls24dg300elxpe/gallery/pe-odyssey-g3-g30d-ls24dg300elxpe-542163908?$684_547_PNG$' },
    { name: 'asus_rtx3050.png', url: 'https://dlcdnwebimgs.asus.com/gain/CE913DB7-A287-48DF-A62E-09FE9A59B5DC/w1000/h1000' }
  ];

  for (const t of testUrls) {
    try {
      const local = await downloadImage(t.url, t.name);
      console.log('✓ Downloaded:', t.name, '->', local);
    } catch (e) {
      console.error('✗ Failed:', t.name, e.message);
    }
  }
}

testDownload();
