require('dotenv').config();
console.log('Variables de storage:', Object.keys(process.env).filter(k => k.includes('S3') || k.includes('R2') || k.includes('BUCKET')));

