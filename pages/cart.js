import React from 'react';
import { useCart } from '../components/CartContext';
import { useRouter } from 'next/router';

export default function CartPage() {
  const { items, total, removeItem, clearCart } = useCart();
  const router = useRouter();

  const handleOrder = async () => {
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, total }),
      });
      const data = await res.json();
      if (data.ok) {
        alert('Pedido enviado!');
        clearCart();
        router.push('/');
      } else {
        alert('Error al enviar pedido: ' + data.error);
      }
    } catch (e) {
      console.error(e);
      alert('Error de red');
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-2xl font-bold">Carrito vacío</h2>
        <p className="mt-4">Añade productos desde la página principal.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Tu Carrito</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center space-x-3">
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover" />
              )}
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 hover:underline"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={handleOrder}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Realizar Pedido (WhatsApp)
        </button>
      </div>
    </div>
  );
}

