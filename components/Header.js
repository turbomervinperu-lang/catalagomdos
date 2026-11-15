import Link from 'next/link';
import { useCart } from './CartContext';

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header style={{
      background: '#ffffff',
      borderBottom: '1px solid #eaeaea',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#111', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.6rem' }}>🛍️</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>Catálogo MDoS</div>
            <div style={{ fontSize: '0.75rem', color: '#666', lineHeight: 1 }}>Tienda y Pedidos WhatsApp</div>
          </div>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/" style={{
            textDecoration: 'none',
            color: '#333',
            fontSize: '0.9rem',
            fontWeight: 500,
            padding: '0.5rem 0.85rem',
            borderRadius: '6px'
          }}>
            Catálogo
          </Link>

          <Link href="/admin" style={{
            textDecoration: 'none',
            color: '#4f46e5',
            background: '#eef2ff',
            fontSize: '0.85rem',
            fontWeight: 600,
            padding: '0.5rem 0.85rem',
            borderRadius: '6px',
            border: '1px solid #e0e7ff',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            ⚙️ Panel Admin
          </Link>

          <Link href="/cart" style={{
            textDecoration: 'none',
            color: '#ffffff',
            background: '#16a34a',
            fontSize: '0.9rem',
            fontWeight: 600,
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 2px 4px rgba(22, 163, 74, 0.25)'
          }}>
            <span>🛒 Carrito</span>
            {totalCount > 0 && (
              <span style={{
                background: '#ffffff',
                color: '#16a34a',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.1rem 0.45rem',
                borderRadius: '999px'
              }}>
                {totalCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
