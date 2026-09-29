/**
 * Endpoint de Diagnóstico y Estado de Conexión a Neon PostgreSQL
 * GET /api/health
 */

const { getDb, ensureTables, getConnectionString } = require('./db');

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const connStr = getConnectionString();
    if (!connStr) {
        return res.status(200).json({
            status: 'offline',
            connected: false,
            message: 'No se detectó la variable de conexión POSTGRES_URL de Neon en el entorno actual.',
            database: 'neon-green-ladder'
        });
    }

    try {
        const sql = getDb();
        await ensureTables();

        const ping = await sql`SELECT 1 as alive;`;
        const countRes = await sql`SELECT COUNT(*)::int as count FROM products;`;
        const configRes = await sql`SELECT COUNT(*)::int as count FROM store_config;`;

        return res.status(200).json({
            status: 'online',
            connected: true,
            database: 'neon-green-ladder',
            provider: 'Neon Serverless PostgreSQL (Vercel)',
            productsCount: countRes[0]?.count || 0,
            configReady: (configRes[0]?.count || 0) > 0,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            connected: false,
            database: 'neon-green-ladder',
            error: error.message
        });
    }
};
