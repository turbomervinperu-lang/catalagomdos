const fs = require('fs');
const { PDFParse } = require('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/node_modules/pdf-parse');

async function dumpPdf() {
  const buf = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/lista_proveedor.pdf');
  const uint8 = new Uint8Array(buf);
  const parser = new PDFParse(uint8);
  await parser.load();
  const textObj = await parser.getText();
  
  fs.writeFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/extracted_pdf_text.txt', textObj.text, 'utf8');
  console.log('Texto guardado exitosamente. Longitud total de caracteres:', textObj.text.length);
}

dumpPdf().catch(console.error);
