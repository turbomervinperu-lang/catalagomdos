/**
 * API Serverless Endpoint para Configuración de la Tienda - Neon PostgreSQL (Vercel)
 * GET   /api/config   -> Obtiene configuración de la tienda
 * POST  /api/config   -> Guarda cambios en la configuración (WhatsApp, PIN, nombre, etc.)
 * PATCH /api/config   -> Registra nuevo pedido y suma contador
 */

const { getDb, ensureTables, getConnectionString } = require('./db');

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const connStr = getConnectionString();
    if (!connStr) {
        return res.status(503).json({
            success: false,
            error: 'No se detectó variable POSTGRES_URL o DATABASE_URL.',
            connected: false
        });
    }

    try {
        const sql = getDb();
        await ensureTables();

        if (req.method === 'GET') {
            const rows = await sql`
                SELECT value FROM store_config WHERE key = 'main';
            `;

            const config = rows[0]?.value || {};
            return res.status(200).json({
                success: true,
                config,
                connected: true,
                database: 'neon-green-ladder'
            });
        }

        if (req.method === 'POST') {
            const newConfig = req.body || {};
            await sql`
                INSERT INTO store_config (key, value, updated_at)
                VALUES ('main', ${JSON.stringify(newConfig)}::jsonb, CURRENT_TIMESTAMP)
                ON CONFLICT (key) DO UPDATE SET
                    value = EXCLUDED.value,
                    updated_at = CURRENT_TIMESTAMP;
            `;

            return res.status(200).json({
                success: true,
                message: 'Configuración guardada en Neon PostgreSQL.',
                config: newConfig
            });
        }

        if (req.method === 'PATCH') {
            const { orderedProductIds } = req.body || {};
            if (Array.isArray(orderedProductIds) && orderedProductIds.length > 0) {
                for (const pid of orderedProductIds) {
                    await sql`
                        UPDATE products
                        SET order_count = order_count + 1
                        WHERE id = ${pid};
                    `;
                }
            }

            // Incrementar contador global en config
            const rows = await sql`SELECT value FROM store_config WHERE key = 'main';`;
            const cfg = rows[0]?.value || {};
            cfg.totalOrdersCount = (cfg.totalOrdersCount || 0) + 1;

            await sql`
                UPDATE store_config
                SET value = ${JSON.stringify(cfg)}::jsonb, updated_at = CURRENT_TIMESTAMP
                WHERE key = 'main';
            `;

            return res.status(200).json({
                success: true,
                totalOrdersCount: cfg.totalOrdersCount
            });
        }

        return res.status(405).json({ success: false, error: 'Método no permitido.' });

    } catch (error) {
        console.error('Error en /api/config:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Error en configuración de Neon.'
        });
    }
};
