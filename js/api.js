/**
 * Cliente de Conexión a la API y Base de Datos Neon Postgres (Vercel)
 * Tecnosistemas MDOS
 */

(function () {
    'use strict';

    const API_BASE = '/api';

    const STORAGE_KEYS = {
        PRODUCTS: 'mdos_catalog_products',
        CONFIG: 'mdos_catalog_config',
        DB_STATUS: 'mdos_db_status'
    };

    /**
     * Comprueba si la API y la base de datos Neon están conectadas y respondiendo
     */
    async function checkDatabaseStatus() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 4000);
            const res = await fetch(`${API_BASE}/health`, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
                const data = await res.json();
                sessionStorage.setItem(STORAGE_KEYS.DB_STATUS, JSON.stringify(data));
                return data;
            }
        } catch (err) {
            console.warn('API /api/health no disponible (modo offline o servidor estático):', err.message);
        }
        return { connected: false, status: 'offline' };
    }

    /**
     * Obtiene los productos desde la base de datos Neon (con fallback a localStorage)
     */
    async function getProducts() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            const res = await fetch(`${API_BASE}/products`, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
                const data = await res.json();
                if (data.success && Array.isArray(data.products) && data.products.length > 0) {
                    // Guardar respaldo local
                    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(data.products));
                    return { products: data.products, source: 'neon' };
                }
            }
        } catch (err) {
            console.warn('No se pudo conectar a /api/products, usando respaldo local:', err.message);
        }

        // Fallback a localStorage o datos por defecto
        const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        let products = saved ? JSON.parse(saved) : (window.STORE_DATA?.DEFAULT_PRODUCTS || []);
        return { products, source: 'local' };
    }

    /**
     * Guarda o actualiza un producto en Neon Postgres y en localStorage
     */
    async function saveProduct(product) {
        let savedInNeon = false;
        try {
            const res = await fetch(`${API_BASE}/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ product })
            });

            if (res.ok) {
                const data = await res.json();
                savedInNeon = data.success === true;
            }
        } catch (err) {
            console.warn('Error al guardar producto en /api/products:', err.message);
        }

        // Actualizar siempre localStorage
        try {
            const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
            let list = saved ? JSON.parse(saved) : [];
            const index = list.findIndex(p => p.id === product.id);
            if (index !== -1) {
                list[index] = product;
            } else {
                list.unshift(product);
            }
            localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(list));
        } catch (e) {
            console.error('Error al actualizar localStorage:', e);
        }

        return { success: true, savedInNeon };
    }

    /**
     * Elimina un producto de Neon Postgres y de localStorage
     */
    async function deleteProduct(productId) {
        let deletedInNeon = false;
        try {
            const res = await fetch(`${API_BASE}/products?id=${encodeURIComponent(productId)}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                deletedInNeon = true;
            }
        } catch (err) {
            console.warn('Error al eliminar en /api/products:', err.message);
        }

        try {
            const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
            if (saved) {
                let list = JSON.parse(saved).filter(p => p.id !== productId);
                localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(list));
            }
        } catch (e) {
            console.error('Error al actualizar localStorage en eliminación:', e);
        }

        return { success: true, deletedInNeon };
    }

    /**
     * Sincroniza el catálogo completo hacia Neon Postgres
     */
    async function syncAllProducts(products) {
        try {
            const res = await fetch(`${API_BASE}/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'bulk_save', products })
            });
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn('Error en syncAllProducts:', err.message);
        }
        return { success: false };
    }

    /**
     * Obtiene la configuración de la tienda desde Neon Postgres
     */
    async function getConfig() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 4000);
            const res = await fetch(`${API_BASE}/config`, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
                const data = await res.json();
                if (data.success && data.config) {
                    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(data.config));
                    return { config: data.config, source: 'neon' };
                }
            }
        } catch (err) {
            console.warn('No se pudo conectar a /api/config, usando local:', err.message);
        }

        const saved = localStorage.getItem(STORAGE_KEYS.CONFIG);
        const config = saved ? JSON.parse(saved) : (window.STORE_DATA?.DEFAULT_CONFIG || {});
        return { config, source: 'local' };
    }

    /**
     * Guarda la configuración de la tienda en Neon Postgres y localStorage
     */
    async function saveConfig(newConfig) {
        let savedInNeon = false;
        try {
            const res = await fetch(`${API_BASE}/config`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newConfig)
            });
            if (res.ok) savedInNeon = true;
        } catch (err) {
            console.warn('Error al guardar configuración en Neon:', err.message);
        }

        localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(newConfig));
        return { success: true, savedInNeon };
    }

    /**
     * Registra un nuevo pedido para sumar a los contadores de artículos más pedidos
     */
    async function recordOrder(orderedProductIds) {
        try {
            fetch(`${API_BASE}/config`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderedProductIds })
            }).catch(() => {});
        } catch (e) {}
    }

    window.StoreApi = {
        checkDatabaseStatus,
        getProducts,
        saveProduct,
        deleteProduct,
        syncAllProducts,
        getConfig,
        saveConfig,
        recordOrder
    };

})();
