/**
 * Módulo de Conexión a Base de Datos Neon PostgreSQL (Vercel)
 * Proyecto: Tecnosistemas MDOS
 * Base de Datos: neon-green-ladder (Neon Serverless Postgres)
 */

let neonSql = null;

function getConnectionString() {
    return process.env.POSTGRES_URL ||
           process.env.DATABASE_URL ||
           process.env.POSTGRES_PRISMA_URL ||
           process.env.POSTGRES_URL_NON_POOLING ||
           process.env.NEON_DATABASE_URL;
}

function getDb() {
    const connectionString = getConnectionString();
    if (!connectionString) {
        throw new Error('No se encontró la cadena de conexión de Neon Postgres (POSTGRES_URL o DATABASE_URL).');
    }

    if (!neonSql) {
        try {
            const { neon } = require('@neondatabase/serverless');
            neonSql = neon(connectionString);
        } catch (err) {
            console.warn('No se pudo cargar @neondatabase/serverless, intentando con pg:', err.message);
            // Fallback a pg si fuera necesario
            const { Pool } = require('pg');
            const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
            neonSql = async (strings, ...values) => {
                let query = '';
                for (let i = 0; i < strings.length; i++) {
                    query += strings[i];
                    if (i < values.length) {
                        query += `$${i + 1}`;
                    }
                }
                const res = await pool.query(query, values);
                return res.rows;
            };
        }
    }
    return neonSql;
}

/**
 * Crea las tablas necesarias si no existen y precarga los productos oficiales
 */
async function ensureTables() {
    const sql = getDb();

    // 1. Tabla de Productos
    await sql`
        CREATE TABLE IF NOT EXISTS products (
            id VARCHAR(100) PRIMARY KEY,
            name TEXT NOT NULL,
            category VARCHAR(100) NOT NULL,
            price NUMERIC(10, 2) NOT NULL,
            badge VARCHAR(100) DEFAULT '',
            in_stock BOOLEAN DEFAULT TRUE,
            description TEXT DEFAULT '',
            full_description TEXT DEFAULT '',
            order_count INTEGER DEFAULT 0,
            image TEXT DEFAULT '',
            images JSONB DEFAULT '[]'::jsonb,
            sort_order INTEGER DEFAULT 0,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;

    // 2. Tabla de Configuración de la Tienda
    await sql`
        CREATE TABLE IF NOT EXISTS store_config (
            key VARCHAR(100) PRIMARY KEY,
            value JSONB NOT NULL,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;

    // 3. Verificar si hay productos; si está vacía, poblar con los iniciales
    const countCheck = await sql`SELECT COUNT(*)::int as count FROM products;`;
    const count = countCheck[0]?.count || 0;

    if (count === 0) {
        const fs = require('fs');
        const path = require('path');
        let initialProducts = [];

        try {
            const dataPath = path.join(process.cwd(), 'data', 'products.json');
            if (fs.existsSync(dataPath)) {
                initialProducts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
            }
        } catch (e) {
            console.error('Error cargando data/products.json:', e.message);
        }

        for (let i = 0; i < initialProducts.length; i++) {
            const p = initialProducts[i];
            const imagesJson = JSON.stringify(p.images || [p.image || 'assets/images/logo.jpg']);
            await sql`
                INSERT INTO products (
                    id, name, category, price, badge, in_stock,
                    description, full_description, order_count,
                    image, images, sort_order
                ) VALUES (
                    ${p.id},
                    ${p.name},
                    ${p.category || 'General'},
                    ${parseFloat(p.price) || 0},
                    ${p.badge || ''},
                    ${p.inStock !== false},
                    ${p.description || ''},
                    ${p.fullDescription || p.description || ''},
                    ${parseInt(p.orderCount) || 0},
                    ${p.image || 'assets/images/logo.jpg'},
                    ${imagesJson}::jsonb,
                    ${i}
                ) ON CONFLICT (id) DO NOTHING;
            `;
        }
    }

    // 4. Configuración inicial si no existe
    const configCheck = await sql`SELECT COUNT(*)::int as count FROM store_config WHERE key = 'main';`;
    if ((configCheck[0]?.count || 0) === 0) {
        const defaultConfig = {
            storeName: "Tecnosistemas MDOS",
            storeSlogan: "Venta de Computadoras • Reparación, Mantenimiento y Programación de Computadoras",
            logoUrl: "assets/images/logo.jpg",
            headerBannerUrl: "assets/images/header-banner.jpg",
            whatsappNumber: "51900000000",
            currencySymbol: "S/",
            currencyCode: "PEN",
            bannerMessage: "🚀 ¡Envíos a todo el Perú y recojo en tienda! Pagos por Yape, Plin, BCP e Interbank.",
            adminPin: "1234",
            totalOrdersCount: 38
        };

        await sql`
            INSERT INTO store_config (key, value)
            VALUES ('main', ${JSON.stringify(defaultConfig)}::jsonb)
            ON CONFLICT (key) DO NOTHING;
        `;
    }

    return true;
}

/**
 * Convierte un registro de PostgreSQL a objeto JavaScript con camelCase
 */
function mapProductRow(row) {
    let images = [];
    if (Array.isArray(row.images)) {
        images = row.images;
    } else if (typeof row.images === 'string') {
        try {
            const parsed = JSON.parse(row.images);
            images = Array.isArray(parsed) ? parsed : [parsed];
        } catch (e) {
            images = [row.images];
        }
    } else if (row.images && typeof row.images === 'object') {
        images = [row.image || 'assets/images/logo.jpg'];
    }

    images = images.filter(img => typeof img === 'string' && img.trim().length > 0);
    if (images.length === 0) {
        images = [row.image || 'assets/images/logo.jpg'];
    }

    return {
        id: row.id,
        name: row.name,
        category: row.category,
        price: parseFloat(row.price),
        badge: row.badge || '',
        inStock: row.in_stock !== false,
        description: row.description || '',
        fullDescription: row.full_description || '',
        orderCount: parseInt(row.order_count, 10) || 0,
        image: row.image || images[0] || 'assets/images/logo.jpg',
        images: images,
        sortOrder: row.sort_order || 0
    };
}

function getDbInfo() {
    const conn = getConnectionString();
    if (!conn) {
        return {
            database: 'Desconectado',
            host: 'Sin conexión',
            connected: false
        };
    }
    try {
        const u = new URL(conn);
        return {
            database: u.pathname.replace(/^\//, '') || 'neondb',
            host: u.hostname,
            connected: true
        };
    } catch {
        return {
            database: 'neondb',
            host: 'neon.tech',
            connected: true
        };
    }
}

module.exports = {
    getConnectionString,
    getDb,
    ensureTables,
    mapProductRow,
    getDbInfo
};
