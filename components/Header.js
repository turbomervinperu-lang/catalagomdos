import Link from 'next/link';
import { useCart } from './CartContext';

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header style={{
      background: '#0f172a',
      borderBottom: '2px solid #2563eb',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.65rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <img
            src="/logo.jpg"
            alt="Logo TECNOSISTEMAS MDOS"
            style={{
              width: '46px',
              height: '46px',
              objectFit: 'cover',
              borderRadius: '10px',
              border: '2px solid #38bdf8',
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)'
            }}
          />
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '0.5px', color: '#f8fafc' }}>
              TECNOSISTEMAS <span style={{ color: '#38bdf8' }}>MDOS</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1, letterSpacing: '0.2px' }}>
              Venta de Computadoras • Reparación • Mantenimiento
            </div>
          </div>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/" style={{
            textDecoration: 'none',
            color: '#cbd5e1',
            fontSize: '0.9rem',
            fontWeight: 600,
            padding: '0.5rem 0.85rem',
            borderRadius: '6px',
            transition: 'color 0.2s'
          }}>
            Catálogo
          </Link>

          <Link href="/admin" style={{
            textDecoration: 'none',
            color: '#93c5fd',
            background: 'rgba(59, 130, 246, 0.15)',
            fontSize: '0.85rem',
            fontWeight: 600,
            padding: '0.5rem 0.85rem',
            borderRadius: '8px',
            border: '1px solid rgba(147, 197, 253, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            ⚙️ Panel Admin
          </Link>

          <Link href="/cart" style={{
            textDecoration: 'none',
            color: '#ffffff',
            background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
            fontSize: '0.9rem',
            fontWeight: 700,
            padding: '0.5rem 1.1rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 2px 8px rgba(22, 163, 74, 0.4)'
          }}>
            <span>🛒 Carrito</span>
            {totalCount > 0 && (
              <span style={{
                background: '#ffffff',
                color: '#15803d',
                fontSize: '0.75rem',
                fontWeight: 900,
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
