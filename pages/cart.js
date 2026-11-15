import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';

export default function CartPage() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    notes: ''
  });

  const handleOrder = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          total,
          customerName: customer.name,
          customerPhone: customer.phone,
          customerNotes: customer.notes
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al procesar el pedido');

      // Crear mensaje para enviar directo a WhatsApp Web / App
      let message = `🛒 *Nuevo Pedido - TECNOSISTEMAS MDOS*\n`;
      message += `*Orden #:* ${data.orderId}\n`;
      if (customer.name) message += `*Cliente:* ${customer.name}\n`;
      if (customer.phone) message += `*Teléfono:* ${customer.phone}\n`;
      message += `*Total:* $${total.toFixed(2)}\n\n`;
      message += `*Detalle:*\n`;
      items.forEach((item) => {
        message += `• ${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`;
      });
      if (customer.notes) message += `\n*Notas:* ${customer.notes}\n`;

      const targetPhone = data.whatsappNumber || '';
      const waUrl = targetPhone
        ? `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`
        : `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

      // Abrir WhatsApp en pestaña nueva
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank');
      }

      setOrderId(data.orderId);
      setOrderCompleted(true);
      clearCart();
    } catch (err) {
      console.error(err);
      alert('Error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Mi Carrito | TECNOSISTEMAS MDOS</title>
      </Head>
      <Header />

      <main style={{ maxWidth: '850px', margin: '2rem auto', padding: '0 1.5rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 1.5rem 0' }}>
          🛒 Tu Carrito - TECNOSISTEMAS MDOS
        </h1>

        {orderCompleted ? (
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #dcfce7',
            padding: '3rem 2rem',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ fontSize: '1.6rem', color: '#16a34a', margin: '0 0 0.5rem 0' }}>
              ¡Pedido Registrado con Éxito!
            </h2>
            <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0 0 1.5rem 0' }}>
              Tu orden <strong>#{orderId}</strong> ha sido guardada y transferida a WhatsApp.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/" style={{
                background: '#16a34a',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 700
              }}>
                Volver al Catálogo
              </Link>
            </div>
          </div>
        ) : items.length === 0 ? (
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '3.5rem 2rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛍️</div>
            <h2 style={{ fontSize: '1.35rem', color: '#374151', margin: '0 0 0.5rem 0' }}>Tu carrito está vacío</h2>
            <p style={{ color: '#6b7280', margin: '0 0 1.5rem 0' }}>
              Aún no has agregado ningún producto a tu lista.
            </p>
            <Link href="/" style={{
              background: '#111827',
              color: '#ffffff',
              textDecoration: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600
            }}>
              Ver Productos
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {/* Lista de productos */}
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              padding: '1.25rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
            }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    borderBottom: '1px solid #f3f4f6',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '220px' }}>
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    ) : (
                      <div style={{ width: '64px', height: '64px', background: '#f3f4f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '0.75rem' }}>
                        Sin foto
                      </div>
                    )}
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1rem', color: '#111827' }}>{item.name}</h4>
                      <p style={{ margin: '0.25rem 0 0 0', color: '#16a34a', fontWeight: 700 }}>
                        ${parseFloat(item.price).toFixed(2)} c/u
                      </p>
                    </div>
                  </div>

                  {/* Controles de cantidad */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        border: '1px solid #d1d5db',
                        background: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 700
                      }}
                    >
                      -
                    </button>
                    <span style={{ minWidth: '24px', textAlign: 'center', fontWeight: 600 }}>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        border: '1px solid #d1d5db',
                        background: '#ffffff',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 700
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div style={{ textAlign: 'right', minWidth: '90px' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#111827' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#dc2626',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        padding: 0,
                        marginTop: '0.25rem'
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem' }}>
                <button
                  type="button"
                  onClick={clearCart}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#6b7280',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Vaciar carrito
                </button>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>Total a pagar:</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#16a34a' }}>
                    ${total.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Datos para WhatsApp */}
            <form onSubmit={handleOrder} style={{
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
            }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 1rem 0' }}>
                📋 Datos para tu Pedido
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +51 987654321"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Notas o Dirección de Entrega (Opcional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Detalles de entrega, color preferido, etc."
                  value={customer.notes}
                  onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.95rem', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.9rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)'
                }}
              >
                <span>💬</span>
                {submitting ? 'Procesando pedido...' : `Completar Pedido por WhatsApp ($${total.toFixed(2)})`}
              </button>
            </form>
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
        fontSize: '0.875rem',
        marginTop: '3rem'
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
