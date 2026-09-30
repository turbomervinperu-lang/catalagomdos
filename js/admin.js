/**
 * Panel de Administración Privado - MDOS TECNOSISTEM
 */

(function () {
    'use strict';

    const STORAGE_KEYS = {
        PRODUCTS: 'mdos_catalog_products',
        CONFIG: 'mdos_catalog_config'
    };

    let products = [];
    let config = {};
    let currentProductImages = []; // Array de fotos del producto: [{ dataUrl, compressedSizeFormatted, originalSizeFormatted, name }]
    let editingProductId = null;

    document.addEventListener('DOMContentLoaded', () => {
        loadData();
        checkAuthentication();
        renderProductsTable();
        renderMetrics();
        loadSettingsForm();
        setupDragAndDrop();
    });

    function loadData() {
        const savedConfig = localStorage.getItem(STORAGE_KEYS.CONFIG);
        config = savedConfig ? JSON.parse(savedConfig) : (window.STORE_DATA?.DEFAULT_CONFIG || {});
        if (!config.currencySymbol || config.currencySymbol === '$') {
            config.currencySymbol = 'S/';
            config.currencyCode = 'PEN';
            localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));
        }

        const savedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        if (!savedProducts || (savedProducts.includes('"Componentes"') || savedProducts.includes('"Servicios"'))) {
            products = window.STORE_DATA?.DEFAULT_PRODUCTS || [];
            localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
        } else {
            products = JSON.parse(savedProducts);
            let updated = false;
            products.forEach(p => {
                if (!p.images || !Array.isArray(p.images) || p.images.length === 0) {
                    if (p.id === 'prod-1') {
                        p.images = ["assets/images/logo.jpg", "assets/images/header-banner.jpg", "assets/images/logo.jpg", "assets/images/header-banner.jpg"];
                    } else if (p.id === 'prod-3') {
                        p.images = ["assets/images/header-banner.jpg", "assets/images/logo.jpg", "assets/images/header-banner.jpg", "assets/images/logo.jpg"];
                    } else {
                        p.images = [p.image || 'assets/images/logo.jpg'];
                    }
                    updated = true;
                }
            });
            if (updated) {
                localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
            }
        }

        // Cargar datos en vivo desde Neon Postgres
        if (window.StoreApi) {
            window.StoreApi.checkDatabaseStatus().then(status => {
                const badge = document.getElementById('neon-status-badge');
                const bannerBadge = document.getElementById('neon-banner-badge');
                if (status && status.connected) {
                    const dbName = status.database || 'En línea';
                    if (badge) {
                        badge.className = 'inline-flex items-center gap-1.5 text-[11px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 px-2.5 py-1.5 rounded-lg shadow-xs';
                        badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span class="hidden md:inline">Neon:</span><span class="text-white font-mono">${dbName} (En línea)</span>`;
                    }
                    if (bannerBadge) {
                        bannerBadge.textContent = dbName;
                    }
                } else if (badge) {
                    badge.className = 'inline-flex items-center gap-1.5 text-[11px] font-bold bg-amber-950/80 text-amber-300 border border-amber-500/30 px-2.5 py-1.5 rounded-lg shadow-xs';
                    badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400"></span><span class="hidden md:inline">Neon:</span><span class="text-white font-mono">Modo Local (Sin Vercel/Neon)</span>`;
                }
            }).catch(() => {});

            // Diagnóstico de Cloudflare R2
            if (window.StoreApi.checkR2Status) {
                window.StoreApi.checkR2Status().then(r2 => {
                    const r2Badge = document.getElementById('r2-status-badge');
                    if (r2Badge) {
                        if (r2 && r2.enabled) {
                            r2Badge.className = 'inline-flex items-center gap-1.5 text-[11px] font-bold bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 px-2.5 py-1.5 rounded-lg shadow-xs';
                            r2Badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span><span class="hidden lg:inline">Fotos:</span><span class="text-white font-mono">Cloudflare R2</span>`;
                        } else {
                            r2Badge.className = 'inline-flex items-center gap-1.5 text-[11px] font-bold bg-slate-800 text-slate-400 border border-slate-700/60 px-2.5 py-1.5 rounded-lg shadow-xs';
                            r2Badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-500"></span><span class="hidden lg:inline">Fotos:</span><span class="text-slate-300 font-mono">R2 (Pendiente)</span>`;
                        }
                    }
                }).catch(() => {});
            }

            window.StoreApi.getProducts().then(res => {
                if (res && res.products && res.products.length > 0) {
                    products = res.products;
                    renderProductsTable();
                    renderMetrics();
                }
            }).catch(() => {});

            window.StoreApi.getConfig().then(res => {
                if (res && res.config) {
                    config = res.config;
                    loadSettingsForm();
                }
            }).catch(() => {});
        }
    }

    /**
     * Verificación de Seguridad y Autenticación con PIN
     */
    function checkAuthentication() {
        const isAuth = sessionStorage.getItem('mdos_admin_auth') === 'true';
        const lockScreen = document.getElementById('admin-lock-screen');
        const mainContent = document.getElementById('admin-main-content');

        if (isAuth) {
            if (lockScreen) lockScreen.classList.add('hidden');
            if (mainContent) mainContent.classList.remove('hidden');
        } else {
            if (lockScreen) lockScreen.classList.remove('hidden');
            if (mainContent) mainContent.classList.add('hidden');
        }
    }

    function authenticateWithPin(event) {
        event.preventDefault();
        const pinInput = document.getElementById('gate-pin-input');
        const errorMsg = document.getElementById('gate-pin-error');
        const validPin = config.adminPin || '1234';

        if (pinInput && pinInput.value.trim() === validPin) {
            sessionStorage.setItem('mdos_admin_auth', 'true');
            if (errorMsg) errorMsg.classList.add('hidden');
            checkAuthentication();
            renderMetrics();
        } else {
            if (errorMsg) errorMsg.classList.remove('hidden');
            if (pinInput) {
                pinInput.value = '';
                pinInput.focus();
            }
        }
    }

    function logout() {
        sessionStorage.removeItem('mdos_admin_auth');
        window.location.href = 'index.html';
    }

    function switchTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white', 'shadow-xs');
            btn.classList.add('bg-transparent', 'text-slate-600');
        });

        const activeBtn = document.getElementById(`tab-btn-${tabName}`);
        if (activeBtn) {
            activeBtn.classList.add('bg-blue-600', 'text-white', 'shadow-xs');
            activeBtn.classList.remove('bg-transparent', 'text-slate-600');
        }

        document.querySelectorAll('.tab-content').forEach(section => {
            section.classList.add('hidden');
        });

        const targetSection = document.getElementById(`section-${tabName}`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            if (tabName === 'metrics') renderMetrics();
        }
    }

    /**
     * Renderiza las Estadísticas de los Artículos Más Pedidos
     */
    function renderMetrics() {
        const totalOrdersEl = document.getElementById('metric-total-orders');
        const totalItemsEl = document.getElementById('metric-total-items-ordered');
        const topProductEl = document.getElementById('metric-top-product-name');
        const rankingContainer = document.getElementById('metrics-ranking-list');

        const totalOrders = config.totalOrdersCount || 0;
        const totalItemsOrdered = products.reduce((sum, p) => sum + (p.orderCount || 0), 0);

        if (totalOrdersEl) totalOrdersEl.textContent = totalOrders;
        if (totalItemsEl) totalItemsEl.textContent = totalItemsOrdered;

        // Ordenar productos de mayor a menor cantidad de pedidos
        const sorted = [...products].sort((a, b) => (b.orderCount || 0) - (a.orderCount || 0));

        if (sorted.length > 0 && sorted[0].orderCount > 0) {
            if (topProductEl) topProductEl.textContent = `${sorted[0].name} (${sorted[0].orderCount} pedidos)`;
        } else {
            if (topProductEl) topProductEl.textContent = 'Sin pedidos registrados aún';
        }

        if (!rankingContainer) return;

        if (sorted.length === 0 || totalItemsOrdered === 0) {
            rankingContainer.innerHTML = `
                <div class="text-center py-8 text-xs text-slate-400 bg-slate-50 rounded-xl border border-slate-200">
                    Aún no se han registrado pedidos en la tienda.
                </div>
            `;
            return;
        }

        const currency = config.currencySymbol || 'S/';
        const maxOrders = Math.max(...sorted.map(p => p.orderCount || 0), 1);

        rankingContainer.innerHTML = sorted.map((prod, index) => {
            const count = prod.orderCount || 0;
            const percentage = Math.round((count / maxOrders) * 100);
            const totalEarned = (count * parseFloat(prod.price || 0)).toFixed(2);
            const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;

            return `
                <div class="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                    <div class="flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2.5 min-w-0">
                            <span class="text-sm font-bold text-slate-500 w-6 text-center">${medal}</span>
                            <img src="${prod.image || 'assets/placeholder.svg'}" class="w-10 h-10 object-contain rounded-lg bg-white border border-slate-200 p-0.5">
                            <div class="min-w-0">
                                <h4 class="text-xs font-bold text-slate-900 truncate">${prod.name}</h4>
                                <span class="text-[10px] text-blue-600 font-semibold">${prod.category || 'General'}</span>
                            </div>
                        </div>
                        <div class="text-right shrink-0">
                            <span class="text-xs font-black text-amber-600 block">🔥 ${count} pedidos</span>
                            <span class="text-[10px] text-slate-500 font-semibold">${currency}${totalEarned} aprox.</span>
                        </div>
                    </div>
                    <!-- Barra de Progreso -->
                    <div class="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div class="bg-gradient-to-r from-blue-500 to-amber-500 h-1.5 rounded-full" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Drag & Drop y Compresión Automática de Imágenes (< 1MB)
     */
    /**
     * Drag & Drop y Compresión Automática de Imágenes (< 1MB)
     */
    function setupDragAndDrop() {
        const formDropzone = document.getElementById('form-dropzone');
        if (formDropzone) {
            ['dragenter', 'dragover'].forEach(name => {
                formDropzone.addEventListener(name, (e) => {
                    e.preventDefault();
                    formDropzone.classList.add('dragover');
                });
            });
            ['dragleave', 'drop'].forEach(name => {
                formDropzone.addEventListener(name, (e) => {
                    e.preventDefault();
                    formDropzone.classList.remove('dragover');
                });
            });
            formDropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                formDropzone.classList.remove('dragover');
                if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    processFormFiles(Array.from(e.dataTransfer.files));
                }
            });
        }

        const standaloneDropzone = document.getElementById('compressor-standalone-dropzone');
        if (standaloneDropzone) {
            ['dragenter', 'dragover'].forEach(name => {
                standaloneDropzone.addEventListener(name, (e) => {
                    e.preventDefault();
                    standaloneDropzone.classList.add('dragover');
                });
            });
            ['dragleave', 'drop'].forEach(name => {
                standaloneDropzone.addEventListener(name, (e) => {
                    e.preventDefault();
                    standaloneDropzone.classList.remove('dragover');
                });
            });
            standaloneDropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                standaloneDropzone.classList.remove('dragover');
                if (e.dataTransfer.files.length > 0) {
                    processBatchFiles(e.dataTransfer.files);
                }
            });
        }
    }

    async function handleFormImageSelect(event) {
        const files = event.target.files;
        if (files && files.length > 0) {
            await processFormFiles(Array.from(files));
            // Resetear el input para permitir elegir nuevamente si el admin desea agregar más
            event.target.value = '';
        }
    }

    async function processFormFiles(files) {
        const emptyEl = document.getElementById('form-gallery-empty');
        const loadingEl = document.getElementById('form-gallery-loading');

        if (emptyEl) emptyEl.classList.add('hidden');
        if (loadingEl) loadingEl.classList.remove('hidden');

        for (const file of files) {
            if (!file.type || !file.type.startsWith('image/')) continue;
            try {
                const result = await window.ImageCompressor.compress(file);
                currentProductImages.push({
                    dataUrl: result.dataUrl,
                    compressedSizeFormatted: result.compressedSizeFormatted,
                    originalSizeFormatted: result.originalSizeFormatted,
                    name: file.name
                });
            } catch (error) {
                console.error('Error al comprimir archivo', file.name, error);
            }
        }

        if (loadingEl) loadingEl.classList.add('hidden');
        renderFormGallery();
    }

    let draggedPhotoIndex = null;

    function handlePhotoDragStart(event, index) {
        draggedPhotoIndex = index;
        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', String(index));
        }
    }

    function handlePhotoDragOver(event, index) {
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
        }
        const target = event.currentTarget;
        if (target && !target.classList.contains('ring-4')) {
            target.classList.add('ring-4', 'ring-blue-400', 'scale-102');
        }
    }

    function handlePhotoDragLeave(event) {
        const target = event.currentTarget;
        if (target) {
            target.classList.remove('ring-4', 'ring-blue-400', 'scale-102');
        }
    }

    function handlePhotoDrop(event, targetIndex) {
        event.preventDefault();
        const target = event.currentTarget;
        if (target) {
            target.classList.remove('ring-4', 'ring-blue-400', 'scale-102');
        }
        if (draggedPhotoIndex !== null && draggedPhotoIndex !== targetIndex) {
            const [moved] = currentProductImages.splice(draggedPhotoIndex, 1);
            currentProductImages.splice(targetIndex, 0, moved);
            draggedPhotoIndex = null;
            renderFormGallery();
        }
    }

    function setAsPrimaryPhoto(index) {
        if (index > 0 && index < currentProductImages.length) {
            const [target] = currentProductImages.splice(index, 1);
            currentProductImages.unshift(target);
            renderFormGallery();
        }
    }

    function moveFormPhoto(index, delta) {
        const newIndex = index + delta;
        if (newIndex >= 0 && newIndex < currentProductImages.length) {
            const item = currentProductImages.splice(index, 1)[0];
            currentProductImages.splice(newIndex, 0, item);
            renderFormGallery();
        }
    }

    function renderFormGallery() {
        const emptyEl = document.getElementById('form-gallery-empty');
        const gridEl = document.getElementById('form-gallery-grid');
        const counterEl = document.getElementById('form-photos-counter');
        const clearBtn = document.getElementById('clear-all-photos-btn');

        const count = currentProductImages.length;
        if (counterEl) {
            if (count === 0) {
                counterEl.textContent = '0 fotos seleccionadas';
                counterEl.className = 'text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200';
            } else if (count < 4) {
                counterEl.textContent = `${count} fotos cargadas (${count}/4 recomendadas)`;
                counterEl.className = 'text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200';
            } else {
                counterEl.textContent = `✅ ${count} fotos listas (Óptimo)`;
                counterEl.className = 'text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200';
            }
        }

        if (clearBtn) {
            clearBtn.classList.toggle('hidden', count === 0);
        }

        if (!gridEl) return;

        if (count === 0) {
            if (emptyEl) emptyEl.classList.remove('hidden');
            gridEl.classList.add('hidden');
            gridEl.innerHTML = '';
            return;
        }

        if (emptyEl) emptyEl.classList.add('hidden');
        gridEl.classList.remove('hidden');

        gridEl.innerHTML = currentProductImages.map((img, idx) => {
            const isPrimary = idx === 0;
            return `
                <div
                    class="relative group bg-white rounded-2xl border-2 ${isPrimary ? 'border-blue-500 shadow-md ring-2 ring-blue-400/25' : 'border-slate-200 hover:border-slate-300'} p-2.5 flex flex-col justify-between shadow-2xs transition-all select-none cursor-grab active:cursor-grabbing"
                    draggable="true"
                    ondragstart="window.AdminPanel.handlePhotoDragStart(event, ${idx})"
                    ondragover="window.AdminPanel.handlePhotoDragOver(event, ${idx})"
                    ondragleave="window.AdminPanel.handlePhotoDragLeave(event)"
                    ondrop="window.AdminPanel.handlePhotoDrop(event, ${idx})"
                    title="Arrastra esta foto para reordenar"
                >
                    <!-- Cabecera de la miniatura: Badge / Botón de principal + Botón de eliminar -->
                    <div class="flex items-center justify-between w-full mb-1 gap-1">
                        ${isPrimary ? `
                            <span class="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-blue-600 text-white shadow-xs">
                                <span>⭐</span> #1 Principal
                            </span>
                        ` : `
                            <button
                                type="button"
                                onclick="window.AdminPanel.setAsPrimaryPhoto(${idx})"
                                class="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300/80 transition-all hover:scale-102 active:scale-95 cursor-pointer"
                                title="Mover esta fotografía a la posición #1 Principal"
                            >
                                <span>⭐</span> #${idx + 1} Poner Principal
                            </button>
                        `}
                        <button
                            type="button"
                            onclick="window.AdminPanel.removeFormPhoto(${idx})"
                            class="w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center text-xs shadow-md transition-transform hover:scale-110 active:scale-90 cursor-pointer shrink-0"
                            title="Eliminar esta foto"
                        >
                            ✕
                        </button>
                    </div>

                    <!-- Contenedor Imagen -->
                    <div class="w-full h-28 flex items-center justify-center overflow-hidden my-1 bg-slate-50/80 rounded-xl p-1.5 border border-slate-100 relative">
                        <img src="${img.dataUrl}" alt="Foto ${idx + 1}" class="max-h-full max-w-full object-contain rounded-lg select-none pointer-events-none">
                    </div>

                    <!-- Métricas de peso -->
                    <div class="w-full text-center py-1 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                        <span class="truncate max-w-[65px] font-medium">${img.originalSizeFormatted || ''}</span>
                        <span class="text-emerald-600 font-bold">${img.compressedSizeFormatted || '&lt; 1MB'}</span>
                    </div>

                    <!-- Barra de Controles de Posición (Mover izquierda / derecha) -->
                    <div class="w-full pt-1.5 border-t border-slate-100 flex items-center justify-between gap-1">
                        <button
                            type="button"
                            onclick="window.AdminPanel.moveFormPhoto(${idx}, -1)"
                            ${idx === 0 ? 'disabled class="opacity-25 cursor-not-allowed px-2 py-1 bg-slate-100 rounded-lg text-slate-400 text-xs font-bold"' : 'class="px-2 py-1 bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-slate-700 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer"'}
                            title="Mover foto hacia la izquierda"
                        >
                            ◀ Mover
                        </button>

                        <span class="text-[10px] text-slate-400 font-bold">Posición ${idx + 1}</span>

                        <button
                            type="button"
                            onclick="window.AdminPanel.moveFormPhoto(${idx}, 1)"
                            ${idx === currentProductImages.length - 1 ? 'disabled class="opacity-25 cursor-not-allowed px-2 py-1 bg-slate-100 rounded-lg text-slate-400 text-xs font-bold"' : 'class="px-2 py-1 bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-slate-700 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer"'}
                            title="Mover foto hacia la derecha"
                        >
                            Mover ▶
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    function removeFormPhoto(index) {
        if (index >= 0 && index < currentProductImages.length) {
            currentProductImages.splice(index, 1);
            renderFormGallery();
        }
    }

    function clearAllFormPhotos() {
        if (currentProductImages.length > 0 && confirm('¿Deseas quitar todas las fotografías cargadas para este producto?')) {
            currentProductImages = [];
            renderFormGallery();
        }
    }

    /**
     * Guardar o Actualizar Producto
     */
    async function saveProduct(event) {
        event.preventDefault();

        const submitBtn = event.target.querySelector('button[type="submit"]');
        const submitLabel = document.getElementById('submit-btn-label');
        const originalLabel = submitLabel ? submitLabel.textContent : 'Guardar Producto';

        const name = document.getElementById('prod-name').value.trim();
        const category = document.getElementById('prod-category').value.trim();
        const price = parseFloat(document.getElementById('prod-price').value);
        const badge = document.getElementById('prod-badge').value.trim();
        const inStock = document.getElementById('prod-instock').checked;
        const description = document.getElementById('prod-description').value.trim();
        const fullDescription = document.getElementById('prod-fulldescription').value.trim();

        if (!name || isNaN(price)) {
            alert('Completa el nombre y un precio válido.');
            return;
        }

        if (submitBtn) submitBtn.disabled = true;

        let imageList = [];
        if (currentProductImages.length > 0) {
            imageList = currentProductImages.map(img => img.dataUrl);
        } else if (editingProductId) {
            const existing = products.find(p => p.id === editingProductId);
            if (existing) {
                if (existing.images && Array.isArray(existing.images) && existing.images.length > 0) {
                    imageList = existing.images;
                } else if (existing.image) {
                    imageList = [existing.image];
                }
            }
        }

        if (imageList.length === 0) {
            imageList = ['assets/images/logo.jpg'];
        }

        // Subir a Cloudflare R2 cualquier imagen en formato dataUrl (base64)
        if (window.StoreApi && window.StoreApi.uploadImage) {
            if (submitLabel) submitLabel.textContent = 'Subiendo a Cloudflare R2...';
            const uploadedList = [];
            for (let i = 0; i < imageList.length; i++) {
                const img = imageList[i];
                if (typeof img === 'string' && img.startsWith('data:')) {
                    const uploadRes = await window.StoreApi.uploadImage(img, `${name}-${i}.webp`);
                    if (uploadRes && uploadRes.success && uploadRes.url) {
                        uploadedList.push(uploadRes.url);
                        continue;
                    }
                }
                uploadedList.push(img);
            }
            imageList = uploadedList;
        }

        const primaryImage = imageList[0];

        if (editingProductId) {
            const index = products.findIndex(p => p.id === editingProductId);
            if (index !== -1) {
                products[index] = {
                    ...products[index],
                    name,
                    category,
                    price,
                    badge,
                    inStock,
                    description,
                    fullDescription,
                    image: primaryImage,
                    images: imageList
                };
            }
        } else {
            const newProduct = {
                id: 'prod-' + Date.now(),
                name,
                category,
                price,
                badge,
                inStock,
                description,
                fullDescription,
                orderCount: 0,
                image: primaryImage,
                images: imageList
            };
            products.unshift(newProduct);
        }

        const savedItem = editingProductId 
            ? products.find(p => p.id === editingProductId)
            : products[0];

        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));

        if (window.StoreApi && savedItem) {
            if (submitLabel) submitLabel.textContent = 'Guardando en Neon...';
            await window.StoreApi.saveProduct(savedItem).catch(err => {
                console.warn('Error al guardar en Neon Postgres:', err);
            });
        }

        if (submitBtn) submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = originalLabel;

        renderProductsTable();
        renderMetrics();
        resetForm();
        alert(editingProductId ? '¡Producto actualizado y guardado en la base de datos!' : '¡Producto agregado y guardado en la base de datos!');
    }

    let adminCategoryFilter = 'Mostrar todas';

    function filterByAdminCategory(category) {
        adminCategoryFilter = category;
        renderProductsTable();
    }

    function renderProductsTable() {
        const tbody = document.getElementById('products-table-body');
        const countBadge = document.getElementById('product-count-badge');
        if (!tbody) return;

        const filtered = adminCategoryFilter === 'Mostrar todas'
            ? products
            : products.filter(p => p.category === adminCategoryFilter);

        if (countBadge) countBadge.textContent = `${filtered.length} Productos`;

        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400 font-semibold">No hay productos registrados en "${adminCategoryFilter}".</td></tr>`;
            return;
        }

        const currency = config.currencySymbol || 'S/';

        tbody.innerHTML = filtered.map(prod => {
            const photoCount = (prod.images && Array.isArray(prod.images)) ? prod.images.length : (prod.image ? 1 : 0);
            return `
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="p-3">
                    <div class="relative inline-block">
                        <img src="${prod.image || 'assets/placeholder.svg'}" class="w-10 h-10 object-contain bg-white rounded-lg border border-slate-200 p-0.5" />
                        ${photoCount > 1 ? `<span class="absolute -bottom-1 -right-1 bg-slate-900 text-white text-[9px] font-bold px-1 rounded-sm shadow-xs" title="${photoCount} fotos cargadas">📷${photoCount}</span>` : ''}
                    </div>
                </td>
                <td class="p-3 font-bold text-slate-900 max-w-[180px] truncate">
                    ${prod.name}
                    <span class="block text-[10px] text-slate-400 font-normal truncate">${prod.description || ''}</span>
                </td>
                <td class="p-3 font-semibold text-slate-700">${prod.category || 'General'}</td>
                <td class="p-3 font-black text-slate-900">${currency}${parseFloat(prod.price || 0).toFixed(2)}</td>
                <td class="p-3 font-bold text-amber-600">🔥 ${prod.orderCount || 0}</td>
                <td class="p-3 text-right space-x-1 whitespace-nowrap">
                    <button
                        onclick="window.AdminPanel.editProduct('${prod.id}')"
                        class="px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md font-semibold text-xs"
                    >Editar</button>
                    <button
                        onclick="window.AdminPanel.deleteProduct('${prod.id}')"
                        class="px-2 py-1 bg-red-50 hover:bg-red-100 text-red-600 rounded-md font-semibold text-xs"
                    >Eliminar</button>
                </td>
            </tr>
            `;
        }).join('');
    }

    function editProduct(productId) {
        const prod = products.find(p => p.id === productId);
        if (!prod) return;

        editingProductId = prod.id;
        document.getElementById('edit-product-id').value = prod.id;
        document.getElementById('prod-name').value = prod.name || '';
        document.getElementById('prod-category').value = prod.category || '';
        document.getElementById('prod-price').value = prod.price || '';
        document.getElementById('prod-badge').value = prod.badge || '';
        document.getElementById('prod-instock').checked = prod.inStock !== false;
        document.getElementById('prod-description').value = prod.description || '';
        document.getElementById('prod-fulldescription').value = prod.fullDescription || '';

        document.getElementById('form-title').innerHTML = `<span>✏️</span> Editando: ${prod.name}`;
        document.getElementById('submit-btn-label').textContent = 'Guardar Cambios';
        document.getElementById('cancel-edit-btn').classList.remove('hidden');

        if (prod.images && Array.isArray(prod.images) && prod.images.length > 0) {
            currentProductImages = prod.images.map((url, i) => ({
                dataUrl: url,
                compressedSizeFormatted: '< 1 MB',
                originalSizeFormatted: i === 0 ? 'Principal' : `Foto ${i + 1}`,
                name: `Foto ${i + 1}`
            }));
        } else if (prod.image) {
            currentProductImages = [{
                dataUrl: prod.image,
                compressedSizeFormatted: '< 1 MB',
                originalSizeFormatted: 'Principal',
                name: 'Foto 1'
            }];
        } else {
            currentProductImages = [];
        }
        renderFormGallery();

        window.scrollTo({ top: 80, behavior: 'smooth' });
    }

    function deleteProduct(productId) {
        const prod = products.find(p => p.id === productId);
        if (!prod) return;

        if (confirm(`¿Estás seguro de que deseas eliminar permanentemente "${prod.name}" del catálogo?`)) {
            products = products.filter(p => p.id !== productId);
            localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));

            if (window.StoreApi) {
                window.StoreApi.deleteProduct(productId).catch(err => {
                    console.warn('Error al eliminar en Neon Postgres:', err);
                });
            }

            renderProductsTable();
            renderMetrics();
            if (editingProductId === productId) resetForm();
        }
    }

    function resetForm() {
        editingProductId = null;
        currentProductImages = [];
        document.getElementById('product-form').reset();
        document.getElementById('edit-product-id').value = '';
        document.getElementById('form-title').innerHTML = `<span>✨</span> Agregar Nuevo Producto al Catálogo`;
        document.getElementById('submit-btn-label').textContent = 'Guardar Producto';
        document.getElementById('cancel-edit-btn').classList.add('hidden');
        renderFormGallery();
    }

    /**
     * Compresión por lotes
     */
    async function handleBatchCompression(event) {
        const files = event.target.files;
        if (files.length > 0) await processBatchFiles(files);
    }

    async function processBatchFiles(files) {
        const container = document.getElementById('batch-results-container');
        const list = document.getElementById('batch-results-list');
        if (!container || !list) return;

        container.classList.remove('hidden');

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const itemDiv = document.createElement('div');
            itemDiv.className = 'flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs';
            itemDiv.innerHTML = `<span>⏳ Procesando ${file.name}...</span>`;
            list.prepend(itemDiv);

            try {
                const res = await window.ImageCompressor.compress(file);
                itemDiv.innerHTML = `
                    <div class="flex items-center gap-2.5">
                        <img src="${res.dataUrl}" class="w-10 h-10 object-contain bg-white rounded-lg border border-slate-200" />
                        <div>
                            <p class="font-bold text-slate-800">${file.name}</p>
                            <p class="text-[10px] text-slate-500">${res.originalSizeFormatted} ➔ <strong class="text-emerald-600">${res.compressedSizeFormatted}</strong></p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onclick="window.ImageCompressor.downloadBlob(window.batchBlobs['${file.name}'], '${file.name.split('.')[0]}-opt.webp')"
                        class="px-2.5 py-1 bg-blue-600 text-white font-bold rounded-lg text-xs"
                    >Descargar</button>
                `;
                window.batchBlobs = window.batchBlobs || {};
                window.batchBlobs[file.name] = res.blob;
            } catch (err) {
                itemDiv.innerHTML = `<span class="text-red-600">❌ Error: ${file.name}</span>`;
            }
        }
    }

    function clearBatchResults() {
        const container = document.getElementById('batch-results-container');
        const list = document.getElementById('batch-results-list');
        if (list) list.innerHTML = '';
        if (container) container.classList.add('hidden');
    }

    function loadSettingsForm() {
        document.getElementById('setting-store-name').value = config.storeName || 'MDOS TECNOSISTEM';
        document.getElementById('setting-store-slogan').value = config.storeSlogan || '';
        document.getElementById('setting-store-whatsapp').value = config.whatsappNumber || '584120000000';
        document.getElementById('setting-store-pin').value = config.adminPin || '1234';
    }

    async function saveSettings(event) {
        event.preventDefault();

        config.storeName = document.getElementById('setting-store-name').value.trim();
        config.storeSlogan = document.getElementById('setting-store-slogan').value.trim();
        config.whatsappNumber = document.getElementById('setting-store-whatsapp').value.trim();
        config.adminPin = document.getElementById('setting-store-pin').value.trim() || '1234';

        localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));

        if (window.StoreApi) {
            await window.StoreApi.saveConfig(config);
        }

        alert('¡Configuración y PIN de seguridad guardados en la base de datos Neon!');
    }

    async function syncDatabaseNow() {
        if (!window.StoreApi) return;
        const btn = document.getElementById('sync-neon-btn');
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<span>⏳</span> Sincronizando con Neon...';
        }
        try {
            await window.StoreApi.syncAllProducts(products);
            await window.StoreApi.saveConfig(config);
            alert('¡Catálogo completo sincronizado exitosamente con la base de datos Neon PostgreSQL!');
        } catch (e) {
            alert('Error al sincronizar con Neon: ' + e.message);
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = '<span>🔄</span> Sincronizar Todo a Neon';
            }
        }
    }

    function exportCatalogJson() {
        const exportData = { config, products, exportedAt: new Date().toISOString() };
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `products.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    function importCatalogJson(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                if (parsed.products) {
                    products = parsed.products;
                    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
                }
                if (parsed.config) {
                    config = parsed.config;
                    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));
                }
                loadSettingsForm();
                renderProductsTable();
                renderMetrics();
                alert('¡Catálogo importado correctamente!');
            } catch (err) {
                alert('Archivo JSON no válido: ' + err.message);
            }
        };
        reader.readAsText(file);
    }

    window.AdminPanel = {
        authenticateWithPin,
        logout,
        switchTab,
        handleFormImageSelect,
        removeFormPhoto,
        clearAllFormPhotos,
        setAsPrimaryPhoto,
        moveFormPhoto,
        handlePhotoDragStart,
        handlePhotoDragOver,
        handlePhotoDragLeave,
        handlePhotoDrop,
        saveProduct,
        editProduct,
        deleteProduct,
        resetForm,
        handleBatchCompression,
        clearBatchResults,
        saveSettings,
        syncDatabaseNow,
        exportCatalogJson,
        importCatalogJson,
        filterByAdminCategory
    };

})();
