const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');
const pub = path.join(__dirname, '..', 'public');

async function run() {
  const logo = await Jimp.read(path.join(pub, 'logo.jpg'));
  console.log('logo before:', logo.width, 'x', logo.height, Math.round(fs.statSync(path.join(pub, 'logo.jpg')).size / 1024), 'KB');
  logo.resize({ w: 192 });
  await logo.write(path.join(pub, 'logo.jpg'), { quality: 85 });

  const banner = await Jimp.read(path.join(pub, 'banner.jpg'));
  console.log('banner before:', banner.width, 'x', banner.height, Math.round(fs.statSync(path.join(pub, 'banner.jpg')).size / 1024), 'KB');
  if (banner.width > 1400) banner.resize({ w: 1400 });
  await banner.write(path.join(pub, 'banner.jpg'), { quality: 78 });

  for (const f of ['logo.jpg', 'banner.jpg']) {
    console.log(f, 'after:', Math.round(fs.statSync(path.join(pub, f)).size / 1024), 'KB');
  }
}
run().catch(console.error);
