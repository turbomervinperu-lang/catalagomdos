import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [inputPassword, setInputPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Estados de gestión de productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Formulario nuevo o edición de producto
  const [form, setForm] = useState({
    id: null,
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Cambio de contraseña
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passForm, setPassForm] = useState({ currentPassword: '', newPassword: '' });
  const [passMessage, setPassMessage] = useState(null);
  const [passError, setPassError] = useState(null);
  const [passSubmitting, setPassSubmitting] = useState(false);

  // Verificar sesión en sessionStorage al cargar
  useEffect(() => {
    try {
      const auth = sessionStorage.getItem('admin_auth');
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.warn(e);
    }
    setCheckingAuth(false);
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('Error al obtener productos');
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [isAuthenticated]);

  // Manejo de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', password: inputPassword })
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Contraseña incorrecta');
      }

      sessionStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      setInputPassword('');
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('admin_auth');
    } catch (e) {}
    setIsAuthenticated(false);
  };

  // Manejo de productos
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditClick = (p) => {
    setForm({
      id: p.id,
      name: p.name,
      description: p.description || '',
      price: p.price,
      imageUrl: p.imageUrl || ''
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setForm({ id: null, name: '', description: '', price: '', imageUrl: '' });
    setIsEditing(false);
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const method = isEditing ? 'PUT' : 'POST';
      const res = await fetch('/api/products', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al guardar');

      setMessage(isEditing ? '¡Producto actualizado con éxito!' : '¡Producto creado con éxito!');
      handleCancelEdit();
      fetchProducts();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este producto?')) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al eliminar');
      setMessage('Producto eliminado.');
      fetchProducts();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  // Manejo de cambio de contraseña
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPassSubmitting(true);
    setPassError(null);
    setPassMessage(null);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'change-password',
          currentPassword: passForm.currentPassword,
          newPassword: passForm.newPassword
        })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Error al cambiar contraseña');
      }

      setPassMessage('¡Contraseña cambiada exitosamente!');
      setPassForm({ currentPassword: '', newPassword: '' });
      setTimeout(() => {
        setShowPasswordModal(false);
        setPassMessage(null);
      }, 1800);
    } catch (err) {
      setPassError(err.message);
    } finally {
      setPassSubmitting(false);
    }
  };

  if (checkingAuth) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#fff' }}>
        Verificando acceso...
      </div>
    );
  }

  // Pantalla de bloqueo / Login
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Acceso Administrador | TECNOSISTEMAS MDOS</title>
        </Head>
        <Header />

        <div style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            padding: '2.5rem 2rem',
            width: '100%',
            maxWidth: '420px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 1.25rem auto',
              borderRadius: '16px',
              background: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)'
            }}>
              <span style={{ fontSize: '2rem' }}>🔒</span>
            </div>

            <h1 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0 0 0.4rem 0', color: '#0f172a' }}>
              Panel Administrador
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 1.75rem 0' }}>
              Ingresa la clave de seguridad para administrar productos
            </p>

            {loginError && (
              <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '0.75rem', borderRadius: '8px', fontSize: '0.875rem', marginBottom: '1.25rem', fontWeight: 600 }}>
                ⚠️ {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                  Contraseña de Acceso
                </label>
                <input
                  type="password"
                  required
                  autoFocus
                  placeholder="Introduce la contraseña"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                style={{
                  width: '100%',
                  background: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.85rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                }}
              >
                {loginLoading ? 'Verificando...' : 'Entrar al Panel'}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  // Panel de control autenticado
  return (
    <>
      <Head>
        <title>Panel de Administración | TECNOSISTEMAS MDOS</title>
      </Head>
      <Header />

      <main style={{ maxWidth: '1200px', margin: '2rem auto 4rem auto', padding: '0 1.5rem' }}>
        {/* Cabecera del Panel */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #e2e8f0'
        }}>
          <div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 900, margin: 0, color: '#0f172a' }}>
              ⚙️ Gestión de Inventario
            </h1>
            <p style={{ color: '#64748b', margin: '0.25rem 0 0 0' }}>
              TECNOSISTEMAS MDOS • Catálogo de Computadoras y Servicios
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => setShowPasswordModal(true)}
              style={{
                background: '#f1f5f9',
                color: '#334155',
                border: '1px solid #cbd5e1',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              🔑 Cambiar Contraseña
            </button>
            <button
              onClick={handleLogout}
              style={{
                background: '#fee2e2',
                color: '#dc2626',
                border: '1px solid #fecaca',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>

        {/* Modal / Sección de Cambio de Contraseña */}
        {showPasswordModal && (
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            border: '2px solid #2563eb',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 15px rgba(37, 99, 235, 0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#1e3a8a', fontWeight: 800 }}>
                🔑 Cambiar Contraseña del Administrador
              </h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            {passMessage && (
              <div style={{ background: '#dcfce7', color: '#15803d', padding: '0.65rem', borderRadius: '6px', marginBottom: '1rem', fontWeight: 600 }}>
                ✅ {passMessage}
              </div>
            )}
            {passError && (
              <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '0.65rem', borderRadius: '6px', marginBottom: '1rem', fontWeight: 600 }}>
                ⚠️ {passError}
              </div>
            )}

            <form onSubmit={handleChangePassword} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Contraseña Actual
                </label>
                <input
                  type="password"
                  required
                  placeholder="Ingresa la actual (ej. 1927)"
                  value={passForm.currentPassword}
                  onChange={(e) => setPassForm({ ...passForm, currentPassword: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  required
                  placeholder="Mínimo 3 caracteres"
                  value={passForm.newPassword}
                  onChange={(e) => setPassForm({ ...passForm, newPassword: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                <button
                  type="submit"
                  disabled={passSubmitting}
                  style={{
                    background: '#2563eb',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {passSubmitting ? 'Actualizando...' : 'Guardar Nueva Contraseña'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    border: '1px solid #cbd5e1',
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Notificaciones */}
        {message && (
          <div style={{ background: '#dcfce7', color: '#15803d', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: 600 }}>
            ✅ {message}
          </div>
        )}
        {error && (
          <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: 600 }}>
            ⚠️ {error}
          </div>
        )}

        {/* Formulario de Crear / Editar Producto */}
        <section style={{
          background: '#ffffff',
          padding: '1.75rem',
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          marginBottom: '2.5rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: 0, marginBottom: '1rem', color: isEditing ? '#2563eb' : '#0f172a' }}>
            {isEditing ? `✏️ Modificar Producto #${form.id}` : '➕ Agregar Nuevo Producto / Servicio'}
          </h2>

          <form onSubmit={handleSubmitProduct} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Nombre del Producto / Servicio *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Ej. Disco Sólido SSD 1TB NVMe"
                style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Precio ($ USD) *
              </label>
              <input
                type="number"
                step="0.01"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                placeholder="Ej. 65.00"
                style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                URL de Imagen
              </label>
              <input
                type="url"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Descripción Detallada
              </label>
              <textarea
                name="description"
                rows="3"
                value={form.description}
                onChange={handleChange}
                placeholder="Especificaciones técnicas, velocidad, compatibilidad, garantía..."
                style={{ width: '100%', padding: '0.65rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', resize: 'vertical' }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: isEditing ? '#2563eb' : '#16a34a',
                  color: '#ffffff',
                  padding: '0.75rem 1.75rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
              >
                {submitting ? 'Guardando...' : (isEditing ? 'Guardar Cambios' : 'Crear Producto')}
              </button>

              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    padding: '0.75rem 1.25rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancelar Edición
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Inventario actual */}
        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>
            📦 Inventario en Vivo ({products.length})
          </h2>

          {loading ? (
            <p>Cargando catálogo...</p>
          ) : products.length === 0 ? (
            <p style={{ color: '#64748b' }}>No hay productos en el inventario.</p>
          ) : (
            <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '0.85rem 1rem' }}>ID</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Foto</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Nombre</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Precio</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Descripción</th>
                    <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '0.85rem 1rem', color: '#94a3b8' }}>#{p.id}</td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        {p.imageUrl ? (
                          <img src={p.imageUrl} alt={p.name} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '6px' }} />
                        ) : (
                          <div style={{ width: '48px', height: '48px', background: '#f1f5f9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.75rem' }}>
                            Sin foto
                          </div>
                        )}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#0f172a' }}>{p.name}</td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: '#16a34a' }}>${parseFloat(p.price).toFixed(2)}</td>
                      <td style={{ padding: '0.85rem 1rem', color: '#64748b', maxWidth: '320px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {p.description || '—'}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                          <button
                            onClick={() => handleEditClick(p)}
                            style={{
                              background: '#eff6ff',
                              color: '#1d4ed8',
                              border: '1px solid #bfdbfe',
                              padding: '0.4rem 0.75rem',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontWeight: 700,
                              fontSize: '0.8rem'
                            }}
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDelete(p.id)}
                            style={{
                              background: '#fef2f2',
                              color: '#dc2626',
                              border: '1px solid #fecaca',
                              padding: '0.4rem 0.75rem',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontWeight: 700,
                              fontSize: '0.8rem'
                            }}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
