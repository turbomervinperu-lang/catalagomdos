const fs = require('fs');
const products = JSON.parse(fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/scripts/products_dump.json', 'utf-8'));

const byCat = {};
products.forEach(p => {
  if (!byCat[p.category]) byCat[p.category] = [];
  byCat[p.category].push({ id: p.id, name: p.name });
});

for (const [cat, list] of Object.entries(byCat)) {
  console.log(`\n=== CATEGORIA: ${cat} (${list.length}) ===`);
  list.forEach(item => console.log(`  [${item.id}] ${item.name}`));
}

