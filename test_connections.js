require('dotenv').config();
const { Client } = require('pg');
const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');

(async () => {
  try {
    // Neon connection test
    const pgClient = new Client({
      connectionString: process.env.POSTGRES_URL,
      ssl: { rejectUnauthorized: false }
    });
    await pgClient.connect();
    const res = await pgClient.query('SELECT 1 AS ok');
    console.log('✅ PostgreSQL connection success:', res.rows[0]);
    await pgClient.end();
  } catch (e) {
    console.error('❌ PostgreSQL connection error:', e.message);
  }

  try {
    // R2 connection test (list objects in bucket)
    const s3 = new S3Client({
      region: 'auto',
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });
    const cmd = new ListObjectsV2Command({ Bucket: process.env.R2_BUCKET_NAME, MaxKeys: 10 });
    const data = await s3.send(cmd);
    console.log('✅ R2 bucket list success. Objects:', (data.Contents || []).map(o=>o.Key));
  } catch (e) {
    console.error('❌ R2 connection error:', e.message);
  }
})();

