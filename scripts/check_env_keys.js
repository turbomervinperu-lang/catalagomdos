require('dotenv').config();
const envKeys = Object.keys(process.env);
console.log('Todas las variables:', envKeys.filter(k => !k.startsWith('npm_') && !k.startsWith('Program') && !k.startsWith('ALLUSER')));

