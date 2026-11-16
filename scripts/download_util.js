const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const officialDir = path.join(__dirname, '..', 'public', 'products', 'official');
if (!fs.existsSync(officialDir)) {
  fs.mkdirSync(officialDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(officialDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      return resolve(`/products/official/${filename}`);
    }

    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(`/products/official/${filename}`);
      });
    });
    req.on('error', reject);
    req.setTimeout(12000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

module.exports = { downloadImage };
