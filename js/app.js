/**
 * Lógica Principal de la Tienda y Catálogo Tecnosistemas MDOS
 * Adaptado a móviles, con estadísticas de productos más pedidos y acceso privado de administrador
 */

(function () {
    'use strict';

    const STORAGE_KEYS = {
        PRODUCTS: 'mdos_catalog_products',
        CONFIG: 'mdos_catalog_config',
        CART: 'mdos_catalog_cart'
    };

    let state = {
        products: [],
        config: {},
        cart: [],
        activeCategory: 'Mostrar todas',
        searchQuery: '',
        selectedProduct: null,
        modalPhotos: [],
        modalPhotoIndex: 0
    };

    const elements = {
        storeName: document.getElementById('store-name'),
        storeSlogan: document.getElementById('store-slogan'),
        storeLogo: document.getElementById('store-logo-img'),
        heroBannerImg: document.getElementById('hero-banner-img'),
        bannerText: document.getElementById('banner-text'),
        categoryFilters: document.getElementById('category-filters'),
        userCategorySelect: document.getElementById('user-category-select'),
        activeCategoryIndicator: document.getElementById('active-category-indicator'),
        resetFilterBtn: document.getElementById('reset-filter-btn'),
        productsGrid: document.getElementById('products-grid'),
        emptyState: document.getElementById('empty-state'),
        searchInput: document.getElementById('search-input'),
        clearSearchBtn: document.getElementById('clear-search-btn'),
        cartBtn: document.getElementById('cart-btn'),
        floatingCartBtn: document.getElementById('floating-cart-btn'),
        cartBadgeCount: document.getElementById('cart-badge-count'),
        floatingBadgeCount: document.getElementById('floating-badge-count'),
        floatingCartTotal: document.getElementById('floating-cart-total'),
        cartDrawer: document.getElementById('cart-drawer'),
        cartDrawerBackdrop: document.getElementById('cart-drawer-backdrop'),
        cartPanel: document.getElementById('cart-panel'),
        closeCartBtn: document.getElementById('close-cart-btn'),
        cartItemsContainer: document.getElementById('cart-items-container'),
        cartEmptyState: document.getElementById('cart-empty-state'),
        cartSummarySection: document.getElementById('cart-summary-section'),
        cartSubtotalText: document.getElementById('cart-subtotal-text'),
        cartTotalText: document.getElementById('cart-total-text'),
        checkoutBtn: document.getElementById('checkout-whatsapp-btn'),
        customerName: document.getElementById('customer-name'),
        customerPhone: document.getElementById('customer-phone'),
        deliveryType: document.getElementById('delivery-type'),
        addressContainer: document.getElementById('address-container'),
        customerAddress: document.getElementById('customer-address'),
        paymentMethod: document.getElementById('payment-method'),
        customerNotes: document.getElementById('customer-notes'),
        // Modal de detalle de producto y visor de múltiples fotos
        productModal: document.getElementById('product-modal'),
        productModalBackdrop: document.getElementById('product-modal-backdrop'),
        productModalClose: document.getElementById('product-modal-close'),
        modalImage: document.getElementById('modal-product-image'),
        modalPrevBtn: document.getElementById('modal-photo-prev-btn'),
        modalNextBtn: document.getElementById('modal-photo-next-btn'),
        modalThumbnailsStrip: document.getElementById('modal-thumbnails-strip'),
        modalGalleryCounter: document.getElementById('modal-gallery-counter'),
        modalBadge: document.getElementById('modal-product-badge'),
        modalCategory: document.getElementById('modal-product-category'),
        modalTitle: document.getElementById('modal-product-title'),
        modalPrice: document.getElementById('modal-product-price'),
        modalOrdersCount: document.getElementById('modal-product-orders'),
        modalDescription: document.getElementById('modal-product-description'),
        modalAddToCartBtn: document.getElementById('modal-add-to-cart-btn'),
        // Modal de Acceso Privado Admin
        adminLoginModal: document.getElementById('admin-login-modal'),
        adminLoginBackdrop: document.getElementById('admin-login-backdrop'),
        adminLoginClose: document.getElementById('admin-login-close'),
        adminPinInput: document.getElementById('admin-pin-input'),
        adminLoginSubmit: document.getElementById('admin-login-submit'),
        adminLoginError: document.getElementById('admin-login-error')
    };

    document.addEventListener('DOMContentLoaded', () => {
        initStore();
        setupEventListeners();
    });

    function initStore() {
        const savedConfig = localStorage.getItem(STORAGE_KEYS.CONFIG);
        state.config = savedConfig ? JSON.parse(savedConfig) : (window.STORE_DATA?.DEFAULT_CONFIG || {});
        if (!state.config.currencySymbol || state.config.currencySymbol === '$') {
            state.config.currencySymbol = 'S/';
            state.config.currencyCode = 'PEN';
            localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(state.config));
        }

        // Garantizar el número oficial de WhatsApp de Tecnosistemas MDOS en Perú (+51 929198813)
        const currentWhatsapp = state.config.whatsappNumber;
        if (!currentWhatsapp || currentWhatsapp === '584120000000' || currentWhatsapp === '51900000000' || String(currentWhatsapp).startsWith('58')) {
            state.config.whatsappNumber = '51929198813';
            localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(state.config));
        }

        const savedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        const defaultList = (window.STORE_DATA && Array.isArray(window.STORE_DATA.DEFAULT_PRODUCTS) && window.STORE_DATA.DEFAULT_PRODUCTS.length > 0)
            ? window.STORE_DATA.DEFAULT_PRODUCTS
            : (window.INITIAL_PRODUCTS || []);

        if (!savedProducts || savedProducts === '[]' || savedProducts.includes('"Componentes"') || savedProducts.includes('"Servicios"')) {
            state.products = defaultList;
            if (state.products.length > 0) {
                localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
            }
        } else {
            try {
                const parsed = JSON.parse(savedProducts);
                state.products = (Array.isArray(parsed) && parsed.length > 0) ? parsed : defaultList;
            } catch (e) {
                state.products = defaultList;
            }
        }

        const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
        state.cart = savedCart ? JSON.parse(savedCart) : [];

        // Aplicar textos e imágenes
        if (elements.storeName) elements.storeName.textContent = state.config.storeName || 'MDOS TECNOSISTEM';
        if (elements.storeSlogan) elements.storeSlogan.textContent = state.config.storeSlogan || '';
        if (elements.bannerText) elements.bannerText.textContent = state.config.bannerMessage || '';
        if (elements.storeLogo && state.config.logoUrl) elements.storeLogo.src = state.config.logoUrl;
        if (elements.heroBannerImg && state.config.headerBannerUrl) elements.heroBannerImg.src = state.config.headerBannerUrl;

        updateFloatingWhatsAppLink();
        renderCategories();
        selectCategory(state.activeCategory || 'Mostrar todas');
        updateCartUI();

        // Cargar datos en vivo desde la base de datos Neon Postgres
        if (window.StoreApi) {
            window.StoreApi.getProducts().then(res => {
                if (res && res.products && Array.isArray(res.products) && res.products.length > 0) {
                    state.products = res.products;
                    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
                    selectCategory(state.activeCategory || 'Mostrar todas');
                }
            }).catch(err => {
                console.warn('Error conectando a Neon DB:', err);
            });

            window.StoreApi.getConfig().then(res => {
                if (res && res.config) {
                    state.config = res.config;
                    if (!state.config.whatsappNumber || state.config.whatsappNumber === '584120000000' || state.config.whatsappNumber === '51900000000' || String(state.config.whatsappNumber).startsWith('58')) {
                        state.config.whatsappNumber = '51929198813';
                    }
                    if (elements.storeName) elements.storeName.textContent = state.config.storeName || 'Tecnosistemas MDOS';
                    if (elements.storeSlogan) elements.storeSlogan.textContent = state.config.storeSlogan || '';
                    if (elements.bannerText) elements.bannerText.textContent = state.config.bannerMessage || '';
                    if (elements.storeLogo && state.config.logoUrl) elements.storeLogo.src = state.config.logoUrl;
                    if (elements.heroBannerImg && state.config.headerBannerUrl) elements.heroBannerImg.src = state.config.headerBannerUrl;
                    updateFloatingWhatsAppLink();
                    renderCategories();
                    selectCategory(state.activeCategory || 'Mostrar todas');
                    updateCartUI();
                }
            }).catch(() => {});
        }
    }

    function setupEventListeners() {
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', (e) => {
                state.searchQuery = e.target.value.trim().toLowerCase();
                if (elements.clearSearchBtn) {
                    elements.clearSearchBtn.classList.toggle('hidden', state.searchQuery === '');
                }
                renderProducts();
            });
        }

        if (elements.clearSearchBtn) {
            elements.clearSearchBtn.addEventListener('click', () => {
                elements.searchInput.value = '';
                state.searchQuery = '';
                elements.clearSearchBtn.classList.add('hidden');
                renderProducts();
            });
        }

        if (elements.cartBtn) elements.cartBtn.addEventListener('click', openCart);
        if (elements.floatingCartBtn) elements.floatingCartBtn.addEventListener('click', openCart);
        if (elements.closeCartBtn) elements.closeCartBtn.addEventListener('click', closeCart);
        if (elements.cartDrawerBackdrop) elements.cartDrawerBackdrop.addEventListener('click', closeCart);

        if (elements.productModalClose) elements.productModalClose.addEventListener('click', closeProductModal);
        if (elements.productModalBackdrop) elements.productModalBackdrop.addEventListener('click', closeProductModal);

        if (elements.checkoutBtn) {
            elements.checkoutBtn.addEventListener('click', handleWhatsAppCheckout);
        }

        if (elements.deliveryType) {
            elements.deliveryType.addEventListener('change', (e) => {
                if (elements.addressContainer) {
                    elements.addressContainer.classList.toggle('hidden', e.target.value === 'retiro');
                }
            });
        }

        // Acceso Privado Admin Modal
        if (elements.adminLoginClose) elements.adminLoginClose.addEventListener('click', closeAdminLoginModal);
        if (elements.adminLoginBackdrop) elements.adminLoginBackdrop.addEventListener('click', closeAdminLoginModal);
        if (elements.adminLoginSubmit) elements.adminLoginSubmit.addEventListener('click', handleAdminLogin);
        if (elements.adminPinInput) {
            elements.adminPinInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') handleAdminLogin();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeCart();
                closeProductModal();
                closeAdminLoginModal();
            } else if (elements.productModal && !elements.productModal.classList.contains('hidden')) {
                if (e.key === 'ArrowLeft') {
                    changeModalPhoto(-1);
                } else if (e.key === 'ArrowRight') {
                    changeModalPhoto(1);
                }
            }
        });
    }

    function selectCategory(category) {
        state.activeCategory = category;

        if (elements.userCategorySelect) {
            elements.userCategorySelect.value = category;
        }

        if (elements.activeCategoryIndicator) {
            if (category === 'Mostrar todas' || category === 'Todos') {
                elements.activeCategoryIndicator.innerHTML = `Mostrando: <strong class="text-blue-600">Todas las categorías</strong> (${state.products.length})`;
            } else if (category === '🔥 Más Pedidos') {
                const count = state.products.filter(p => (p.orderCount || 0) > 0).length;
                elements.activeCategoryIndicator.innerHTML = `Mostrando: <strong class="text-amber-600">🔥 Más Pedidos</strong> (${count})`;
            } else {
                const count = state.products.filter(p => p.category === category).length;
                elements.activeCategoryIndicator.innerHTML = `Mostrando: <strong class="text-blue-600">${category}</strong> (${count})`;
            }
        }

        if (elements.resetFilterBtn) {
            elements.resetFilterBtn.classList.toggle('hidden', category === 'Mostrar todas' || category === 'Todos');
        }

        renderProducts();
    }

    function renderCategories() {
        if (elements.userCategorySelect) {
            elements.userCategorySelect.value = state.activeCategory || 'Mostrar todas';
        }
        if (elements.activeCategoryIndicator) {
            elements.activeCategoryIndicator.innerHTML = `Mostrando: <strong class="text-blue-600">Todas las categorías</strong> (${state.products.length})`;
        }
    }

    function renderProducts() {
        if (!elements.productsGrid) return;

        let filtered = state.products.filter(prod => {
            let matchCategory = true;
            if (state.activeCategory === '🔥 Más Pedidos') {
                matchCategory = (prod.orderCount || 0) > 0;
            } else if (state.activeCategory !== 'Mostrar todas' && state.activeCategory !== 'Todos') {
                matchCategory = prod.category === state.activeCategory;
            }

            const matchSearch = state.searchQuery === '' ||
                prod.name.toLowerCase().includes(state.searchQuery) ||
                (prod.description && prod.description.toLowerCase().includes(state.searchQuery)) ||
                (prod.category && prod.category.toLowerCase().includes(state.searchQuery));
            return matchCategory && matchSearch;
        });

        // Ordenar por más pedidos si está en esa pestaña
        if (state.activeCategory === '🔥 Más Pedidos') {
            filtered.sort((a, b) => (b.orderCount || 0) - (a.orderCount || 0));
        }

        if (filtered.length === 0) {
            elements.productsGrid.innerHTML = '';
            if (elements.emptyState) elements.emptyState.classList.remove('hidden');
            return;
        }

        if (elements.emptyState) elements.emptyState.classList.add('hidden');

        elements.productsGrid.innerHTML = filtered.map(prod => {
            const currency = state.config.currencySymbol || 'S/';
            const priceFormatted = parseFloat(prod.price || 0).toFixed(2);
            const inCart = state.cart.find(item => item.id === prod.id);
            const cartQty = inCart ? inCart.quantity : 0;
            const orders = prod.orderCount || 0;

            return `
            <div class="product-card group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <!-- Badges Superiores -->
                <div class="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between pointer-events-none">
                    ${prod.badge ? `
                        <span class="px-2 py-0.5 text-[10px] sm:text-xs font-black rounded-lg uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">
                            ${prod.badge}
                        </span>
                    ` : '<span></span>'}

                    ${orders > 0 ? `
                        <span class="px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded-lg bg-amber-500/90 text-white shadow-xs backdrop-blur-xs flex items-center gap-1">
                            🔥 ${orders} pedidos
                        </span>
                    ` : ''}
                </div>

                <!-- Imagen del Producto -->
                <div class="product-image-container relative w-full h-40 sm:h-52 bg-slate-50 cursor-pointer overflow-hidden flex items-center justify-center p-2.5 sm:p-3"
                     onclick="window.StoreCatalog.openProductModal('${prod.id}')">
                    <img
                        src="${prod.image || 'assets/placeholder.svg'}"
                        alt="${prod.name}"
                        loading="lazy"
                        class="product-img object-contain w-full h-full max-h-36 sm:max-h-48 group-hover:scale-105 transition-transform duration-300"
                    />
                    ${(prod.images && Array.isArray(prod.images) && prod.images.length > 1) ? `
                        <span class="absolute bottom-2.5 right-2.5 z-10 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs flex items-center gap-1 shadow-xs">
                            📷 ${prod.images.length} fotos
                        </span>
                    ` : ''}
                    <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="bg-white/95 text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                            Ver detalles
                        </span>
                    </div>
                </div>

                <!-- Detalles de la Tarjeta -->
                <div class="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between text-[11px] text-slate-500 font-medium mb-1">
                            <span class="text-blue-600 font-bold uppercase truncate max-w-[120px]">${prod.category || 'General'}</span>
                            <span class="text-emerald-600 flex items-center gap-1 text-[10px] font-semibold">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Stock
                            </span>
                        </div>
                        <h3 class="font-bold text-slate-800 text-xs sm:text-sm leading-snug line-clamp-2 hover:text-blue-600 cursor-pointer"
                            onclick="window.StoreCatalog.openProductModal('${prod.id}')">
                            ${prod.name}
                        </h3>
                        <p class="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed hidden sm:block">
                            ${prod.description || ''}
                        </p>
                    </div>

                    <!-- Precio y Botón -->
                    <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5">
                        <div>
                            <span class="text-[10px] text-slate-400 block font-medium">Precio</span>
                            <span class="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                                ${currency}${priceFormatted}
                            </span>
                        </div>

                        ${cartQty > 0 ? `
                            <div class="flex items-center bg-blue-50 border border-blue-200 rounded-lg overflow-hidden p-0.5">
                                <button
                                    onclick="window.StoreCatalog.changeQuantity('${prod.id}', -1)"
                                    class="w-6 h-6 flex items-center justify-center text-blue-700 hover:bg-blue-200/70 rounded-md font-bold text-xs"
                                    title="Disminuir"
                                >−</button>
                                <span class="px-1.5 text-xs font-bold text-blue-900">${cartQty}</span>
                                <button
                                    onclick="window.StoreCatalog.changeQuantity('${prod.id}', 1)"
                                    class="w-6 h-6 flex items-center justify-center text-blue-700 hover:bg-blue-200/70 rounded-md font-bold text-xs"
                                    title="Aumentar"
                                >+</button>
                            </div>
                        ` : `
                            <button
                                onclick="window.StoreCatalog.addToCart('${prod.id}')"
                                class="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-xs transition-all duration-200"
                            >
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg>
                                <span>Agregar</span>
                            </button>
                        `}
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }

    function openProductModal(productId) {
        const product = state.products.find(p => p.id === productId);
        if (!product || !elements.productModal) return;

        state.selectedProduct = product;
        const currency = state.config.currencySymbol || 'S/';

        // Determinar lista de fotos (soporta array de imágenes o imagen única)
        let photos = [];
        if (product.images && Array.isArray(product.images) && product.images.length > 0) {
            photos = product.images;
        } else if (product.image) {
            photos = [product.image];
        } else {
            photos = ['assets/placeholder.svg'];
        }

        state.modalPhotos = photos;
        state.modalPhotoIndex = 0;

        if (elements.modalTitle) elements.modalTitle.textContent = product.name;
        if (elements.modalCategory) elements.modalCategory.textContent = product.category || 'General';
        if (elements.modalPrice) elements.modalPrice.textContent = `${currency}${parseFloat(product.price).toFixed(2)}`;
        if (elements.modalOrdersCount) {
            elements.modalOrdersCount.textContent = `🔥 ${product.orderCount || 0} pedidos realizados`;
        }
        if (elements.modalDescription) {
            elements.modalDescription.textContent = product.fullDescription || product.description || 'Sin descripción detallada disponible.';
        }

        if (elements.modalBadge) {
            if (product.badge) {
                elements.modalBadge.textContent = product.badge;
                elements.modalBadge.classList.remove('hidden');
            } else {
                elements.modalBadge.classList.add('hidden');
            }
        }

        // Renderizar miniaturas
        if (elements.modalThumbnailsStrip) {
            if (photos.length > 1) {
                elements.modalThumbnailsStrip.classList.remove('hidden');
                elements.modalThumbnailsStrip.innerHTML = photos.map((photoUrl, idx) => `
                    <button
                        type="button"
                        onclick="window.StoreCatalog.setModalPhoto(${idx})"
                        class="modal-thumb-btn w-12 h-12 rounded-lg ${idx === 0 ? 'border-2 border-blue-600 ring-2 ring-blue-400/40 scale-105' : 'border border-slate-200 opacity-60 hover:opacity-100'} p-0.5 bg-white shrink-0 overflow-hidden cursor-pointer transition-all"
                        title="Ver foto ${idx + 1}"
                    >
                        <img src="${photoUrl}" alt="Miniatura ${idx + 1}" class="w-full h-full object-contain rounded">
                    </button>
                `).join('');
            } else {
                elements.modalThumbnailsStrip.classList.add('hidden');
                elements.modalThumbnailsStrip.innerHTML = '';
            }
        }

        updateModalPhoto(0);

        if (elements.modalAddToCartBtn) {
            elements.modalAddToCartBtn.onclick = () => {
                addToCart(product.id);
                closeProductModal();
            };
        }

        elements.productModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }

    function setModalPhoto(index) {
        updateModalPhoto(index);
    }

    function changeModalPhoto(direction) {
        if (!state.modalPhotos || state.modalPhotos.length === 0) return;
        let newIndex = state.modalPhotoIndex + direction;
        if (newIndex < 0) newIndex = state.modalPhotos.length - 1;
        if (newIndex >= state.modalPhotos.length) newIndex = 0;
        updateModalPhoto(newIndex);
    }

    function updateModalPhoto(index) {
        if (!state.modalPhotos || state.modalPhotos.length === 0) return;
        state.modalPhotoIndex = index;

        if (elements.modalImage) {
            elements.modalImage.src = state.modalPhotos[index];
        }

        const isMulti = state.modalPhotos.length > 1;

        if (elements.modalGalleryCounter) {
            elements.modalGalleryCounter.textContent = `${index + 1} / ${state.modalPhotos.length}`;
            elements.modalGalleryCounter.classList.toggle('hidden', !isMulti);
        }

        if (elements.modalPrevBtn) {
            elements.modalPrevBtn.classList.toggle('hidden', !isMulti);
        }

        if (elements.modalNextBtn) {
            elements.modalNextBtn.classList.toggle('hidden', !isMulti);
        }

        if (elements.modalThumbnailsStrip) {
            const thumbs = elements.modalThumbnailsStrip.querySelectorAll('.modal-thumb-btn');
            thumbs.forEach((thumb, i) => {
                if (i === index) {
                    thumb.className = 'modal-thumb-btn w-12 h-12 rounded-lg border-2 border-blue-600 ring-2 ring-blue-400/40 scale-105 p-0.5 bg-white shrink-0 overflow-hidden cursor-pointer transition-all shadow-xs';
                } else {
                    thumb.className = 'modal-thumb-btn w-12 h-12 rounded-lg border border-slate-200 opacity-60 hover:opacity-100 p-0.5 bg-white shrink-0 overflow-hidden cursor-pointer transition-all';
                }
            });
        }
    }

    function closeProductModal() {
        if (!elements.productModal) return;
        elements.productModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        state.selectedProduct = null;
    }

    function addToCart(productId, quantity = 1) {
        const product = state.products.find(p => p.id === productId);
        if (!product) return;

        const existing = state.cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += quantity;
        } else {
            state.cart.push({
                id: product.id,
                name: product.name,
                price: parseFloat(product.price),
                image: product.image,
                category: product.category,
                quantity: quantity
            });
        }

        saveCart();
        updateCartUI();
        renderProducts();
        triggerCartAnimation();
        showToast(`Agregado: ${product.name}`, 'success');
    }

    function changeQuantity(productId, delta) {
        const itemIndex = state.cart.findIndex(item => item.id === productId);
        if (itemIndex === -1) return;

        state.cart[itemIndex].quantity += delta;

        if (state.cart[itemIndex].quantity <= 0) {
            state.cart.splice(itemIndex, 1);
            showToast('Producto retirado del carrito', 'info');
        }

        saveCart();
        updateCartUI();
        renderProducts();
    }

    function removeFromCart(productId) {
        state.cart = state.cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
        renderProducts();
        showToast('Producto eliminado del carrito', 'info');
    }

    function saveCart() {
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
    }

    function updateCartUI() {
        const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const currency = state.config.currencySymbol || 'S/';

        if (elements.cartBadgeCount) {
            elements.cartBadgeCount.textContent = totalItems;
            elements.cartBadgeCount.classList.toggle('hidden', totalItems === 0);
        }

        if (elements.floatingBadgeCount) {
            elements.floatingBadgeCount.textContent = totalItems;
        }

        if (elements.floatingCartTotal) {
            elements.floatingCartTotal.textContent = `${currency}${subtotal.toFixed(2)}`;
        }

        if (elements.floatingCartBtn) {
            elements.floatingCartBtn.classList.toggle('hidden', totalItems === 0);
        }

        if (elements.cartItemsContainer) {
            if (state.cart.length === 0) {
                elements.cartItemsContainer.innerHTML = '';
                if (elements.cartEmptyState) elements.cartEmptyState.classList.remove('hidden');
                if (elements.cartSummarySection) elements.cartSummarySection.classList.add('hidden');
            } else {
                if (elements.cartEmptyState) elements.cartEmptyState.classList.add('hidden');
                if (elements.cartSummarySection) elements.cartSummarySection.classList.remove('hidden');

                elements.cartItemsContainer.innerHTML = state.cart.map(item => `
                    <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        <img src="${item.image || 'assets/placeholder.svg'}"
                             alt="${item.name}"
                             class="w-12 h-12 object-contain rounded-lg bg-white p-1 border border-slate-200" />
                        <div class="flex-1 min-w-0">
                            <h4 class="text-xs font-bold text-slate-800 line-clamp-1">${item.name}</h4>
                            <p class="text-xs font-semibold text-blue-600 mt-0.5">
                                ${currency}${item.price.toFixed(2)} c/u
                            </p>
                            <div class="flex items-center gap-2 mt-1.5">
                                <div class="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                                    <button
                                        onclick="window.StoreCatalog.changeQuantity('${item.id}', -1)"
                                        class="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold text-xs"
                                    >−</button>
                                    <span class="px-2 text-xs font-bold text-slate-800">${item.quantity}</span>
                                    <button
                                        onclick="window.StoreCatalog.changeQuantity('${item.id}', 1)"
                                        class="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold text-xs"
                                    >+</button>
                                </div>
                                <span class="text-xs font-bold text-slate-900">
                                    ${currency}${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        </div>
                        <button
                            onclick="window.StoreCatalog.removeFromCart('${item.id}')"
                            class="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Eliminar producto"
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                `).join('');
            }
        }

        if (elements.cartSubtotalText) elements.cartSubtotalText.textContent = `${currency}${subtotal.toFixed(2)}`;
        if (elements.cartTotalText) elements.cartTotalText.textContent = `${currency}${subtotal.toFixed(2)}`;
    }

    function triggerCartAnimation() {
        if (elements.cartBtn) {
            elements.cartBtn.classList.add('cart-bump');
            setTimeout(() => elements.cartBtn.classList.remove('cart-bump'), 400);
        }
        if (elements.floatingCartBtn) {
            elements.floatingCartBtn.classList.add('cart-bump');
            setTimeout(() => elements.floatingCartBtn.classList.remove('cart-bump'), 400);
        }
    }

    function openCart() {
        if (!elements.cartDrawer) return;
        elements.cartDrawer.classList.remove('hidden');
        setTimeout(() => {
            if (elements.cartPanel) {
                elements.cartPanel.classList.remove('translate-x-full');
            }
        }, 10);
        document.body.classList.add('overflow-hidden');
    }

    function closeCart() {
        if (!elements.cartDrawer) return;
        if (elements.cartPanel) {
            elements.cartPanel.classList.add('translate-x-full');
        }
        setTimeout(() => {
            elements.cartDrawer.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }, 300);
    }

    /**
     * Finalizar pedido por WhatsApp y registrar métricas de productos más pedidos
     */
    function handleWhatsAppCheckout() {
        if (state.cart.length === 0) {
            showToast('El carrito está vacío. Agrega productos antes de ordenar.', 'warning');
            return;
        }

        const name = elements.customerName ? elements.customerName.value.trim() : '';
        const phone = elements.customerPhone ? elements.customerPhone.value.trim() : '';
        const deliveryMode = elements.deliveryType ? elements.deliveryType.value : 'delivery';
        const address = elements.customerAddress ? elements.customerAddress.value.trim() : '';
        const payment = elements.paymentMethod ? elements.paymentMethod.value : 'Por acordar';
        const notes = elements.customerNotes ? elements.customerNotes.value.trim() : '';

        if (!name) {
            showToast('Por favor escribe tu Nombre y Apellido.', 'warning');
            if (elements.customerName) elements.customerName.focus();
            return;
        }

        if (deliveryMode === 'delivery' && !address) {
            showToast('Por favor escribe la dirección de entrega.', 'warning');
            if (elements.customerAddress) elements.customerAddress.focus();
            return;
        }

        // REGISTRAR MÉTRICAS: Incrementar orderCount para cada producto pedido
        const orderedProductIds = state.cart.map(item => item.id);
        state.cart.forEach(cartItem => {
            const prod = state.products.find(p => p.id === cartItem.id);
            if (prod) {
                prod.orderCount = (prod.orderCount || 0) + cartItem.quantity;
            }
        });
        state.config.totalOrdersCount = (state.config.totalOrdersCount || 0) + 1;

        // Persistir en LocalStorage
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
        localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(state.config));

        // Registrar en base de datos Neon Postgres
        if (window.StoreApi) {
            window.StoreApi.recordOrder(orderedProductIds);
        }

        const currency = state.config.currencySymbol || 'S/';
        const cleanStoreNumber = normalizePeruWhatsApp(state.config.whatsappNumber);

        const dateStr = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

        let message = `🛒 *NUEVO PEDIDO - ${state.config.storeName || 'MDOS TECNOSISTEM'}*\n`;
        message += `📅 Fecha: ${dateStr} - ${timeStr}\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

        message += `👤 *DATOS DEL CLIENTE:*\n`;
        message += `• *Nombre:* ${name}\n`;
        if (phone) message += `• *Teléfono:* ${phone}\n`;
        message += `• *Modalidad:* ${deliveryMode === 'delivery' ? '🚚 Envío a domicilio / Delivery' : '🏬 Retiro en tienda física'}\n`;
        if (deliveryMode === 'delivery' && address) {
            message += `• *Dirección:* ${address}\n`;
        }
        message += `• *Método de Pago:* ${payment}\n`;
        if (notes) {
            message += `• *Notas:* ${notes}\n`;
        }

        message += `\n📦 *PRODUCTOS SOLICITADOS:*\n`;
        let total = 0;
        state.cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Cantidad: ${item.quantity} | ${currency}${item.price.toFixed(2)} c/u\n`;
            message += `   Subtotal: *${currency}${itemTotal.toFixed(2)}*\n\n`;
        });

        message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `💰 *TOTAL A PAGAR: ${currency}${total.toFixed(2)}*\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `_Hola, he generado este pedido desde el catálogo web oficial. Por favor confirmarme la disponibilidad y los datos para concretar el pago._`;

        const whatsappUrl = `https://wa.me/${cleanStoreNumber}?text=${encodeURIComponent(message)}`;
        const win = window.open(whatsappUrl, '_blank');
        if (!win || win.closed || typeof win.closed === 'undefined') {
            window.location.href = whatsappUrl;
        }
        showToast('¡Redirigiendo a WhatsApp con tu pedido!', 'success');

        renderProducts(); // Actualiza contadores de pedidos
    }

    /**
     * Normaliza y valida el número de WhatsApp oficial para Perú (+51)
     */
    function normalizePeruWhatsApp(raw) {
        const defaultPeruNumber = '51929198813';
        if (!raw) return defaultPeruNumber;
        let clean = String(raw).replace(/[^0-9]/g, '');
        if (clean.startsWith('0051')) {
            clean = clean.substring(2);
        } else if (clean.startsWith('0') && clean.length === 10) {
            clean = '51' + clean.substring(1);
        }
        // En Perú los números celulares tienen 9 dígitos (ej. 929198813)
        if (clean.length === 9) {
            clean = '51' + clean;
        }
        // Descartar números legacy o inválidos
        if (!clean || clean.length < 9 || clean === '584120000000' || clean === '51900000000' || clean.startsWith('58')) {
            clean = defaultPeruNumber;
        }
        return clean;
    }

    /**
     * Actualiza el enlace del botón flotante de WhatsApp
     */
    function updateFloatingWhatsAppLink() {
        const floatingBtn = document.getElementById('floating-whatsapp-btn');
        if (floatingBtn) {
            const num = normalizePeruWhatsApp(state.config.whatsappNumber);
            floatingBtn.href = `https://wa.me/${num}?text=${encodeURIComponent('Hola Tecnosistemas MDOS, quisiera hacer una consulta sobre sus productos y servicios.')}`;
        }
    }

    /**
     * Envía un mensaje de prueba para validar la conexión de WhatsApp
     */
    function sendTestWhatsAppMessage() {
        const cleanStoreNumber = normalizePeruWhatsApp(state.config.whatsappNumber);
        const testMsg = `🇵🇪 *PRUEBA DE CONEXIÓN WHATSAPP - TECNOSISTEMAS MDOS*\n\n¡Hola! Este es un mensaje de prueba para confirmar que la integración de pedidos por WhatsApp con el número oficial 929198813 (+51 929 198 813) ha quedado 100% operativa y lista para recibir clientes.\n\n🌐 Catálogo Oficial: Tecnosistemas MDOS Perú.`;
        const testUrl = `https://wa.me/${cleanStoreNumber}?text=${encodeURIComponent(testMsg)}`;
        const win = window.open(testUrl, '_blank');
        if (!win || win.closed || typeof win.closed === 'undefined') {
            window.location.href = testUrl;
        }
        return testUrl;
    }

    /**
     * Acceso Privado de Administrador
     */
    function openAdminLoginModal() {
        if (!elements.adminLoginModal) {
            window.location.href = 'admin.html';
            return;
        }
        if (elements.adminPinInput) elements.adminPinInput.value = '';
        if (elements.adminLoginError) elements.adminLoginError.classList.add('hidden');
        elements.adminLoginModal.classList.remove('hidden');
        setTimeout(() => {
            if (elements.adminPinInput) elements.adminPinInput.focus();
        }, 100);
        document.body.classList.add('overflow-hidden');
    }

    function closeAdminLoginModal() {
        if (!elements.adminLoginModal) return;
        elements.adminLoginModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    function handleAdminLogin() {
        const inputPin = elements.adminPinInput ? elements.adminPinInput.value.trim() : '';
        const validPin = state.config.adminPin || '1234';

        if (inputPin === validPin) {
            sessionStorage.setItem('mdos_admin_auth', 'true');
            window.location.href = 'admin.html';
        } else {
            if (elements.adminLoginError) {
                elements.adminLoginError.textContent = 'PIN incorrecto. Inténtalo de nuevo.';
                elements.adminLoginError.classList.remove('hidden');
            }
            if (elements.adminPinInput) {
                elements.adminPinInput.value = '';
                elements.adminPinInput.focus();
            }
        }
    }

    function showToast(message, type = 'info') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        const icon = type === 'success' ? '✓' : type === 'warning' ? '⚠️' : 'ℹ️';

        toast.innerHTML = `<span class="font-bold text-emerald-400">${icon}</span><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    window.StoreCatalog = {
        addToCart,
        changeQuantity,
        removeFromCart,
        openCart,
        closeCart,
        openProductModal,
        closeProductModal,
        setModalPhoto,
        changeModalPhoto,
        openAdminLoginModal,
        closeAdminLoginModal,
        selectCategory,
        showToast,
        sendTestWhatsAppMessage
    };

})();
