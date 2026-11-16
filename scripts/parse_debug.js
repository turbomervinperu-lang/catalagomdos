const fs = require('fs');

const raw = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/extracted_pdf_text.txt', 'utf8');

// Dividir por líneas
const lines = raw.split(/\r?\n/);
console.log('Total de líneas:', lines.length);

const sampleProducts = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (/S\/\.?\s*[\d,]+/i.test(line)) {
    sampleProducts.push({
      lineIdx: i,
      line: line.trim(),
      prevLine: lines[i - 1]?.trim() || '',
      nextLine: lines[i + 1]?.trim() || '',
      nextNextLine: lines[i + 2]?.trim() || ''
    });
  }
}

console.log('Total líneas con S/:', sampleProducts.length);
console.log('--- PRIMEROS 15 EJEMPLOS ---');
console.log(JSON.stringify(sampleProducts.slice(0, 15), null, 2));

console.log('--- ÚLTIMOS 10 EJEMPLOS ---');
console.log(JSON.stringify(sampleProducts.slice(-10), null, 2));

