import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';

// Componente para tarjeta de producto con soporte de hasta 4 imágenes
function ProductCard({ product, onAddToCart, isAdded }) {
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : (product.imageUrl ? [product.imageUrl] : []);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = images[activeImageIndex] || product.imageUrl || '';

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
        transition: 'transform 0.15s, box-shadow 0.15s'
      }}
    >
      {/* Imagen Principal */}
      <div style={{ width: '100%', height: '230px', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
        {currentImage ? (
          <img
            src={currentImage}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
            🖥️ Sin imagen
          </div>
        )}
      </div>

      {/* Miniaturas si tiene múltiples imágenes (hasta 4) */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '6px', padding: '0.5rem 0.75rem', background: '#f8fafc', borderBottom: '1px solid #f1f5f9', overflowX: 'auto' }}>
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              style={{
                padding: 0,
                border: activeImageIndex === idx ? '2px solid #2563eb' : '1px solid #cbd5e1',
                borderRadius: '6px',
                cursor: 'pointer',
                background: 'none',
                width: '38px',
                height: '38px',
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}

      {/* Datos del Producto */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
          {product.name}
        </h3>
        {product.description && (
          <p style={{ color: '#64748b', fontSize: '0.875rem', margin: '0 0 1rem 0', flex: 1, lineHeight: '1.45' }}>
            {product.description}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, display: 'block' }}>Precio:</span>
            <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#16a34a' }}>
              S/ {parseFloat(product.price).toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product, currentImage)}
            style={{
              background: isAdded ? '#059669' : '#0f172a',
              color: '#ffffff',
              border: 'none',
              padding: '0.65rem 1.15rem',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              transition: 'background 0.2s'
            }}
          >
            {isAdded ? '✓ ¡Agregado!' : '🛒 Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('id_desc');
  const [addedId, setAddedId] = useState(null);

  const { addItem } = useCart();

  const fetchProducts = () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search.trim()) params.set('search', search.trim());
    if (sortBy) params.set('sortBy', sortBy);

    fetch(`/api/products?${params.toString()}`)
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
  }, [sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts();
  };

  const handleAddToCart = (product, chosenImage) => {
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

  return (
    <>
      <Head>
        <title>TECNOSISTEMAS MDOS | Catálogo Oficial en Soles (S/)</title>
        <meta name="description" content="Venta de computadoras, repuestos, reparación y mantenimiento en Soles (S/) en TECNOSISTEMAS MDOS." />
      </Head>

      <Header />

      <main style={{ maxWidth: '1200px', margin: '1.5rem auto 3rem auto', padding: '0 1.5rem' }}>
        {/* Banner Principal */}
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
                Catálogo de Productos y Servicios (Soles S/)
              </h1>
              <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>
                Venta de Computadoras • Mantenimiento • Reparación • Precios en Soles Peruanos
              </p>
            </div>

            {/* Búsqueda y Ordenación */}
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', minWidth: '320px', flex: '1', maxWidth: '520px', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Buscar componente, laptop, servicio..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #334155',
                  background: '#1e293b',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid #334155',
                  background: '#1e293b',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="id_desc">Más recientes</option>
                <option value="price_asc">Menor precio (S/)</option>
                <option value="price_desc">Mayor precio (S/)</option>
                <option value="name_asc">Nombre (A - Z)</option>
              </select>
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
            </form>
          </div>
        </section>

        {/* Notificaciones de error */}
        {error && (
          <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem', fontWeight: 600 }}>
            ⚠️ Error: {error}
          </div>
        )}

        {/* Listado de Productos */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b', fontSize: '1.15rem' }}>
            ⚡ Cargando catálogo de TECNOSISTEMAS MDOS...
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
              Prueba con otro término o revisa el catálogo completo.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '1.75rem'
          }}>
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={handleAddToCart}
                isAdded={addedId === p.id}
              />
            ))}
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
