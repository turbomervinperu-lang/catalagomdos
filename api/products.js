/**
 * API Serverless Endpoint para Productos - Neon PostgreSQL (Vercel)
 * GET    /api/products          -> Obtiene todos los productos desde la base de datos Neon
 * POST   /api/products          -> Crea o actualiza un producto (o sincroniza catálogo completo)
 * DELETE /api/products?id=xxx   -> Elimina un producto por ID
 */

const { getDb, ensureTables, mapProductRow, getConnectionString, getDbInfo } = require('./db');

module.exports = async function handler(req, res) {
    // Cabeceras CORS y JSON
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const connStr = getConnectionString();
    if (!connStr) {
        return res.status(503).json({
            success: false,
            error: 'No se detectó la variable de entorno POSTGRES_URL o DATABASE_URL en Vercel.',
            connected: false
        });
    }

    try {
        const sql = getDb();
        await ensureTables();

        // =========================================================================
        // GET: Listar todos los productos
        // =========================================================================
        if (req.method === 'GET') {
            const rows = await sql`
                SELECT * FROM products
                ORDER BY sort_order ASC, created_at ASC;
            `;

            const products = rows.map(mapProductRow);
            const info = getDbInfo();

            return res.status(200).json({
                success: true,
                count: products.length,
                products,
                database: info.database,
                connected: true
            });
        }

        // =========================================================================
        // POST: Crear, actualizar o sincronizar productos
        // =========================================================================
        if (req.method === 'POST') {
            const body = req.body || {};

            // 1. Sincronización masiva de productos (bulk_save o sync)
            if (body.action === 'bulk_save' || body.action === 'sync') {
                const list = Array.isArray(body.products) ? body.products : [];
                for (let i = 0; i < list.length; i++) {
                    const p = list[i];
                    const imagesJson = JSON.stringify(p.images || [p.image || 'assets/images/logo.jpg']);
                    await sql`
                        INSERT INTO products (
                            id, name, category, price, badge, in_stock,
                            description, full_description, order_count,
                            image, images, sort_order, updated_at
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
                            ${i},
                            CURRENT_TIMESTAMP
                        )
                        ON CONFLICT (id) DO UPDATE SET
                            name = EXCLUDED.name,
                            category = EXCLUDED.category,
                            price = EXCLUDED.price,
                            badge = EXCLUDED.badge,
                            in_stock = EXCLUDED.in_stock,
                            description = EXCLUDED.description,
                            full_description = EXCLUDED.full_description,
                            image = EXCLUDED.image,
                            images = EXCLUDED.images,
                            sort_order = EXCLUDED.sort_order,
                            updated_at = CURRENT_TIMESTAMP;
                    `;
                }

                return res.status(200).json({
                    success: true,
                    message: `Sincronizados ${list.length} productos en Neon Postgres.`
                });
            }

            // 2. Reordenar posiciones de productos
            if (body.action === 'reorder') {
                const orderList = Array.isArray(body.order) ? body.order : [];
                for (let i = 0; i < orderList.length; i++) {
                    const id = orderList[i];
                    await sql`
                        UPDATE products
                        SET sort_order = ${i}, updated_at = CURRENT_TIMESTAMP
                        WHERE id = ${id};
                    `;
                }

                return res.status(200).json({
                    success: true,
                    message: 'Orden de productos actualizado en Neon.'
                });
            }

            // 3. Crear o actualizar un solo producto (Guardar / Editar)
            const p = body.product || body;
            if (!p.id || !p.name || isNaN(parseFloat(p.price))) {
                return res.status(400).json({
                    success: false,
                    error: 'Datos inválidos. Se requiere id, name y price válido.'
                });
            }

            const imagesJson = JSON.stringify(p.images || [p.image || 'assets/images/logo.jpg']);
            const sortOrder = typeof p.sortOrder === 'number' ? p.sortOrder : 0;

            await sql`
                INSERT INTO products (
                    id, name, category, price, badge, in_stock,
                    description, full_description, order_count,
                    image, images, sort_order, updated_at
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
                    ${sortOrder},
                    CURRENT_TIMESTAMP
                )
                ON CONFLICT (id) DO UPDATE SET
                    name = EXCLUDED.name,
                    category = EXCLUDED.category,
                    price = EXCLUDED.price,
                    badge = EXCLUDED.badge,
                    in_stock = EXCLUDED.in_stock,
                    description = EXCLUDED.description,
                    full_description = EXCLUDED.full_description,
                    image = EXCLUDED.image,
                    images = EXCLUDED.images,
                    updated_at = CURRENT_TIMESTAMP;
            `;

            return res.status(200).json({
                success: true,
                message: 'Producto guardado exitosamente en Neon PostgreSQL.',
                productId: p.id
            });
        }

        // =========================================================================
        // DELETE: Eliminar un producto
        // =========================================================================
        if (req.method === 'DELETE') {
            const id = req.query.id || req.body?.id;
            if (!id) {
                return res.status(400).json({ success: false, error: 'Falta el id del producto a eliminar.' });
            }

            await sql`DELETE FROM products WHERE id = ${id};`;

            return res.status(200).json({
                success: true,
                message: `Producto ${id} eliminado de Neon Postgres.`
            });
        }

        return res.status(405).json({ success: false, error: 'Método HTTP no permitido.' });

    } catch (error) {
        console.error('Error en /api/products:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Error interno del servidor en Neon PostgreSQL.'
        });
    }
};
