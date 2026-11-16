import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';
import { CATEGORIES } from '../lib/categories';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filtros interactivos
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Mostrar todas');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [viewMode, setViewMode] = useState('table'); // 'table' (por defecto como en las fotos) o 'grid'

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
    fetchProducts();
  }, [selectedCategory, search]);

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
            <div style={{ position: 'relative' }}>
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

            {/* Selector de modo de vista (Tabla vs Cuadrícula) */}
            <div style={{ display: 'flex', gap: '0.25rem', background: '#f1f5f9', padding: '0.25rem', borderRadius: '8px' }}>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                title="Vista Lista de Distribución"
                style={{
                  background: viewMode === 'table' ? '#ffffff' : 'transparent',
                  color: viewMode === 'table' ? '#0f172a' : '#64748b',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.45rem 0.65rem',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  boxShadow: viewMode === 'table' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                📋 Lista
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title="Vista Cuadrícula con Fotos"
                style={{
                  background: viewMode === 'grid' ? '#ffffff' : 'transparent',
                  color: viewMode === 'grid' ? '#0f172a' : '#64748b',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.45rem 0.65rem',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  boxShadow: viewMode === 'grid' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                🔲 Cuadrícula
              </button>
            </div>
          </div>

          {/* Subtítulo dinámico con contador exacto de productos */}
          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem', marginTop: '0.65rem', marginBottom: '1.5rem' }}>
            {selectedCategory !== 'Mostrar todas' || search.trim() ? (
              <span>Mostrando {products.length} de {totalCount || products.length} productos</span>
            ) : (
              <span>Mostrando {products.length} productos</span>
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
          /* VISTA TABLA EN TIEMPO REAL (COMO EN LAS IMÁGENES 1, 2 Y 3) */
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
                  <th style={{ padding: '1rem 1.25rem', textAlign: 'center', width: '110px' }}>PEDIR</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => {
                  const images = Array.isArray(p.images) && p.images.length > 0 ? p.images : (p.imageUrl ? [p.imageUrl] : []);
                  const thumb = images[0] || '';
                  const isAdded = addedId === p.id;
                  const isConsultar = parseFloat(p.price) === 0;

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
                      {/* Columna Producto */}
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                          <div style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '6px',
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            overflow: 'hidden',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {thumb ? (
                              <img src={thumb} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                              <span style={{ fontSize: '1rem', color: '#94a3b8' }}>🖥️</span>
                            )}
                          </div>
                          <div>
                            <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.88rem', display: 'block' }}>
                              {p.name.toUpperCase()}
                            </span>
                            {p.category && (
                              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                {p.category}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Columna Stock */}
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>
                        <span style={{
                          background: '#ffffff',
                          border: '1px solid #cbd5e1',
                          color: '#334155',
                          padding: '0.2rem 0.65rem',
                          borderRadius: '999px',
                          fontSize: '0.82rem',
                          fontWeight: 700
                        }}>
                          {p.stock || '+5'}
                        </span>
                      </td>

                      {/* Columna Precio */}
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
                            background: '#fffaf5',
                            border: '1px solid #ffedd5',
                            color: '#0f172a',
                            padding: '0.35rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.88rem',
                            fontWeight: 800
                          }}>
                            S/{parseFloat(p.price).toFixed(0)}
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
                            background: isAdded ? '#059669' : '#0f172a',
                            color: '#ffffff',
                            border: 'none',
                            padding: '0.45rem 0.85rem',
                            borderRadius: '8px',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem'
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
          /* VISTA EN CUADRÍCULA (CON FOTOS GRANDES) */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.75rem'
          }}>
            {products.map((p) => {
              const images = Array.isArray(p.images) && p.images.length > 0 ? p.images : (p.imageUrl ? [p.imageUrl] : []);
              const thumb = images[0] || '';
              const isAdded = addedId === p.id;

              return (
                <div
                  key={p.id}
                  onClick={() => openProductModal(p)}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    transition: 'transform 0.15s, box-shadow 0.15s'
                  }}
                >
                  <div style={{ width: '100%', height: '210px', background: '#f8fafc', position: 'relative' }}>
                    {thumb ? (
                      <img src={thumb} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                        🖥️ Sin imagen
                      </div>
                    )}
                    <span style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      Stock: {p.stock || '+5'}
                    </span>
                  </div>

                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      {p.category || 'Otros'}
                    </span>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: 800, color: '#0f172a', lineHeight: '1.3' }}>
                      {p.name.toUpperCase()}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                      <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#16a34a' }}>
                        S/ {parseFloat(p.price).toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(p, thumb, e)}
                        style={{
                          background: isAdded ? '#059669' : '#0f172a',
                          color: '#ffffff',
                          border: 'none',
                          padding: '0.55rem 0.95rem',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          cursor: 'pointer'
                        }}
                      >
                        {isAdded ? '✓ ¡Agregado!' : '🛒 Agregar'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
                  {selectedProduct.category || 'Otros'}
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
