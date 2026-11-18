import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';
import { CATEGORIES } from '../lib/categories';

// Cantidad máxima de productos por página (compaginación)
const ITEMS_PER_PAGE = 12;

// Función para generar números de página con elipsis inteligente
function getPageNumbers(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total];
  }
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Compaginación (12 artículos por página)
  const [currentPage, setCurrentPage] = useState(1);
  const catalogTopRef = useRef(null);

  // Filtros interactivos
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Mostrar todas');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const categoryMenuRef = useRef(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' por defecto con fotos grandes como en Imagen 2

  // Cerrar menú de categorías automáticamente al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(e.target)) {
        setShowCategoryMenu(false);
      }
    }
    if (showCategoryMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showCategoryMenu]);

  // Modal de detalle de producto
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(0);

  // Feedback de carrito
  const [addedId, setAddedId] = useState(null);
  const { addItem } = useCart();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set('search', search.trim());
      if (selectedCategory && selectedCategory !== 'Mostrar todas') {
        params.set('category', selectedCategory);
      }

      const res = await fetch(`/api/products?${params.toString()}`);
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const data = await res.json();
      setProducts(data);

      // Si no hay filtro, guardar el total
      if (!search.trim() && selectedCategory === 'Mostrar todas') {
        setTotalCount(data.length);
      } else if (totalCount === 0) {
        setTotalCount(data.length);
      }
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchProducts();
  }, [selectedCategory, search]);

  // Cálculos de compaginación (12 productos por página)
  const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (validCurrentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === validCurrentPage) return;
    setCurrentPage(newPage);
    if (catalogTopRef.current) {
      catalogTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product, chosenImage, e) => {
    if (e) e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      imageUrl: chosenImage || product.imageUrl
    });
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setActiveModalImageIndex(0);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Head>
        <title>TECNOSISTEMAS MDOS | Catálogo en Tiempo Real (Soles S/)</title>
        <meta name="description" content="Actualización de stock en tiempo real y catálogo oficial de TECNOSISTEMAS MDOS en Soles peruanos." />
      </Head>

      <Header />

      <main style={{ maxWidth: '1240px', margin: '1rem auto 4rem auto', padding: '0 1rem' }}>
        {/* Banner Institucional Superior */}
        <section style={{
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          position: 'relative',
          background: '#090d16',
          border: '1px solid #1e293b'
        }}>
          <div style={{
            width: '100%',
            maxHeight: '340px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/banner.jpg"
              alt="Banner TECNOSISTEMAS MDOS"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '340px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </section>

        {/* Ancla para scroll suave al cambiar de página */}
        <div ref={catalogTopRef} style={{ scrollMarginTop: '80px' }} />

        {/* TÍTULO Y SUBTÍTULO: ACTUALIZACIÓN DE STOCK EN TIEMPO REAL */}
        <section style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <h1 style={{
            fontSize: '1.7rem',
            fontWeight: 900,
            letterSpacing: '0.5px',
            color: '#0f172a',
            margin: '0 0 0.35rem 0',
            textTransform: 'uppercase'
          }}>
            ACTUALIZACIÓN DE STOCK EN TIEMPO REAL
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0, fontWeight: 500 }}>
            Consulta disponibilidad y precios de distribución
          </p>
        </section>

        {/* BARRA DE CONTROLES: CATEGORÍAS + BUSCADOR EXACTO */}
        <section style={{ marginBottom: '0.5rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}>
            {/* Botón Selector de Categoría */}
            <div ref={categoryMenuRef} style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                style={{
                  background: '#ffffff',
                  color: selectedCategory !== 'Mostrar todas' ? '#2563eb' : '#0f172a',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '0.65rem 1.1rem',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  minWidth: '170px',
                  justifyContent: 'space-between'
                }}
              >
                <span>{selectedCategory === 'Mostrar todas' ? 'CATEGORÍAS ▾' : `${selectedCategory.toUpperCase()} ▾`}</span>
              </button>

              {/* Menú Flotante de Categorías */}
              {showCategoryMenu && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '0.4rem',
                  background: '#ffffff',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                  zIndex: 60,
                  width: '260px',
                  maxHeight: '360px',
                  overflowY: 'auto'
                }}>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowCategoryMenu(false);
                      }}
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.7rem 1.1rem',
                        fontSize: '0.85rem',
                        fontWeight: selectedCategory === cat ? 800 : 500,
                        color: selectedCategory === cat ? '#2563eb' : '#334155',
                        background: selectedCategory === cat ? '#eff6ff' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        borderBottom: '1px solid #f1f5f9'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input de Búsqueda Exacta con botón X y lupa */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '10px',
              padding: '0 0.85rem',
              width: '100%',
              maxWidth: '420px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
            }}>
              <input
                type="text"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  padding: '0.7rem 0',
                  fontSize: '0.92rem',
                  width: '100%',
                  color: '#0f172a'
                }}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0 0.4rem'
                  }}
                  title="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
              <span style={{ color: '#0284c7', fontSize: '1.05rem', paddingLeft: '0.35rem' }}>🔍</span>
            </div>

            {/* Selector de modo de vista (Cuadrícula vs Tabla) */}
            <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title="Vista Cuadrícula con Fotos Grandes"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: viewMode === 'grid' ? '#10b981' : '#f1f5f9',
                  color: viewMode === 'grid' ? '#ffffff' : '#64748b',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: viewMode === 'grid' ? '0 2px 8px rgba(16, 185, 129, 0.35)' : 'none',
                  transition: 'all 0.15s'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                title="Vista Lista de Precios"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: viewMode === 'table' ? '#10b981' : '#f1f5f9',
                  color: viewMode === 'table' ? '#ffffff' : '#64748b',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: viewMode === 'table' ? '0 2px 8px rgba(16, 185, 129, 0.35)' : 'none',
                  transition: 'all 0.15s'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="4" cy="6" r="2" />
                  <circle cx="4" cy="12" r="2" />
                  <circle cx="4" cy="18" r="2" />
                  <rect x="9" y="5" width="12" height="2" rx="1" />
                  <rect x="9" y="11" width="12" height="2" rx="1" />
                  <rect x="9" y="17" width="12" height="2" rx="1" />
                </svg>
              </button>
            </div>
          </div>

          {/* Subtítulo dinámico con contador exacto de productos y páginas */}
          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', marginTop: '0.65rem', marginBottom: '1.5rem', fontWeight: 600 }}>
            {products.length > 0 ? (
              <span>
                Mostrando {startIndex + 1}–{Math.min(endIndex, products.length)} de {products.length} productos
                {totalPages > 1 && (
                  <span style={{ color: '#ef4444', marginLeft: '0.5rem', fontWeight: 800 }}>
                    • Página {validCurrentPage} de {totalPages}
                  </span>
                )}
              </span>
            ) : (
              <span>0 productos encontrados</span>
            )}
          </div>
        </section>

        {/* Notificación de Error */}
        {error && (
          <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem', fontWeight: 600 }}>
            ⚠️ Error: {error}
          </div>
        )}

        {/* CONTENIDO DEL CATÁLOGO */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b', fontSize: '1.1rem' }}>
            ⚡ Actualizando catálogo en tiempo real...
          </div>
        ) : products.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3.5rem 2rem',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              No se encontraron productos para esta búsqueda.
            </p>
            <p style={{ color: '#64748b', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Prueba cambiando la categoría o limpiando el texto del buscador.
            </p>
          </div>
        ) : viewMode === 'table' ? (
          /* VISTA TABLA EN TIEMPO REAL (CON FOTOS MEJORADAS) */
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{
                  borderBottom: '1px solid #e2e8f0',
                  color: '#475569',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  <th style={{ padding: '1rem 1.25rem' }}>PRODUCTO</th>
                  <th style={{ padding: '1rem', textAlign: 'center', width: '90px' }}>STOCK</th>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'right', width: '130px' }}>PRECIO</th>
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'center', width: '120px' }}>PEDIR</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((p) => {
                  const images = Array.isArray(p.images) && p.images.length > 0 ? p.images : (p.imageUrl ? [p.imageUrl] : []);
                  const thumb = images[0] || '';
                  const isAdded = addedId === p.id;
                  const isConsultar = parseFloat(p.price) === 0;
                  const stockDisplay = p.stock ? (String(p.stock).startsWith('+') ? `>${p.stock.slice(1)}` : p.stock) : '>5';
                  const isOferta = (p.name && p.name.toUpperCase().includes('OFERTA')) || (p.description && p.description.toUpperCase().includes('OFERTA'));

                  return (
                    <tr
                      key={p.id}
                      onClick={() => openProductModal(p)}
                      style={{
                        borderBottom: '1px solid #f1f5f9',
                        cursor: 'pointer',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      {/* Columna Producto con foto grande de 64px */}
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '8px',
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            overflow: 'hidden',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '3px'
                          }}>
                            {thumb ? (
                              <img src={thumb} alt={p.name} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            ) : (
                              <span style={{ fontSize: '1.4rem', color: '#94a3b8' }}>🖥️</span>
                            )}
                          </div>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                              <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.9rem' }}>
                                {p.name.toUpperCase()}
                              </span>
                              {isOferta && (
                                <span style={{
                                  background: '#fee2e2',
                                  color: '#dc2626',
                                  border: '1px solid #fca5a5',
                                  padding: '0.1rem 0.45rem',
                                  borderRadius: '4px',
                                  fontSize: '0.7rem',
                                  fontWeight: 900
                                }}>
                                  🔥 OFERTA
                                </span>
                              )}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                              <span style={{ color: '#f59e0b', fontSize: '0.8rem' }}>★★★★☆</span>
                              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>id: {p.id}</span>
                              {p.category && (
                                <span style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 700, marginLeft: '0.4rem' }}>
                                  • {p.category}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Columna Stock con verde */}
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>
                        <span style={{
                          background: '#ecfdf5',
                          border: '1px solid #a7f3d0',
                          color: '#047857',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '999px',
                          fontSize: '0.8rem',
                          fontWeight: 800
                        }}>
                          {stockDisplay}
                        </span>
                      </td>

                      {/* Columna Precio en Rojo */}
                      <td style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>
                        {isConsultar ? (
                          <span style={{
                            background: '#fff7ed',
                            border: '1px solid #fed7aa',
                            color: '#ea580c',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 800
                          }}>
                            CONSULTAR
                          </span>
                        ) : (
                          <span style={{
                            color: '#ef4444',
                            fontSize: '1.1rem',
                            fontWeight: 900
                          }}>
                            S/ {parseFloat(p.price).toFixed(0)}
                          </span>
                        )}
                      </td>

                      {/* Columna Acción / Pedir */}
                      <td style={{ padding: '0.85rem 1.25rem', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={(e) => handleAddToCart(p, thumb, e)}
                          title="Agregar al Carrito"
                          style={{
                            background: isAdded ? '#10b981' : '#ef4444',
                            color: '#ffffff',
                            border: 'none',
                            padding: '0.5rem 0.95rem',
                            borderRadius: '8px',
                            fontWeight: 800,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            boxShadow: '0 2px 4px rgba(239, 68, 68, 0.2)'
                          }}
                        >
                          {isAdded ? '✓ Listo' : '🛒 Agregar'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          /* VISTA EN CUADRÍCULA CON FOTOS GRANDES (IDÉNTICO A IMAGEN 2) */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {currentProducts.map((p) => {
              const images = Array.isArray(p.images) && p.images.length > 0 ? p.images : (p.imageUrl ? [p.imageUrl] : []);
              const thumb = images[0] || '';
              const isAdded = addedId === p.id;
              const isConsultar = parseFloat(p.price) === 0;
              const stockDisplay = p.stock ? (String(p.stock).startsWith('+') ? `>${p.stock.slice(1)}` : p.stock) : '>5';
              const isOferta = (p.name && p.name.toUpperCase().includes('OFERTA')) || (p.description && p.description.toUpperCase().includes('OFERTA'));

              return (
                <div
                  key={p.id}
                  onClick={() => openProductModal(p)}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: isOferta ? '2px solid #f87171' : '1px solid #e2e8f0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isOferta ? '0 6px 20px rgba(239, 68, 68, 0.12)' : '0 4px 14px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = isOferta ? '0 12px 28px rgba(239, 68, 68, 0.2)' : '0 10px 24px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = isOferta ? '0 6px 20px rgba(239, 68, 68, 0.12)' : '0 4px 14px rgba(0,0,0,0.03)';
                  }}
                >
                  {/* Contenedor de Foto Grande (como en Imagen 2) */}
                  <div style={{
                    width: '100%',
                    height: '260px',
                    background: '#ffffff',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem'
                  }}>
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '2rem' }}>
                        🖥️
                      </div>
                    )}

                    {/* Badge de OFERTA en la esquina superior izquierda si corresponde */}
                    {isOferta && (
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
                        color: '#ffffff',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.74rem',
                        fontWeight: 900,
                        letterSpacing: '0.5px',
                        boxShadow: '0 2px 8px rgba(239, 68, 68, 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        🔥 OFERTA
                      </span>
                    )}

                    {/* Badge de Stock Verde en la esquina superior derecha */}
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: '#10b981',
                      color: '#ffffff',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '6px',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      letterSpacing: '0.3px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      Stock: {stockDisplay}
                    </span>
                  </div>

                  {/* Cuerpo del Card */}
                  <div style={{
                    padding: '0.85rem 1.25rem 1.25rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}>
                    {/* Título en Mayúsculas */}
                    <h3 style={{
                      margin: '0 0 0.5rem 0',
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      color: '#1e293b',
                      lineHeight: '1.35',
                      minHeight: '2.5rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textTransform: 'uppercase'
                    }}>
                      {p.name.toUpperCase()}
                    </h3>

                    {/* Estrellas de Calificación + ID */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginBottom: '0.65rem'
                    }}>
                      <span style={{ color: '#f59e0b', fontSize: '0.85rem', letterSpacing: '1px' }}>★★★★☆</span>
                      <span style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>id: {p.id}</span>
                    </div>

                    {/* Precio en ROJO Vibrante */}
                    <div style={{
                      fontSize: '1.45rem',
                      fontWeight: 900,
                      color: '#ef4444',
                      marginBottom: '0.85rem'
                    }}>
                      {isConsultar ? (
                        <span style={{ fontSize: '1.1rem', color: '#ea580c' }}>CONSULTAR</span>
                      ) : (
                        `S/ ${parseFloat(p.price).toFixed(0)}`
                      )}
                    </div>

                    {/* Botón Rojo Ancho Completo: 🛒 Agregar */}
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(p, thumb, e)}
                      style={{
                        width: '100%',
                        background: isAdded ? '#10b981' : '#ef4444',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.7rem 1rem',
                        borderRadius: '8px',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.45rem',
                        transition: 'background 0.15s, transform 0.1s',
                        boxShadow: '0 2px 6px rgba(239, 68, 68, 0.25)'
                      }}
                    >
                      {isAdded ? '✓ ¡Agregado!' : '🛒 Agregar'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* COMPAGINACIÓN: 12 ARTÍCULOS POR PÁGINA (PÁGINA 1, 2, 3...) */}
        {!loading && totalPages > 1 && (
          <nav aria-label="Paginación del catálogo" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            gap: '0.85rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              flexWrap: 'wrap',
              background: '#ffffff',
              padding: '0.5rem 0.75rem',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
            }}>
              {/* Botón Anterior */}
              <button
                type="button"
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                title="Página anterior"
                style={{
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  background: validCurrentPage === 1 ? '#f8fafc' : '#ffffff',
                  color: validCurrentPage === 1 ? '#94a3b8' : '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: validCurrentPage === 1 ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'all 0.15s'
                }}
              >
                ← Anterior
              </button>

              {/* Botones numéricos de página */}
              {getPageNumbers(validCurrentPage, totalPages).map((p, idx) => {
                if (p === '...') {
                  return (
                    <span
                      key={`dots-${idx}`}
                      style={{
                        padding: '0 0.35rem',
                        color: '#94a3b8',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        userSelect: 'none'
                      }}
                    >
                      •••
                    </span>
                  );
                }

                const isActive = p === validCurrentPage;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePageChange(p)}
                    title={`Ir a la página ${p}`}
                    style={{
                      minWidth: '38px',
                      height: '38px',
                      padding: '0 0.5rem',
                      borderRadius: '8px',
                      border: isActive ? 'none' : '1px solid #e2e8f0',
                      background: isActive ? '#ef4444' : '#ffffff',
                      color: isActive ? '#ffffff' : '#1e293b',
                      fontWeight: 900,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isActive ? '0 2px 8px rgba(239, 68, 68, 0.35)' : 'none',
                      transition: 'all 0.15s'
                    }}
                  >
                    {p}
                  </button>
                );
              })}

              {/* Botón Siguiente */}
              <button
                type="button"
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                title="Página siguiente"
                style={{
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  background: validCurrentPage === totalPages ? '#f8fafc' : '#ffffff',
                  color: validCurrentPage === totalPages ? '#94a3b8' : '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: validCurrentPage === totalPages ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'all 0.15s'
                }}
              >
                Siguiente →
              </button>
            </div>

            <div style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 600 }}>
              Página <strong style={{ color: '#0f172a' }}>{validCurrentPage}</strong> de <strong style={{ color: '#0f172a' }}>{totalPages}</strong> • 12 artículos por página
            </div>
          </nav>
        )}

        {/* MODAL DE DETALLE DE PRODUCTO (GALERÍA DE HASTA 4 FOTOS Y PEDIDO) */}
        {selectedProduct && (
          <div
            onClick={closeProductModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(15, 23, 42, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem',
              zIndex: 100,
              backdropFilter: 'blur(3px)'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                maxWidth: '750px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <button
                onClick={closeProductModal}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#475569',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>

              {/* Columna Izquierda: Galería de Imágenes */}
              <div style={{ background: '#f8fafc', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                {(() => {
                  const modalImages = Array.isArray(selectedProduct.images) && selectedProduct.images.length > 0
                    ? selectedProduct.images
                    : (selectedProduct.imageUrl ? [selectedProduct.imageUrl] : []);
                  const curModalImg = modalImages[activeModalImageIndex] || modalImages[0] || '';

                  return (
                    <>
                      <div style={{ width: '100%', height: '280px', borderRadius: '12px', overflow: 'hidden', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {curModalImg ? (
                          <img src={curModalImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        ) : (
                          <span style={{ fontSize: '2.5rem', color: '#94a3b8' }}>🖥️</span>
                        )}
                      </div>

                      {modalImages.length > 1 && (
                        <div style={{ display: 'flex', gap: '8px', marginTop: '1rem', justifyContent: 'center' }}>
                          {modalImages.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveModalImageIndex(idx)}
                              style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '8px',
                                border: activeModalImageIndex === idx ? '2px solid #2563eb' : '1px solid #cbd5e1',
                                overflow: 'hidden',
                                padding: 0,
                                cursor: 'pointer',
                                background: '#ffffff'
                              }}
                            >
                              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Columna Derecha: Información y Acciones */}
              <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  background: '#eff6ff',
                  color: '#1d4ed8',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  width: 'fit-content',
                  marginBottom: '0.75rem'
                }}>
                  {selectedProduct.category || 'General'}
                </span>

                <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0f172a', margin: '0 0 0.75rem 0', lineHeight: '1.3' }}>
                  {selectedProduct.name.toUpperCase()}
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#16a34a' }}>
                    S/ {parseFloat(selectedProduct.price).toFixed(2)}
                  </span>
                  <span style={{
                    background: '#f1f5f9',
                    border: '1px solid #cbd5e1',
                    color: '#334155',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: 700
                  }}>
                    Stock: {selectedProduct.stock || '+5'}
                  </span>
                </div>

                {selectedProduct.description && (
                  <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Descripción / Especificaciones
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#334155', lineHeight: '1.5' }}>
                      {selectedProduct.description}
                    </p>
                  </div>
                )}

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={(e) => {
                      const curImg = (Array.isArray(selectedProduct.images) && selectedProduct.images[0]) || selectedProduct.imageUrl;
                      handleAddToCart(selectedProduct, curImg, e);
                    }}
                    style={{
                      background: addedId === selectedProduct.id ? '#059669' : '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.85rem',
                      borderRadius: '10px',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {addedId === selectedProduct.id ? '✓ ¡Agregado al Carrito!' : '🛒 Agregar al Carrito'}
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?phone=51999999999&text=${encodeURIComponent(`Hola TECNOSISTEMAS MDOS, me interesa el producto: ${selectedProduct.name} (Precio: S/ ${selectedProduct.price}). ¿Tienen disponibilidad inmediata?`)}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: '#16a34a',
                      color: '#ffffff',
                      textAlign: 'center',
                      padding: '0.85rem',
                      borderRadius: '10px',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    📲 Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer con el botón de Acceso discreto */}
      <footer style={{
        background: '#0f172a',
        borderTop: '1px solid #1e293b',
        color: '#94a3b8',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        fontSize: '0.875rem'
      }}>
        <p style={{ margin: '0 0 0.5rem 0', fontWeight: 700, color: '#f8fafc' }}>
          TECNOSISTEMAS MDOS
        </p>
        <p style={{ margin: '0 0 1.25rem 0' }}>
          Venta de Computadoras • Reparación, Mantenimiento y Programación de Computadoras
        </p>
        <div>
          <a
            href="/admin"
            title="Administración"
            style={{
              textDecoration: 'none',
              color: '#334155',
              fontSize: '0.75rem',
              transition: 'color 0.2s',
              userSelect: 'none'
            }}
          >
            🔒 Acceso
          </a>
        </div>
      </footer>
    </>
  );
}
