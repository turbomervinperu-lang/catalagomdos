const fs = require('fs');
const { PDFParse } = require('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/node_modules/pdf-parse');

async function checkAllPages() {
  const buf = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/lista_proveedor.pdf');
  const parser = new PDFParse(new Uint8Array(buf));
  
  for (let p = 1; p <= 14; p++) {
    const res = await parser.getImage({ first: p, last: p });
    const imgs = res.pages[0].images;
    console.log(`Página ${p}: ${imgs.length} imágenes.`);
    const summaries = imgs.map((m, idx) => `${idx}:${m.width}x${m.height}`);
    console.log('   ' + summaries.join(', '));
  }
}

checkAllPages().catch(console.error);

