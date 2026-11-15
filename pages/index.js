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
        <title>Catálogo MDoS | Tienda Online</title>
        <meta name="description" content="Catálogo de productos con carrito y pedidos por WhatsApp" />
      </Head>

      <Header />

      <main style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1.5rem' }}>
        {/* Banner / Buscador */}
        <section style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          color: '#ffffff',
          padding: '2.5rem 2rem',
          borderRadius: '16px',
          marginBottom: '2.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>
            Explora Nuestro Catálogo
          </h1>
          <p style={{ color: '#94a3b8', margin: '0 0 1.5rem 0', fontSize: '1.05rem' }}>
            Selecciona tus productos, agrégalos al carrito y envía tu pedido directamente a WhatsApp.
          </p>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', maxWidth: '600px' }}>
            <input
              type="text"
              placeholder="Buscar productos por nombre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                flex: 1,
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                background: '#16a34a',
                color: '#ffffff',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
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
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Limpiar
              </button>
            )}
          </form>
        </section>

        {/* Notificaciones */}
        {error && (
          <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
            ⚠️ Error al cargar productos: {error}
          </div>
        )}

        {/* Listado de Productos */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666', fontSize: '1.1rem' }}>
            Cargando catálogo...
          </div>
        ) : products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', margin: 0 }}>No se encontraron productos disponibles.</p>
            <p style={{ color: '#9ca3af', marginTop: '0.5rem' }}>Puedes añadir productos desde el Panel de Administración.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {products.map((p) => {
              const isAdded = addedId === p.id;
              return (
                <div
                  key={p.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ width: '100%', height: '220px', background: '#f3f4f6', position: 'relative' }}>
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                        Sin imagen
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem', fontWeight: 700, color: '#111827' }}>
                      {p.name}
                    </h3>
                    {p.description && (
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 1rem 0', flex: 1, lineHeight: '1.4' }}>
                        {p.description}
                      </p>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid #f3f4f6' }}>
                      <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#16a34a' }}>
                        ${parseFloat(p.price).toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(p)}
                        style={{
                          background: isAdded ? '#059669' : '#111827',
                          color: '#ffffff',
                          border: 'none',
                          padding: '0.6rem 1rem',
                          borderRadius: '8px',
                          fontWeight: 600,
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
    </>
  );
}
