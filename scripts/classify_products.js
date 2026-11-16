const fs = require('fs');
const products = JSON.parse(fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/products_dump.json', 'utf-8'));

console.log('Total items:', products.length);

const recognizable = [];
const uncertain = [];

// Well known official brands
const brands = [
  'SAMSUNG', 'MSI', 'HP', 'LG', 'XIAOMI', 'CORSAIR', 'DEEPCOOL',
  'INTEL', 'AMD', 'RYZEN', 'KINGSTON', 'ADATA', 'XPG', 'ASUS',
  'GIGABYTE', 'SEASONIC', 'EVGA', 'LOGITECH', 'WESTERN DIGITAL', 'MICRON'
];

products.forEach(p => {
  const upper = p.name.toUpperCase();
  const matchedBrand = brands.find(b => upper.includes(b));
  if (matchedBrand) {
    recognizable.push({ id: p.id, brand: matchedBrand, name: p.name });
  } else {
    uncertain.push({ id: p.id, name: p.name });
  }
});

console.log(`Recognizable official brand products: ${recognizable.length}`);
console.log(`Uncertain / local brands (leave blank): ${uncertain.length}`);

fs.writeFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/recognizable.json', JSON.stringify(recognizable, null, 2));
fs.writeFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/uncertain.json', JSON.stringify(uncertain, null, 2));

