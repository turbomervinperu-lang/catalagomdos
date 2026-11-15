import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [addedId, setAddedId] = useState(null);

  const { addItem } = useCart();

  const fetchProducts = (searchTerm = '') => {
    setLoading(true);
    fetch(`/api/products?search=${encodeURIComponent(searchTerm)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(search);
  };

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      imageUrl: product.imageUrl
    });
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>TECNOSISTEMAS MDOS | Catálogo Oficial y Pedidos</title>
        <meta name="description" content="Venta de computadoras, reparación, mantenimiento y programación de computadoras en TECNOSISTEMAS MDOS." />
      </Head>

      <Header />

      <main style={{ maxWidth: '1200px', margin: '1.5rem auto 3rem auto', padding: '0 1.5rem' }}>
        {/* Banner Principal Tecnológico */}
        <section style={{
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          position: 'relative',
          background: '#090d16',
          border: '1px solid #1e293b'
        }}>
          <div style={{
            width: '100%',
            maxHeight: '380px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <img
              src="/banner.jpg"
              alt="Banner TECNOSISTEMAS MDOS"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '380px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          <div style={{
            padding: '1.5rem 2rem',
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 15, 30, 1) 100%)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <div>
              <h1 style={{
                color: '#ffffff',
                fontSize: '1.65rem',
                fontWeight: 900,
                margin: '0 0 0.35rem 0',
                letterSpacing: '-0.5px'
              }}>
                Catálogo de Productos y Servicios
              </h1>
              <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>
                Venta de Computadoras • Mantenimiento • Reparación • Repuestos • Envío directo a WhatsApp
              </p>
            </div>

            {/* Barra de Búsqueda */}
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', minWidth: '320px', flex: '1', maxWidth: '480px' }}>
              <input
                type="text"
                placeholder="Buscar componente, laptop, servicio..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #334155',
                  background: '#1e293b',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Buscar
              </button>
              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    fetchProducts('');
                  }}
                  style={{
                    background: '#334155',
                    color: '#e2e8f0',
                    border: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  ✕
                </button>
              )}
            </form>
          </div>
        </section>

        {/* Notificaciones */}
        {error && (
          <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem', fontWeight: 600 }}>
            ⚠️ Error: {error}
          </div>
        )}

        {/* Cuadrícula de Productos */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b', fontSize: '1.15rem' }}>
            ⚡ Cargando inventario de TECNOSISTEMAS MDOS...
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
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#334155', margin: 0 }}>
              No hay productos que coincidan con la búsqueda.
            </p>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
              Puedes agregar nuevos productos desde el Panel de Administración.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.5rem'
          }}>
            {products.map((p) => {
              const isAdded = addedId === p.id;
              return (
                <div
                  key={p.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{ width: '100%', height: '220px', background: '#f1f5f9', position: 'relative' }}>
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                        🖥️ Sin imagen
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                      {p.name}
                    </h3>
                    {p.description && (
                      <p style={{ color: '#64748b', fontSize: '0.875rem', margin: '0 0 1rem 0', flex: 1, lineHeight: '1.45' }}>
                        {p.description}
                      </p>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#16a34a' }}>
                        ${parseFloat(p.price).toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(p)}
                        style={{
                          background: isAdded ? '#059669' : '#0f172a',
                          color: '#ffffff',
                          border: 'none',
                          padding: '0.65rem 1rem',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          transition: 'background 0.2s'
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
      </main>

      {/* Footer */}
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
