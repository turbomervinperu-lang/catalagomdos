// pages/index.js
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Catálogo MDoS</title>
        <meta name="description" content="Catálogo de productos" />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Catálogo de Productos</h1>
        {error && <p style={{ color: 'red' }}>Error al cargar productos: {error}</p>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '1rem' }}>
              {(p.imageUrl || p.image) && <img src={p.imageUrl || p.image} alt={p.name} style={{ width: '100%', height: 'auto' }} />}
              <h3>{p.name}</h3>
              <p>{p.price}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}


