const fs = require('fs');
const { PDFParse } = require('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/node_modules/pdf-parse');

async function correlate() {
  const buf = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/lista_proveedor.pdf');
  const parser = new PDFParse(new Uint8Array(buf));
  const textRes = await parser.getText();

  for (let p = 1; p <= 14; p++) {
    const pageText = textRes.pages[p - 1].text;
    const lines = pageText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    
    // Buscar productos
    const prods = [];
    for (const l of lines) {
      if (/S\/\.?\s*[\d,]+/i.test(l)) {
        prods.push(l.slice(0, 70));
      }
    }

    const imgRes = await parser.getImage({ first: p, last: p });
    const imgs = imgRes.pages[0].images;

    console.log(`=== PÁGINA ${p} ===`);
    console.log(`Productos detectados (${prods.length}):`);
    prods.forEach((pr, i) => console.log(`   P${i + 1}: ${pr}`));
    console.log(`Imágenes detectadas (${imgs.length}):`);
    imgs.forEach((im, i) => console.log(`   I${i + 1}: ${im.name} (${im.width}x${im.height})`));
  }
}

correlate().catch(console.error);
