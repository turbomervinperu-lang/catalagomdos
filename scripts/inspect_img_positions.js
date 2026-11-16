const fs = require('fs');
const { PDFParse } = require('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/node_modules/pdf-parse');

async function inspectOperators() {
  const buf = fs.readFileSync('C:/Users/OCANDO CARIDAD/Documents/caralago mdos/project_copy/lista_proveedor.pdf');
  const parser = new PDFParse(new Uint8Array(buf));
  const doc = await parser.load();
  const page = await doc.getPage(2);
  const ops = await page.getOperatorList();
  
  console.log('Total de operadores en página 2:', ops.fnArray.length);
  
  // Buscar operadores de imagen y sus transformaciones
  const images = [];
  let currentTransform = [1, 0, 0, 1, 0, 0];
  const transformStack = [];

  for (let i = 0; i < ops.fnArray.length; i++) {
    const fn = ops.fnArray[i];
    const args = ops.argsArray[i];

    // fn 11 = save, 12 = restore, 13 = transform
    if (fn === 11) {
      transformStack.push([...currentTransform]);
    } else if (fn === 12) {
      if (transformStack.length > 0) currentTransform = transformStack.pop();
    } else if (fn === 13) {
      // transform matrix
      currentTransform = args;
    } else if (fn === 85 || fn === 86 || fn === 87) { // paintImageXObject / paintInlineImageXObject
      images.push({
        opIdx: i,
        fn,
        args,
        transform: [...currentTransform],
        x: currentTransform[4],
        y: currentTransform[5],
        width: currentTransform[0],
        height: currentTransform[3]
      });
    }
  }

  console.log(`Encontradas ${images.length} apariciones de imagen en página 2:`);
  console.log(JSON.stringify(images, null, 2));
}

inspectOperators().catch(console.error);

