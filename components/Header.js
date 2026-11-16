import Link from 'next/link';
import { useCart } from './CartContext';

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header style={{
      background: 'linear-gradient(90deg, #070d1e 0%, #0f172a 45%, #180d19 75%, #240a0e 100%)',
      borderBottom: '3px solid transparent',
      borderImage: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 30%, #f59e0b 60%, #ef4444 85%, #dc2626 100%) 1',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0.65rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Logo y Nombre de Empresa */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <img
            src="/logo.jpg"
            alt="Logo TECNOSISTEMAS MDOS"
            style={{
              width: '46px',
              height: '46px',
              objectFit: 'cover',
              borderRadius: '10px',
              border: '2px solid #38bdf8',
              boxShadow: '0 0 12px rgba(56, 189, 248, 0.45)'
            }}
          />
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '0.5px', color: '#ffffff' }}>
              TECNOSISTEMAS <span style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900
              }}>MDOS</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.1, letterSpacing: '0.2px' }}>
              Venta de Computadoras • Reparación • Mantenimiento
            </div>
          </div>
        </Link>

        {/* Navegación y Carrito */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <Link href="/" style={{
            textDecoration: 'none',
            color: '#e2e8f0',
            fontSize: '0.9rem',
            fontWeight: 700,
            padding: '0.45rem 0.85rem',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'background 0.2s, color 0.2s'
          }}>
            Catálogo
          </Link>

          <Link href="/cart" style={{
            textDecoration: 'none',
            color: '#ffffff',
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 60%, #b91c1c 100%)',
            border: '1px solid #f87171',
            fontSize: '0.88rem',
            fontWeight: 800,
            padding: '0.45rem 1.1rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            boxShadow: '0 2px 12px rgba(239, 68, 68, 0.45)',
            transition: 'transform 0.15s, box-shadow 0.15s'
          }}>
            <span>🛒 Carrito</span>
            {totalCount > 0 && (
              <span style={{
                background: '#ffffff',
                color: '#dc2626',
                fontSize: '0.75rem',
                fontWeight: 900,
                padding: '0.1rem 0.45rem',
                borderRadius: '999px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
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
