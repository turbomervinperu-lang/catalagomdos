/**
 * ==========================================================================
 * Halloween Theme Manager - Tecnosistemas MDOS
 * 
 * Capa estética 100% aislada e independiente.
 * No modifica funciones del carrito, búsqueda, base de datos ni WhatsApp.
 * ==========================================================================
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'mdos_halloween_mode';
    // Por defecto activado durante temporada de Halloween a menos que el usuario lo haya apagado explícitamente
    const isEnabled = localStorage.getItem(STORAGE_KEY) !== 'false';

    const HALLOWEEN_BANNER_HTML = `<span>🎃</span><span>¡Especial de Halloween en Tecnosistemas MDOS! 👻 Precios que dan miedo • Envíos a todo el Perú</span>`;
    const ORIGINAL_BANNER_HTML = `<span>🚀</span><span>¡Envíos a todo el Perú y recojo en tienda! Pagos por Yape, Plin, BCP e Interbank.</span>`;

    // Aplicar estado inicial de inmediato en el body
    function applyInitialState() {
        if (isEnabled) {
            document.body.classList.add('halloween-active');
            updateBanner(true);
        } else {
            document.body.classList.remove('halloween-active');
            updateBanner(false);
        }
        renderToggleButton(isEnabled);
    }

    function updateBanner(active) {
        const bannerP = document.getElementById('banner-text');
        if (!bannerP) return;
        bannerP.innerHTML = active ? HALLOWEEN_BANNER_HTML : ORIGINAL_BANNER_HTML;
    }

    function renderToggleButton(active) {
        let toggleContainer = document.getElementById('hw-toggle-wrapper');
        const bannerContainer = document.getElementById('top-announcement-bar') || document.querySelector('.bg-gradient-to-r.from-blue-700');

        if (!toggleContainer && bannerContainer) {
            const innerDiv = bannerContainer.querySelector('.max-w-7xl');
            if (innerDiv) {
                toggleContainer = document.createElement('div');
                toggleContainer.id = 'hw-toggle-wrapper';
                toggleContainer.className = 'flex items-center gap-1.5 shrink-0 pl-2';
                innerDiv.appendChild(toggleContainer);
            }
        }

        if (!toggleContainer) return;

        toggleContainer.innerHTML = `
            <button
                type="button"
                id="hw-toggle-btn"
                class="hw-toggle-btn"
                title="${active ? 'Desactivar decoración de Halloween' : 'Activar decoración de Halloween'}"
            >
                <span>${active ? '🎃 Halloween: ON' : '👻 Halloween: OFF'}</span>
            </button>
        `;

        const btn = document.getElementById('hw-toggle-btn');
        if (btn) {
            btn.onclick = function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleHalloweenTheme();
            };
        }
    }

    function toggleHalloweenTheme() {
        const currentlyActive = document.body.classList.contains('halloween-active');
        const nextState = !currentlyActive;

        localStorage.setItem(STORAGE_KEY, String(nextState));

        if (nextState) {
            document.body.classList.add('halloween-active');
            updateBanner(true);
            renderToggleButton(true);
        } else {
            document.body.classList.remove('halloween-active');
            updateBanner(false);
            renderToggleButton(false);
        }
    }

    // Ejecutar tan pronto como sea posible
    if (document.body) {
        applyInitialState();
    }
    document.addEventListener('DOMContentLoaded', () => {
        applyInitialState();
        // Protección contra sobreescritura de app.js en bannerText
        setTimeout(() => {
            if (localStorage.getItem(STORAGE_KEY) !== 'false') {
                updateBanner(true);
                renderToggleButton(true);
            }
        }, 150);
        setTimeout(() => {
            if (localStorage.getItem(STORAGE_KEY) !== 'false') {
                updateBanner(true);
            }
        }, 800);
    });

    window.addEventListener('load', () => {
        if (localStorage.getItem(STORAGE_KEY) !== 'false') {
            updateBanner(true);
            renderToggleButton(true);
        }
    });

    window.toggleHalloweenTheme = toggleHalloweenTheme;
})();
