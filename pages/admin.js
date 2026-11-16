import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';

// Función para optimizar y comprimir imágenes en el navegador
async function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1000;
        const maxHeight = 1000;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [inputPassword, setInputPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Inventario y búsqueda avanzada
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Filtros de búsqueda avanzada
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('id_desc');

  // Formulario de Producto (hasta 4 imágenes)
  const [form, setForm] = useState({
    id: null,
    name: '',
    description: '',
    price: '',
    images: [] // array de hasta 4 strings
  });
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loadingSlot, setLoadingSlot] = useState(null);

  // Inputs de archivo para los 4 cuadros
  const slotInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Cambio de contraseña
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passForm, setPassForm] = useState({ currentPassword: '', newPassword: '' });
  const [passMessage, setPassMessage] = useState(null);
  const [passError, setPassError] = useState(null);
  const [passSubmitting, setPassSubmitting] = useState(false);

  // Verificar sesión
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
      const queryParams = new URLSearchParams();
      if (search.trim()) queryParams.set('search', search.trim());
      if (minPrice) queryParams.set('minPrice', minPrice);
      if (maxPrice) queryParams.set('maxPrice', maxPrice);
      if (sortBy) queryParams.set('sortBy', sortBy);

      const res = await fetch(`/api/products?${queryParams.toString()}`);
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
  }, [isAuthenticated, search, minPrice, maxPrice, sortBy]);

  // Login
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

  // Carga de archivo para una casilla específica (0, 1, 2, 3)
  const handleSlotUpload = async (slotIndex, e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setLoadingSlot(slotIndex);
    try {
      const compressed = await compressImageFile(file);
      const newImages = [...form.images];
      newImages[slotIndex] = compressed;
      // Filtrar huecos vacíos para mantener orden continuo
      const cleanImages = newImages.filter(Boolean);
      setForm((prev) => ({ ...prev, images: cleanImages }));
    } catch (err) {
      console.error(err);
      alert('Error procesando la imagen.');
    } finally {
      setLoadingSlot(null);
      if (slotInputRefs[slotIndex].current) {
        slotInputRefs[slotIndex].current.value = '';
      }
    }
  };

  // Reordenar imágenes (mover izquierda o derecha)
  const handleMoveImage = (index, direction) => {
    const newImages = [...form.images];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newImages.length) return;

    const temp = newImages[index];
    newImages[index] = newImages[targetIndex];
    newImages[targetIndex] = temp;
    setForm({ ...form, images: newImages });
  };

  // Marcar como principal (mover a la posición 0)
  const handleMakePrimary = (index) => {
    if (index === 0) return;
    const newImages = [...form.images];
    const [selected] = newImages.splice(index, 1);
    newImages.unshift(selected);
    setForm({ ...form, images: newImages });
  };

  // Eliminar imagen de un cuadro
  const handleRemoveImage = (index) => {
    const newImages = form.images.filter((_, i) => i !== index);
    setForm({ ...form, images: newImages });
  };

  // Edición de producto
  const handleEditClick = (p) => {
    let imgs = [];
    if (Array.isArray(p.images) && p.images.length > 0) {
      imgs = p.images;
    } else if (p.imageUrl) {
      imgs = [p.imageUrl];
    }

    setForm({
      id: p.id,
      name: p.name,
      description: p.description || '',
      price: p.price,
      images: imgs
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setForm({ id: null, name: '', description: '', price: '', images: [] });
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
        body: JSON.stringify({
          ...form,
          imageUrl: form.images[0] || ''
        })
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

  // Cambio de contraseña
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
              Ingresa la contraseña de seguridad para administrar productos
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
                  placeholder="Introduce la contraseña (por defecto: 1927)"
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

  // Panel autenticado
  return (
    <>
      <Head>
        <title>Panel de Administración | TECNOSISTEMAS MDOS</title>
      </Head>
      <Header />

      <main style={{ maxWidth: '1200px', margin: '2rem auto 4rem auto', padding: '0 1.5rem' }}>
        {/* Cabecera */}
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
              TECNOSISTEMAS MDOS • Venta, Reparación y Mantenimiento (Moneda: Soles S/)
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

        {/* Modal Cambio de Contraseña */}
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

        {/* Formulario de Producto */}
        <section style={{
          background: '#ffffff',
          padding: '1.75rem',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
          marginBottom: '2.5rem'
        }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: 0, marginBottom: '1.25rem', color: isEditing ? '#2563eb' : '#0f172a' }}>
            {isEditing ? `✏️ Modificar Producto #${form.id}` : '➕ Agregar Nuevo Producto / Servicio'}
          </h2>

          <form onSubmit={handleSubmitProduct} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: '#334155' }}>
                Nombre del Producto / Servicio *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Ej. Disco Sólido SSD 1TB Kingston NVMe"
                style={{ width: '100%', padding: '0.7rem 0.85rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: '#334155' }}>
                Precio en Soles Peruanos (S/) *
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '10px', fontWeight: 700, color: '#64748b' }}>S/</span>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  required
                  placeholder="0.00"
                  style={{ width: '100%', padding: '0.7rem 0.85rem 0.7rem 2.2rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', fontWeight: 700, color: '#16a34a' }}
                />
              </div>
            </div>

            {/* LOS 4 CUADROS FIJOS DE INSERCIÓN Y REORDENAMIENTO DE IMÁGENES */}
            <div style={{ gridColumn: '1 / -1', background: '#f8fafc', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <label style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a' }}>
                    📸 Cuadros de Imágenes del Producto (4 Casillas)
                  </label>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>
                    Haz clic en cada recuadro para subir la foto correspondiente. <strong>El Cuadro 1 siempre es la Foto Principal</strong>. Usa los botones para moverlas de posición.
                  </p>
                </div>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: form.images.length > 0 ? '#16a34a' : '#64748b',
                  background: '#ffffff',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  border: '1px solid #cbd5e1'
                }}>
                  {form.images.length} de 4 fotos cargadas
                </span>
              </div>

              {/* Grid con los 4 cuadros */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                {[0, 1, 2, 3].map((slotIdx) => {
                  const imageSrc = form.images[slotIdx];
                  const hasImage = Boolean(imageSrc);
                  const isPrimary = slotIdx === 0;
                  const isSlotLoading = loadingSlot === slotIdx;

                  return (
                    <div
                      key={slotIdx}
                      style={{
                        background: '#ffffff',
                        borderRadius: '12px',
                        border: isPrimary ? '2px solid #2563eb' : (hasImage ? '1px solid #cbd5e1' : '2px dashed #94a3b8'),
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: isPrimary ? '0 4px 15px rgba(37, 99, 235, 0.12)' : '0 2px 6px rgba(0,0,0,0.02)',
                        transition: 'border 0.2s, box-shadow 0.2s',
                        position: 'relative'
                      }}
                    >
                      {/* Input file invisible para este cuadro */}
                      <input
                        ref={slotInputRefs[slotIdx]}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleSlotUpload(slotIdx, e)}
                        style={{ display: 'none' }}
                        id={`slot-file-${slotIdx}`}
                      />

                      {/* Encabezado del cuadro */}
                      <div style={{
                        padding: '0.5rem 0.75rem',
                        background: isPrimary ? '#2563eb' : '#f1f5f9',
                        color: isPrimary ? '#ffffff' : '#334155',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span>{isPrimary ? '⭐ CUADRO 1 (PRINCIPAL)' : `CUADRO #${slotIdx + 1}`}</span>
                        {hasImage && (
                          <span style={{ fontSize: '0.7rem', opacity: 0.9 }}>Cargada ✓</span>
                        )}
                      </div>

                      {/* Contenido: Si tiene foto o si está vacío */}
                      {hasImage ? (
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                          <div style={{ width: '100%', height: '170px', background: '#f8fafc', position: 'relative' }}>
                            <img
                              src={imageSrc}
                              alt={`Foto ${slotIdx + 1}`}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                          </div>

                          {/* Herramientas de movimiento y cambio de posición */}
                          <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', background: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
                            {!isPrimary && (
                              <button
                                type="button"
                                onClick={() => handleMakePrimary(slotIdx)}
                                style={{
                                  background: '#eff6ff',
                                  color: '#1d4ed8',
                                  border: '1px solid #bfdbfe',
                                  padding: '0.4rem',
                                  borderRadius: '6px',
                                  fontSize: '0.78rem',
                                  fontWeight: 800,
                                  cursor: 'pointer'
                                }}
                              >
                                ⭐ Hacer Principal
                              </button>
                            )}

                            <div style={{ display: 'flex', gap: '0.35rem' }}>
                              <button
                                type="button"
                                disabled={slotIdx === 0}
                                onClick={() => handleMoveImage(slotIdx, -1)}
                                title="Mover a casilla anterior"
                                style={{
                                  flex: 1,
                                  background: slotIdx === 0 ? '#f1f5f9' : '#ffffff',
                                  color: slotIdx === 0 ? '#cbd5e1' : '#334155',
                                  border: '1px solid #cbd5e1',
                                  padding: '0.35rem',
                                  borderRadius: '6px',
                                  fontSize: '0.8rem',
                                  fontWeight: 700,
                                  cursor: slotIdx === 0 ? 'not-allowed' : 'pointer'
                                }}
                              >
                                ⬅
                              </button>
                              <button
                                type="button"
                                disabled={slotIdx === form.images.length - 1 || slotIdx === 3}
                                onClick={() => handleMoveImage(slotIdx, 1)}
                                title="Mover a casilla siguiente"
                                style={{
                                  flex: 1,
                                  background: (slotIdx === form.images.length - 1 || slotIdx === 3) ? '#f1f5f9' : '#ffffff',
                                  color: (slotIdx === form.images.length - 1 || slotIdx === 3) ? '#cbd5e1' : '#334155',
                                  border: '1px solid #cbd5e1',
                                  padding: '0.35rem',
                                  borderRadius: '6px',
                                  fontSize: '0.8rem',
                                  fontWeight: 700,
                                  cursor: (slotIdx === form.images.length - 1 || slotIdx === 3) ? 'not-allowed' : 'pointer'
                                }}
                              >
                                ➡
                              </button>
                              <label
                                htmlFor={`slot-file-${slotIdx}`}
                                title="Cambiar por otra foto"
                                style={{
                                  background: '#f1f5f9',
                                  color: '#334155',
                                  border: '1px solid #cbd5e1',
                                  padding: '0.35rem 0.5rem',
                                  borderRadius: '6px',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                🔄
                              </label>
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(slotIdx)}
                                title="Eliminar foto de este cuadro"
                                style={{
                                  background: '#fee2e2',
                                  color: '#dc2626',
                                  border: 'none',
                                  padding: '0.35rem 0.55rem',
                                  borderRadius: '6px',
                                  fontSize: '0.8rem',
                                  cursor: 'pointer',
                                  fontWeight: 700
                                }}
                              >
                                🗑
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Cuadro Vacío para Inserción */
                        <label
                          htmlFor={`slot-file-${slotIdx}`}
                          style={{
                            minHeight: '210px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            padding: '1.5rem',
                            textAlign: 'center',
                            background: '#fafafa',
                            transition: 'background 0.2s',
                            flex: 1
                          }}
                        >
                          {isSlotLoading ? (
                            <div style={{ color: '#2563eb', fontWeight: 700, fontSize: '0.9rem' }}>
                              ⏳ Cargando...
                            </div>
                          ) : (
                            <>
                              <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '50%',
                                background: '#e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.6rem',
                                marginBottom: '0.75rem',
                                color: '#475569'
                              }}>
                                📷
                              </div>
                              <span style={{ fontWeight: 800, fontSize: '0.9rem', color: isPrimary ? '#2563eb' : '#334155' }}>
                                {isPrimary ? '+ Subir Foto Principal' : `+ Subir Foto #${slotIdx + 1}`}
                              </span>
                              <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.3rem' }}>
                                Clic para seleccionar archivo
                              </span>
                            </>
                          )}
                        </label>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: '#334155' }}>
                Descripción Detallada
              </label>
              <textarea
                name="description"
                rows="3"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Especificaciones técnicas, velocidad, compatibilidad, garantía, estado del equipo..."
                style={{ width: '100%', padding: '0.7rem 0.85rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', resize: 'vertical', boxSizing: 'border-box' }}
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

        {/* SECCIÓN DE BÚSQUEDA AVANZADA EN EL INVENTARIO */}
        <section style={{
          background: '#ffffff',
          padding: '1.5rem',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 1rem 0', color: '#0f172a' }}>
            🔍 Búsqueda Avanzada de Inventario
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'flex-end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>
                Buscar por nombre o descripción
              </label>
              <input
                type="text"
                placeholder="Ej. SSD, Laptop, Mantenimiento..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>
                Precio Mínimo (S/)
              </label>
              <input
                type="number"
                placeholder="0.00"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>
                Precio Máximo (S/)
              </label>
              <input
                type="number"
                placeholder="Sin límite"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#475569', marginBottom: '0.35rem' }}>
                Ordenar por
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box', background: '#fff' }}
              >
                <option value="id_desc">Más recientes primero</option>
                <option value="id_asc">Más antiguos primero</option>
                <option value="price_asc">Menor precio (S/)</option>
                <option value="price_desc">Mayor precio (S/)</option>
                <option value="name_asc">Nombre (A - Z)</option>
              </select>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setMinPrice('');
                  setMaxPrice('');
                  setSortBy('id_desc');
                }}
                style={{
                  width: '100%',
                  background: '#f1f5f9',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  padding: '0.65rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                Limpiar Filtros
              </button>
            </div>
          </div>
        </section>

        {/* Tabla de Productos */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
              📦 Resultados del Inventario ({products.length})
            </h2>
          </div>

          {loading ? (
            <p>Buscando en el catálogo...</p>
          ) : products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#64748b' }}>
              No se encontraron productos con los filtros aplicados.
            </div>
          ) : (
            <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                    <th style={{ padding: '0.85rem 1rem' }}>ID</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Fotos (hasta 4)</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Nombre</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Precio (PEN)</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Descripción</th>
                    <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => {
                    const imgs = Array.isArray(p.images) && p.images.length > 0 ? p.images : (p.imageUrl ? [p.imageUrl] : []);
                    return (
                      <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.85rem 1rem', color: '#94a3b8' }}>#{p.id}</td>
                        <td style={{ padding: '0.85rem 1rem' }}>
                          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            {imgs.length > 0 ? (
                              imgs.map((src, idx) => (
                                <img
                                  key={idx}
                                  src={src}
                                  alt=""
                                  style={{
                                    width: idx === 0 ? '46px' : '30px',
                                    height: idx === 0 ? '46px' : '30px',
                                    objectFit: 'cover',
                                    borderRadius: '6px',
                                    border: idx === 0 ? '2px solid #2563eb' : '1px solid #cbd5e1'
                                  }}
                                  title={idx === 0 ? 'Foto principal' : `Foto #${idx + 1}`}
                                />
                              ))
                            ) : (
                              <div style={{ width: '46px', height: '46px', background: '#f1f5f9', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.7rem' }}>
                                Sin foto
                              </div>
                            )}
                          </div>
                        </td>
                        <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#0f172a' }}>{p.name}</td>
                        <td style={{ padding: '0.85rem 1rem', fontWeight: 800, color: '#16a34a', whiteSpace: 'nowrap' }}>
                          S/ {parseFloat(p.price).toFixed(2)}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', color: '#64748b', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
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
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
