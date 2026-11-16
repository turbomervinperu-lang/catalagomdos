const fs = require('fs');
const xlsx = require('xlsx');

const raw = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/extracted_pdf_text.txt', 'utf8');
const lines = raw.split(/\r?\n/);

let currentSectionCategory = 'Monitores';

function updateSection(line) {
  const l = line.toUpperCase().trim();
  if (l.includes('MONITORES')) currentSectionCategory = 'Monitores';
  else if (l.includes('REFRIGERACI')) currentSectionCategory = 'Refrigeración';
  else if (l.includes('CAMARAS WEB')) currentSectionCategory = 'Periféricos';
  else if (l.includes('SILLAS GAMER')) currentSectionCategory = 'Otros';
  else if (l.includes('CASES GAMER')) currentSectionCategory = 'Case';
  else if (l.includes('PROCESADORES')) currentSectionCategory = 'Procesadores';
  else if (l.includes('RAM - MEMORIAS') || l.includes('MEMORIAS')) currentSectionCategory = 'Memoria Ram';
  else if (l.includes('SSD - DISCOS DUROS') || l.includes('DISCOS DUROS')) currentSectionCategory = 'Almacenamiento';
  else if (l.includes('TARJETA GRAFICA') || l.includes('TARJETAS DE VIDEO')) currentSectionCategory = 'Tarjetas de Video';
  else if (l.includes('PLACAS') || l.includes('PLACA MADRE')) currentSectionCategory = 'Placas Madres';
  else if (l.includes('FUENTES DE PODER')) currentSectionCategory = 'Fuente de Poder';
}

function refineCategory(sectionCat, text) {
  const upper = text.toUpperCase();
  if (upper.includes('UPS ') || upper.includes('ESTABILIZADOR')) return 'Estabilizadores / UPS';
  if (upper.includes('PASTA TERMICA') || upper.includes('COOLER') || upper.includes('DISIPADOR')) return 'Refrigeración';
  if (sectionCat === 'Procesadores' && (upper.includes('OEM') || upper.includes('TRAY') || upper.includes('SIN COOLER'))) return 'Procesadores OEM';
  if (sectionCat === 'Case' && upper.includes('CASE')) return 'Case';
  if (sectionCat === 'Fuente de Poder' && upper.includes('FUENTE')) return 'Fuente de Poder';
  return sectionCat;
}

const products = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  updateSection(line);

  // Buscar coincidencia de precio S/. o S/
  const priceMatch = line.match(/(?:S\/\.?\s*)([\d,]+(?:\.\d+)?)/i);
  if (!priceMatch) continue;

  const rawPriceStr = priceMatch[1].replace(/,/g, '');
  const originalPrice = parseFloat(rawPriceStr);
  if (isNaN(originalPrice) || originalPrice <= 0) continue;

  // Extraer texto después del precio
  const afterPrice = line.substring(line.indexOf(priceMatch[0]) + priceMatch[0].length).trim();
  
  let stock = '+5';
  let descPart = '';

  const stockMatch = afterPrice.match(/^([><]?\s*\d+)\s*(.*)/);
  if (stockMatch) {
    stock = stockMatch[1].trim();
    descPart = stockMatch[2].trim();
  } else {
    descPart = afterPrice;
  }

  let fullDescLines = [descPart].filter(Boolean);
  let j = i + 1;
  while (j < lines.length && j < i + 6) {
    const nextL = lines[j].trim();
    if (!nextL) { j++; continue; }
    if (nextL.includes('--') || nextL.match(/^\d+$/) || /S\/\.?\s*[\d,]+/i.test(nextL)) {
      break;
    }
    if (nextL === 'TODOS LOS PRODUCTOS DISPONIBLES' || nextL.startsWith('IMAGEN') || nextL.startsWith('DESCRIPCION')) break;
    fullDescLines.push(nextL);
    j++;
  }

  let fullText = fullDescLines.join(' ').replace(/\t/g, ' ').replace(/\s+/g, ' ').trim();
  if (fullText.length < 5 && i > 0) {
    fullText = lines[i - 1].trim();
  }

  if (fullText.length < 3) continue;

  let name = fullText;
  let description = '';

  // Limpiar encabezados si se colaron
  name = name.replace(/^(IMAGEN|STOCK|PRECIO|CARACTERISTICAS|INFORMACIÓN DEL PRODUCTO|DESCRIPCION)\s*/i, '').trim();

  if (name.length > 90) {
    const commaPos = name.indexOf(',', 45);
    const dotPos = name.indexOf('.', 45);
    let splitPos = -1;
    if (commaPos !== -1 && dotPos !== -1) splitPos = Math.min(commaPos, dotPos);
    else splitPos = commaPos !== -1 ? commaPos : dotPos;

    if (splitPos !== -1 && splitPos < 95) {
      description = name.substring(splitPos + 1).trim();
      name = name.substring(0, splitPos).trim();
    } else {
      name = fullText.substring(0, 90).trim();
      description = fullText.substring(90).trim();
    }
  }

  const category = refineCategory(currentSectionCategory, `${name} ${description}`);

  // Regla de incremento:
  // Tarjetas de Video y Procesadores: +40 soles
  // Demás productos: +25 soles
  const isVideoOrCpu = (category === 'Tarjetas de Video' || category === 'Procesadores' || category === 'Procesadores OEM');
  const increment = isVideoOrCpu ? 40 : 25;
  const finalPrice = originalPrice + increment;

  products.push({
    'PRODUCTO': name.toUpperCase(),
    'CATEGORÍA': category,
    'STOCK': stock.replace('>', '+'),
    'PRECIO PROVEEDOR (S/)': originalPrice,
    'INCREMENTO (S/)': increment,
    'PRECIO FINAL VENTA (S/)': finalPrice,
    'DESCRIPCIÓN': description || name
  });
}

console.log(`Total productos procesados: ${products.length}`);

// Guardar en archivo Excel (.xlsx)
const wb = xlsx.utils.book_new();
const ws = xlsx.utils.json_to_sheet(products);

// Ajustar anchos de columna
ws['!cols'] = [
  { wch: 65 }, // Producto
  { wch: 22 }, // Categoría
  { wch: 10 }, // Stock
  { wch: 22 }, // Precio Proveedor
  { wch: 16 }, // Incremento
  { wch: 22 }, // Precio Final Venta
  { wch: 75 }  // Descripción
];

xlsx.utils.book_append_sheet(wb, ws, 'Lista Actualizada');
const excelPath = 'C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/ListaProductos_Chirimoya_Actualizada.xlsx';
xlsx.writeFile(wb, excelPath);

console.log(`Archivo Excel guardado con éxito en: ${excelPath}`);

// Conteo por categoría
const catCounts = {};
for (const p of products) {
  catCounts[p['CATEGORÍA']] = (catCounts[p['CATEGORÍA']] || 0) + 1;
}
console.log('Distribución por Categorías:', catCounts);
