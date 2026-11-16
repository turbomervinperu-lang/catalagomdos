const fs = require('fs');
const pdf = require('pdf-parse');

async function testParse() {
  console.log('Cargando buffer de lista_proveedor.pdf...');
  const dataBuffer = fs.readFileSync('C:\\Users\\OCANDO CARIDAD\\Documents\\caralago mdos\\project_copy\\lista_proveedor.pdf');
  console.log('Buffer cargado. Leyendo páginas...');

  const data = await pdf(dataBuffer, {
    max: 3 // Solo las primeras 3 páginas para inspeccionar el formato
  });

  console.log('Páginas totales en documento:', data.numpages);
  console.log('Información:', data.info);
  console.log('--- MUESTRA DE TEXTO (PÁGINAS 1-3) ---');
  console.log(data.text.slice(0, 3000));
}

testParse().catch(err => {
  console.error('Error al parsear:', err);
  process.exit(1);
});

