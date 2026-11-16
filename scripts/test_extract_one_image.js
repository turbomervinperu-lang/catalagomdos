const fs = require('fs');
const { PDFParse } = require('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/node_modules/pdf-parse');

async function testExtract() {
  const buf = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/lista_proveedor.pdf');
  const parser = new PDFParse(new Uint8Array(buf));
  const res = await parser.getImage({ first: 2, last: 2 });
  const page = res.pages[0];
  console.log(`Página 2 tiene ${page.images.length} imágenes.`);

  // Guardar las primeras 3 imágenes de la página 2
  fs.mkdirSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/public/products', { recursive: true });

  for (let i = 0; i < Math.min(page.images.length, 4); i++) {
    const img = page.images[i];
    console.log(`Imagen ${i}: ${img.name}, w=${img.width}, h=${img.height}, dataUrl len=${img.dataUrl?.length}`);
    if (img.dataUrl) {
      const base64Data = img.dataUrl.replace(/^data:image\/\w+;base64,/, '');
      const imgBuffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(`C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/public/products/test_${i}.png`, imgBuffer);
      console.log(`Guardado test_${i}.png, tamaño: ${imgBuffer.length} bytes`);
    }
  }
}

testExtract().catch(console.error);

