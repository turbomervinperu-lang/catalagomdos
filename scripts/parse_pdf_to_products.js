const fs = require('fs');

const raw = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/extracted_pdf_text.txt', 'utf8');

// Función para categorizar automáticamente
function detectCategory(name, desc = '') {
  const full = `${name} ${desc}`.toUpperCase();

  if (full.includes('TARJETA DE VIDEO') || full.includes('GRAFICA') || full.includes('RTX ') || full.includes('GTX ') || full.includes('RADEON RX')) {
    return 'Tarjetas de Video';
  }
  if (full.includes('PROCESADOR OEM') || full.includes('TRAY') || full.includes('SIN COOLER')) {
    return 'Procesadores OEM';
  }
  if (full.includes('PROCESADOR') || full.includes('RYZEN ') || full.includes('CORE I3') || full.includes('CORE I5') || full.includes('CORE I7') || full.includes('CORE I9')) {
    return 'Procesadores';
  }
  if (full.includes('MONITOR') || full.includes('PANTALLA ') || full.includes('CURVO') || full.includes('ODYSSEY')) {
    return 'Monitores';
  }
  if (full.includes('REFRIGERACION') || full.includes('DISIPADOR') || full.includes('COOLER') || full.includes('PASTA TERMICA') || full.includes('FAN ') || full.includes('VENTILADOR')) {
    return 'Refrigeración';
  }
  if (full.includes('PLACA MADRE') || full.includes('MAINBOARD') || full.includes('MOTHERBOARD') || full.includes('A520') || full.includes('B550') || full.includes('H610') || full.includes('B650') || full.includes('B760')) {
    return 'Placas Madres';
  }
  if (full.includes('MEMORIA RAM') || full.includes('RAM ') || full.includes('DDR4') || full.includes('DDR5')) {
    return 'Memoria Ram';
  }
  if (full.includes('SSD') || full.includes('DISCO') || full.includes('NVME') || full.includes('M.2') || full.includes('SOLIDO') || full.includes('HARD DRIVE')) {
    return 'Almacenamiento';
  }
  if (full.includes('FUENTE') || full.includes('POWER SUPPLY') || full.includes('80 PLUS') || full.includes('80PLUS') || full.includes('BRONZE') || full.includes('GOLD')) {
    return 'Fuente de Poder';
  }
  if (full.includes('CASE ') || full.includes('GABINETE') || full.includes('CHASIS') || full.includes('TORRE')) {
    return 'Case';
  }
  if (full.includes('ESTABILIZADOR') || full.includes('UPS') || full.includes('SUPRESOR')) {
    return 'Estabilizadores / UPS';
  }
  if (full.includes('MOUSE') || full.includes('TECLADO') || full.includes('AUDIFONO') || full.includes('PARLANTE') || full.includes('COMBO') || full.includes('AURICULAR') || full.includes('HEADSET') || full.includes('PAD MOUSE') || full.includes('CABLE') || full.includes('ADAPTADOR')) {
    return 'Periféricos';
  }

  return 'Otros';
}

// Analizar bloques
const lines = raw.split(/\r?\n/);
const products = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // Buscar coincidencia de precio S/. o S/
  const priceMatch = line.match(/(?:S\/\.?\s*)([\d,]+(?:\.\d+)?)/i);
  if (!priceMatch) continue;

  const rawPriceStr = priceMatch[1].replace(/,/g, '');
  const originalPrice = parseFloat(rawPriceStr);
  if (isNaN(originalPrice) || originalPrice <= 0) continue;

  // Extraer lo que viene después del precio
  const afterPrice = line.substring(line.indexOf(priceMatch[0]) + priceMatch[0].length).trim();
  
  // Buscar stock en afterPrice (ej. >20, 1, 5, etc.)
  let stock = '+5';
  let descPart = '';

  const stockMatch = afterPrice.match(/^([><]?\s*\d+)\s*(.*)/);
  if (stockMatch) {
    stock = stockMatch[1].trim();
    descPart = stockMatch[2].trim();
  } else {
    descPart = afterPrice;
  }

  // Si después del precio no hay mucho texto, mirar las siguientes líneas hasta encontrar el siguiente precio o separador
  let fullDescLines = [descPart].filter(Boolean);
  let j = i + 1;
  while (j < lines.length && j < i + 6) {
    const nextL = lines[j].trim();
    if (!nextL) { j++; continue; }
    if (nextL.includes('--') || nextL.match(/^\d+$/) || /S\/\.?\s*[\d,]+/i.test(nextL)) {
      break;
    }
    // Evitar líneas que son encabezados o textos de banner
    if (nextL === 'TODOS LOS PRODUCTOS DISPONIBLES' || nextL.startsWith('IMAGEN')) break;
    fullDescLines.push(nextL);
    j++;
  }

  let fullText = fullDescLines.join(' ').replace(/\t/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Si aún está muy vacío, revisar línea previa
  if (fullText.length < 5 && i > 0) {
    fullText = lines[i - 1].trim();
  }

  if (fullText.length < 3) continue;

  // Limpiar nombre y separar descripción
  let name = fullText;
  let description = '';

  // Si el texto es largo, la primera parte es el nombre y el resto la descripción
  if (name.length > 90) {
    const commaPos = name.indexOf(',', 40);
    const dotPos = name.indexOf('.', 40);
    let splitPos = -1;
    if (commaPos !== -1 && dotPos !== -1) splitPos = Math.min(commaPos, dotPos);
    else splitPos = commaPos !== -1 ? commaPos : dotPos;

    if (splitPos !== -1 && splitPos < 90) {
      description = name.substring(splitPos + 1).trim();
      name = name.substring(0, splitPos).trim();
    } else {
      name = fullText.substring(0, 85).trim();
      description = fullText.substring(85).trim();
    }
  }

  const category = detectCategory(name, description);

  // Regla de incremento:
  // Videos y Procesadores: +40 soles
  // Demás productos: +25 soles
  const isVideoOrCpu = (category === 'Tarjetas de Video' || category === 'Procesadores' || category === 'Procesadores OEM');
  const increment = isVideoOrCpu ? 40 : 25;
  const finalPrice = originalPrice + increment;

  products.push({
    name: name.toUpperCase(),
    category,
    stock: stock.replace('>', '+'),
    originalPrice,
    increment,
    finalPrice,
    description: description || name
  });
}

console.log('Productos parseados con éxito:', products.length);

// Conteo por categoría
const catCounts = {};
for (const p of products) {
  catCounts[p.category] = (catCounts[p.category] || 0) + 1;
}
console.log('Conteo por categoría:', catCounts);

console.log('--- MUESTRA DE 5 PRODUCTOS CON INCREMENTO ---');
console.log(JSON.stringify(products.slice(0, 5), null, 2));

const videosAndCpu = products.filter(p => p.increment === 40);
console.log(`Productos con incremento de S/40 (Videos / Procesadores): ${videosAndCpu.length}`);
if (videosAndCpu.length > 0) {
  console.log('Ejemplo Video/CPU:', videosAndCpu.slice(0, 3));
}
