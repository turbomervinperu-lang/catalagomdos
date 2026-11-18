import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { CATEGORIES, EDITABLE_CATEGORIES } from '../lib/categories';

// Función para comprimir imágenes en el cliente (HTML5 Canvas)
function compressImage(file, maxDimension = 1000, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
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
  const [token, setToken] = useState('');
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [inputPassword, setInputPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Helper para adjuntar token de autorización a peticiones administrativas
  const getAuthHeaders = () => {
    const curToken = token || (typeof window !== 'undefined' ? sessionStorage.getItem('admin_token') : '');
    return curToken ? { 'Authorization': `Bearer ${curToken}` } : {};
  };

  // Pestaña activa: 'products' o 'orders'
  const [activeTab, setActiveTab] = useState('products');

  // Inventario y productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Órdenes de Compra en Línea
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState(null);
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('Todos');
  const [updatingOrderId, setUpdatingOrderId] = useState(null);

  // Filtros de búsqueda exacta
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Mostrar todas');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const categoryMenuRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [sortBy, setSortBy] = useState('id_desc');

  // Cerrar menú de categorías automáticamente al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (categoryMenuRef.current && !categoryMenuRef.current.contains(e.target)) {
        setShowCategoryMenu(false);
      }
    }
    if (showCategoryMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showCategoryMenu]);

  // Formulario de Producto (con categoría, stock y 4 cuadros de imágenes)
  const [form, setForm] = useState({
    id: null,
    name: '',
    category: '', // Inicialmente vacío: exige elegir categoría primero
    stock: '+5',
    price: '',
    description: '',
    images: [] // array de hasta 4 imágenes
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

  // El panel SIEMPRE solicita contraseña al entrar (sin auto-login persistente)
  useEffect(() => {
    setCheckingAuth(false);
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (search.trim()) queryParams.set('search', search.trim());
      if (selectedCategory && selectedCategory !== 'Mostrar todas') {
        queryParams.set('category', selectedCategory);
      }
      if (sortBy) queryParams.set('sortBy', sortBy);

      queryParams.set('nocache', '1');
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

  const fetchOrders = async () => {
    setOrdersLoading(true);
    try {
      const res = await fetch('/api/admin/orders', {
        headers: getAuthHeaders()
      });
      if (res.status === 401) {
        handleLogout();
        throw new Error('Sesión expirada o no autorizada. Por favor ingresa tu contraseña.');
      }
      if (!res.ok) throw new Error('Error al obtener las órdenes de compra');
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
      setOrdersError(null);
    } catch (err) {
      setOrdersError(err.message);
    } finally {
      setOrdersLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
      fetchOrders();
      // Auto-actualizar órdenes cada 15 segundos para monitoreo en vivo
      const interval = setInterval(fetchOrders, 15000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated, search, selectedCategory, sortBy]);

  const handleUpdateOrderStatus = async (id, newStatus) => {
    setUpdatingOrderId(id);
    try {
      const res = await fetch('/api/admin/orders', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({ id, status: newStatus })
      });
      if (res.status === 401) {
        handleLogout();
        throw new Error('Sesión expirada. Por favor ingresa tu contraseña.');
      }
      if (!res.ok) throw new Error('No se pudo actualizar el estado');
      setOrders(orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setUpdatingOrderId(null);
    }
  };

  const handleDeleteOrder = async (id) => {
    if (!window.confirm(`¿Estás seguro de eliminar la Orden #${id}?`)) return;
    try {
      const res = await fetch(`/api/admin/orders?id=${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      if (res.status === 401) {
        handleLogout();
        throw new Error('Sesión expirada. Por favor ingresa tu contraseña.');
      }
      if (!res.ok) throw new Error('No se pudo eliminar la orden');
      setOrders(orders.filter((o) => o.id !== id));
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

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

      if (data.token) {
        sessionStorage.setItem('admin_token', data.token);
        setToken(data.token);
      }
      sessionStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      setInputPassword('');
    } catch (err) {
      setLoginError(err.message);
      setInputPassword(''); // Se borra la contraseña errónea para volver a intentar de inmediato
      setTimeout(() => {
        if (passwordInputRef.current) {
          passwordInputRef.current.focus();
        }
      }, 50);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('admin_token');
      sessionStorage.removeItem('admin_auth');
    } catch (e) {}
    setToken('');
    setIsAuthenticated(false);
  };

  // Subida de imagen a casilla específica
  const handleSlotUpload = async (slotIndex, event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoadingSlot(slotIndex);
    try {
      // 1) Comprimir en el navegador  2) subir al bucket  3) guardar solo la URL
      const compressedDataUrl = await compressImage(file, 1000, 0.82);
      const upRes = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({ dataUrl: compressedDataUrl, name: form.name || 'foto' })
      });
      if (upRes.status === 401) {
        handleLogout();
        throw new Error('Sesión expirada. Por favor ingresa tu contraseña.');
      }
      const upData = await upRes.json();
      if (!upRes.ok || !upData.url) {
        throw new Error(upData.error || 'No se pudo subir la imagen');
      }
      const newImages = [...form.images];
      newImages[slotIndex] = upData.url;
      const cleanImages = newImages.filter(Boolean);
      setForm({ ...form, images: cleanImages });
    } catch (err) {
      alert('Error al procesar la imagen: ' + err.message);
    } finally {
      setLoadingSlot(null);
      if (slotInputRefs[slotIndex]?.current) {
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

  // Marcar como principal (mover al Cuadro 1)
  const handleMakePrimary = (index) => {
    if (index === 0) return;
    const newImages = [...form.images];
    const [selected] = newImages.splice(index, 1);
    newImages.unshift(selected);
    setForm({ ...form, images: newImages });
  };

  // Eliminar imagen de una casilla
  const handleRemoveImage = (index) => {
    const newImages = form.images.filter((_, i) => i !== index);
    setForm({ ...form, images: newImages });
  };

  // Cargar para edición
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
      category: p.category || '',
      stock: p.stock || '+5',
      description: p.description || '',
      price: p.price,
      images: imgs
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setForm({
      id: null,
      name: '',
      category: '', // Reinicia la regla exigiendo elegir categoría de nuevo
      stock: '+5',
      description: '',
      price: '',
      images: []
    });
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
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({
          ...form,
          imageUrl: form.images[0] || ''
        })
      });
      if (res.status === 401) {
        handleLogout();
        throw new Error('Sesión expirada. Por favor ingresa tu contraseña.');
      }
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
      const res = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      if (res.status === 401) {
        handleLogout();
        throw new Error('Sesión expirada. Por favor ingresa tu contraseña.');
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al eliminar');
      setMessage('Producto eliminado con éxito.');
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
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
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

      if (data.token) {
        sessionStorage.setItem('admin_token', data.token);
        setToken(data.token);
      }

      setPassMessage('¡Contraseña actualizada correctamente!');
      setPassForm({ currentPassword: '', newPassword: '' });
      setTimeout(() => setShowPasswordModal(false), 2000);
    } catch (err) {
      setPassError(err.message);
    } finally {
      setPassSubmitting(false);
    }
  };

  if (checkingAuth) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', color: '#64748b' }}>
        <p>Cargando panel...</p>
      </div>
    );
  }

  // Pantalla de bloqueo si no está autenticado
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Acceso al Panel | TECNOSISTEMAS MDOS</title>
        </Head>
        <Header />
        <div style={{
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '2.5rem',
            maxWidth: '440px',
            width: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: '#eff6ff',
              color: '#2563eb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 1.25rem auto',
              border: '2px solid #bfdbfe'
            }}>
              🔒
            </div>

            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', margin: '0 0 0.5rem 0' }}>
              Panel de Administración
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 1.5rem 0' }}>
              TECNOSISTEMAS MDOS • Ingrese la clave de seguridad
            </p>

            {loginError && (
              <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '0.75rem', borderRadius: '8px', fontSize: '0.875rem', marginBottom: '1.25rem', fontWeight: 600 }}>
                ⚠️ {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.5rem', textAlign: 'center' }}>
                  Contraseña de Acceso
                </label>
                <input
                  ref={passwordInputRef}
                  type="password"
                  required
                  autoFocus
                  placeholder=""
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '1.4rem',
                    textAlign: 'center',
                    letterSpacing: '5px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s, box-shadow 0.15s'
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
              TECNOSISTEMAS MDOS • Categorías, Stock y Precios en Soles (S/)
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
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: '#334155' }}>
                  Contraseña Actual
                </label>
                <input
                  type="password"
                  required
                  placeholder="Introduce la contraseña actual"
                  value={passForm.currentPassword}
                  onChange={(e) => setPassForm({ ...passForm, currentPassword: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: '#334155' }}>
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  required
                  placeholder="Introduce la nueva clave"
                  value={passForm.newPassword}
                  onChange={(e) => setPassForm({ ...passForm, newPassword: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
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
                  {passSubmitting ? 'Guardando...' : 'Actualizar Contraseña'}
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

        {/* Selector de Pestañas Principales */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          marginBottom: '2rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '0.75rem',
          flexWrap: 'wrap'
        }}>
          <button
            type="button"
            onClick={() => setActiveTab('products')}
            style={{
              background: activeTab === 'products' ? '#0f172a' : '#ffffff',
              color: activeTab === 'products' ? '#ffffff' : '#475569',
              border: activeTab === 'products' ? '1px solid #0f172a' : '1px solid #cbd5e1',
              padding: '0.7rem 1.35rem',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeTab === 'products' ? '0 2px 8px rgba(15,23,42,0.2)' : 'none',
              transition: 'all 0.15s'
            }}
          >
            <span>📦 Catálogo y Productos</span>
            <span style={{
              background: activeTab === 'products' ? '#334155' : '#f1f5f9',
              color: activeTab === 'products' ? '#ffffff' : '#475569',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '0.15rem 0.55rem',
              borderRadius: '999px'
            }}>
              {products.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            style={{
              background: activeTab === 'orders' ? '#ef4444' : '#ffffff',
              color: activeTab === 'orders' ? '#ffffff' : '#475569',
              border: activeTab === 'orders' ? '1px solid #dc2626' : '1px solid #cbd5e1',
              padding: '0.7rem 1.35rem',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeTab === 'orders' ? '0 2px 10px rgba(239,68,68,0.35)' : 'none',
              transition: 'all 0.15s'
            }}
          >
            <span>🛒 Órdenes de Compra en Línea</span>
            <span style={{
              background: activeTab === 'orders' ? '#ffffff' : '#ef4444',
              color: activeTab === 'orders' ? '#dc2626' : '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 900,
              padding: '0.15rem 0.55rem',
              borderRadius: '999px'
            }}>
              {orders.length}
            </span>
            {orders.filter((o) => (o.status || 'Pendiente') === 'Pendiente').length > 0 && (
              <span style={{
                background: '#fef08a',
                color: '#854d0e',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.15rem 0.5rem',
                borderRadius: '6px'
              }}>
                ⚡ {orders.filter((o) => (o.status || 'Pendiente') === 'Pendiente').length} Nuevas
              </span>
            )}
          </button>
        </div>

        {activeTab === 'products' ? (
          <>
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

          {(() => {
            const isCategorySelected = Boolean(form.category && form.category.trim() !== '');

            return (
              <form onSubmit={handleSubmitProduct} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {/* AVISO INICIAL SI NO HA ELEGIDO CATEGORÍA */}
                {!isCategorySelected && (
                  <div style={{
                    gridColumn: '1 / -1',
                    background: '#fffbeb',
                    border: '1px solid #fde68a',
                    color: '#b45309',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span>⚠️</span>
                    <span>Elija una Categoría en el primer campo para habilitar el registro del producto.</span>
                  </div>
                )}

                {/* 1. CATEGORÍA - PRIMER ÍTEM A LA IZQUIERDA */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, marginBottom: '0.35rem', color: '#0f172a' }}>
                    Categoría *
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: isCategorySelected ? '2px solid #2563eb' : '2px solid #f59e0b',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      background: '#fff',
                      fontWeight: isCategorySelected ? 700 : 600,
                      color: isCategorySelected ? '#0f172a' : '#b45309',
                      outline: 'none'
                    }}
                  >
                    <option value="">Elija una Categoría</option>
                    {EDITABLE_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* 2. NOMBRE DEL PRODUCTO / SERVICIO - A LA DERECHA */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: isCategorySelected ? '#334155' : '#94a3b8' }}>
                    Nombre del Producto / Servicio *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    disabled={!isCategorySelected}
                    placeholder={isCategorySelected ? "Ej. PLACA MADRE GIGABYTE B550M-K (AM4) (DDR4)" : "🔒 Ingrese la categoría primero"}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      background: isCategorySelected ? '#ffffff' : '#f8fafc',
                      cursor: isCategorySelected ? 'text' : 'not-allowed',
                      color: isCategorySelected ? '#0f172a' : '#94a3b8'
                    }}
                  />
                </div>

                {/* 3. STOCK DISPONIBLE */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: isCategorySelected ? '#334155' : '#94a3b8' }}>
                    Stock Disponible *
                  </label>
                  <input
                    type="text"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: e.target.value })}
                    disabled={!isCategorySelected}
                    placeholder="Ej. +5, 4, 1, Agotado"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      fontWeight: 700,
                      color: isCategorySelected ? '#0f172a' : '#94a3b8',
                      background: isCategorySelected ? '#ffffff' : '#f8fafc',
                      cursor: isCategorySelected ? 'text' : 'not-allowed'
                    }}
                  />
                </div>

                {/* 4. PRECIO EN SOLES */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: isCategorySelected ? '#334155' : '#94a3b8' }}>
                    Precio en Soles Peruanos (S/) *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '10px', fontWeight: 700, color: isCategorySelected ? '#64748b' : '#cbd5e1' }}>S/</span>
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      required
                      disabled={!isCategorySelected}
                      placeholder="0.00"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.85rem 0.7rem 2.2rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.95rem',
                        boxSizing: 'border-box',
                        fontWeight: 700,
                        color: isCategorySelected ? '#16a34a' : '#94a3b8',
                        background: isCategorySelected ? '#ffffff' : '#f8fafc',
                        cursor: isCategorySelected ? 'text' : 'not-allowed'
                      }}
                    />
                  </div>
                </div>

                {/* LOS 4 CUADROS FIJOS DE INSERCIÓN Y REORDENAMIENTO DE IMÁGENES */}
                <div style={{
                  gridColumn: '1 / -1',
                  background: '#f8fafc',
                  padding: '1.5rem',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  opacity: isCategorySelected ? 1 : 0.6,
                  transition: 'opacity 0.2s'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <label style={{ fontWeight: 800, fontSize: '1rem', color: isCategorySelected ? '#0f172a' : '#64748b' }}>
                        📸 Cuadros de Imágenes del Producto
                      </label>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>
                        {isCategorySelected
                          ? 'Haz clic en cada recuadro para subir la foto correspondiente. El Cuadro 1 siempre es la Foto Principal.'
                          : '🔒 Seleccione una categoría arriba para habilitar la carga de fotos.'}
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
                            disabled={!isCategorySelected}
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
                              htmlFor={isCategorySelected ? `slot-file-${slotIdx}` : undefined}
                              onClick={(e) => {
                                if (!isCategorySelected) {
                                  e.preventDefault();
                                  alert('Por favor, primero elija una categoría.');
                                }
                              }}
                              style={{
                                minHeight: '210px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: isCategorySelected ? 'pointer' : 'not-allowed',
                                padding: '1.5rem',
                                textAlign: 'center',
                                background: isCategorySelected ? '#fafafa' : '#f1f5f9',
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
                                    background: isCategorySelected ? '#e2e8f0' : '#cbd5e1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.6rem',
                                    marginBottom: '0.75rem',
                                    color: isCategorySelected ? '#475569' : '#94a3b8'
                                  }}>
                                    {isCategorySelected ? '📷' : '🔒'}
                                  </div>
                                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: isCategorySelected ? (isPrimary ? '#2563eb' : '#334155') : '#94a3b8' }}>
                                    {isPrimary ? '+ Subir Foto Principal' : `+ Subir Foto #${slotIdx + 1}`}
                                  </span>
                                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.3rem' }}>
                                    {isCategorySelected ? 'Clic para seleccionar archivo' : 'Bloqueado hasta elegir categoría'}
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

                {/* 5. DESCRIPCIÓN DETALLADA */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: isCategorySelected ? '#334155' : '#94a3b8' }}>
                    Descripción Detallada
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    disabled={!isCategorySelected}
                    placeholder={isCategorySelected ? "Especificaciones técnicas, compatibilidad, socket, garantía..." : "🔒 Seleccione una categoría para redactar la descripción"}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      background: isCategorySelected ? '#ffffff' : '#f8fafc',
                      cursor: isCategorySelected ? 'text' : 'not-allowed',
                      color: isCategorySelected ? '#0f172a' : '#94a3b8'
                    }}
                  />
                </div>

                {/* 6. BOTONES DE ACCIÓN */}
                <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem' }}>
                  <button
                    type="submit"
                    disabled={!isCategorySelected || submitting}
                    style={{
                      background: !isCategorySelected ? '#94a3b8' : (isEditing ? '#2563eb' : '#16a34a'),
                      color: '#ffffff',
                      padding: '0.75rem 1.75rem',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: !isCategorySelected ? 'not-allowed' : 'pointer',
                      boxShadow: isCategorySelected ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
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
            );
          })()}
        </section>

        {/* SECCIÓN DE BÚSQUEDA EXACTA EN EL INVENTARIO (ESTILO ACTUALIZACIÓN DE STOCK EN TIEMPO REAL) */}
        <section style={{
          background: '#ffffff',
          padding: '1.75rem',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
          marginBottom: '2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 0.35rem 0', color: '#0f172a' }}>
              ACTUALIZACIÓN DE STOCK EN TIEMPO REAL
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
              Consulta disponibilidad y precios de distribución
            </p>
          </div>

          {/* Barra de control con selector de categoría y búsqueda exacta */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            {/* Dropdown de Categorías */}
            <div ref={categoryMenuRef} style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                style={{
                  background: '#ffffff',
                  color: selectedCategory !== 'Mostrar todas' ? '#2563eb' : '#0f172a',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '0.65rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  minWidth: '160px',
                  justifyContent: 'space-between'
                }}
              >
                <span>{selectedCategory === 'Mostrar todas' ? 'CATEGORÍAS ▾' : `${selectedCategory.toUpperCase()} ▾`}</span>
              </button>

              {showCategoryMenu && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '0.4rem',
                  background: '#ffffff',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                  zIndex: 50,
                  width: '240px',
                  maxHeight: '340px',
                  overflowY: 'auto'
                }}>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowCategoryMenu(false);
                      }}
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        fontSize: '0.85rem',
                        fontWeight: selectedCategory === cat ? 800 : 500,
                        color: selectedCategory === cat ? '#2563eb' : '#334155',
                        background: selectedCategory === cat ? '#eff6ff' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        borderBottom: '1px solid #f1f5f9'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input de Búsqueda con botón X y lupa */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '10px',
              padding: '0 0.75rem',
              width: '100%',
              maxWidth: '380px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <input
                type="text"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  padding: '0.65rem 0',
                  fontSize: '0.9rem',
                  width: '100%',
                  color: '#0f172a'
                }}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0 0.35rem'
                  }}
                  title="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
              <span style={{ color: '#0284c7', fontSize: '1rem', paddingLeft: '0.35rem' }}>🔍</span>
            </div>
          </div>

          {/* Subtítulo dinámico con contador exacto de productos */}
          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.82rem', marginBottom: '1.25rem' }}>
            {selectedCategory !== 'Mostrar todas' || search.trim() ? (
              <span>Mostrando {products.length} productos filtrados</span>
            ) : (
              <span>Mostrando {products.length} productos</span>
            )}
          </div>

          {/* Tabla de Resultados de Inventario */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
              ⚡ Buscando en inventario...
            </div>
          ) : products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#64748b' }}>
              No se encontraron productos con los filtros aplicados.
            </div>
          ) : (
            <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    <th style={{ padding: '0.85rem 1rem' }}>PRODUCTO</th>
                    <th style={{ padding: '0.85rem 1rem', width: '150px' }}>CATEGORÍA</th>
                    <th style={{ padding: '0.85rem 1rem', width: '90px', textAlign: 'center' }}>STOCK</th>
                    <th style={{ padding: '0.85rem 1rem', width: '110px', textAlign: 'right' }}>PRECIO</th>
                    <th style={{ padding: '0.85rem 1rem', width: '140px', textAlign: 'center' }}>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => {
                    const thumb = (Array.isArray(p.images) && p.images[0]) || p.imageUrl || '';
                    return (
                      <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '6px',
                              background: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              overflow: 'hidden',
                              flexShrink: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {thumb ? (
                                <img src={thumb} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                              ) : (
                                <span style={{ fontSize: '1rem', color: '#94a3b8' }}>🖥️</span>
                              )}
                            </div>
                            <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.88rem' }}>
                              {p.name.toUpperCase()}
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          <span style={{
                            background: '#eff6ff',
                            color: '#1d4ed8',
                            padding: '0.25rem 0.6rem',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 700
                          }}>
                            {p.category || 'General'}
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                          <span style={{
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            color: '#334155',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '999px',
                            fontSize: '0.8rem',
                            fontWeight: 800
                          }}>
                            {p.stock || '+5'}
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 800, color: '#16a34a' }}>
                          S/ {parseFloat(p.price).toFixed(2)}
                        </td>
                        <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem' }}>
                            <button
                              onClick={() => handleEditClick(p)}
                              title="Editar producto"
                              style={{
                                background: '#eff6ff',
                                color: '#2563eb',
                                border: '1px solid #bfdbfe',
                                padding: '0.35rem 0.65rem',
                                borderRadius: '6px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              ✏️
                            </button>
                            <button
                              onClick={() => handleDelete(p.id)}
                              title="Eliminar producto"
                              style={{
                                background: '#fee2e2',
                                color: '#dc2626',
                                border: '1px solid #fecaca',
                                padding: '0.35rem 0.65rem',
                                borderRadius: '6px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              🗑️
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
          </>
        ) : (
          /* SECCIÓN DE ÓRDENES DE COMPRA EN LÍNEA */
          <section>
            {/* Cabecera de Órdenes */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h2 style={{ margin: '0 0 0.25rem 0', fontSize: '1.4rem', fontWeight: 900, color: '#0f172a' }}>
                  🛒 Órdenes de Compra en Línea
                </h2>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
                  Monitoreo de pedidos realizados por los clientes desde el catálogo en tiempo real.
                </p>
              </div>

              <button
                type="button"
                onClick={fetchOrders}
                disabled={ordersLoading}
                style={{
                  background: '#0f172a',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.65rem 1.1rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <span>🔄</span>
                <span>{ordersLoading ? 'Actualizando...' : 'Actualizar Ahora'}</span>
              </button>
            </div>

            {/* Filtros de Órdenes */}
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: 1, minWidth: '240px' }}>
                <input
                  type="text"
                  placeholder="🔍 Buscar por cliente, teléfono, producto o # orden..."
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', marginRight: '0.25rem' }}>Estado:</span>
                {['Todos', 'Pendiente', 'En Proceso', 'Entregado', 'Cancelado'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setOrderStatusFilter(st)}
                    style={{
                      background: orderStatusFilter === st ? '#ef4444' : '#f1f5f9',
                      color: orderStatusFilter === st ? '#ffffff' : '#334155',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '0.4rem 0.75rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Listado de Órdenes */}
            {ordersLoading && orders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
                ⚡ Cargando órdenes en tiempo real...
              </div>
            ) : orders.length === 0 ? (
              <div style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                padding: '3.5rem 2rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>📦</div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#0f172a' }}>No hay órdenes de compra registradas aún</h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
                  Cuando los clientes hagan un pedido desde el carrito, aparecerá aquí inmediatamente con todos los datos y opción de contacto por WhatsApp.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {orders
                  .filter((o) => {
                    let customerInfo = { name: '', phone: '', notes: '' };
                    let itemsList = [];
                    if (o.items) {
                      if (Array.isArray(o.items)) {
                        itemsList = o.items;
                      } else if (typeof o.items === 'object') {
                        itemsList = Array.isArray(o.items.items) ? o.items.items : [];
                        customerInfo = o.items.customer || customerInfo;
                      }
                    }

                    if (orderStatusFilter !== 'Todos' && (o.status || 'Pendiente') !== orderStatusFilter) {
                      return false;
                    }

                    if (orderSearch.trim()) {
                      const q = orderSearch.toLowerCase();
                      const matchId = String(o.id).includes(q);
                      const matchCustomer = (customerInfo.name || '').toLowerCase().includes(q);
                      const matchPhone = (customerInfo.phone || '').includes(q);
                      const matchItems = itemsList.some((it) => (it.name || '').toLowerCase().includes(q));
                      if (!matchId && !matchCustomer && !matchPhone && !matchItems) return false;
                    }

                    return true;
                  })
                  .map((order) => {
                    let customerInfo = { name: '', phone: '', notes: '' };
                    let itemsList = [];
                    if (order.items) {
                      if (Array.isArray(order.items)) {
                        itemsList = order.items;
                      } else if (typeof order.items === 'object') {
                        itemsList = Array.isArray(order.items.items) ? order.items.items : [];
                        customerInfo = order.items.customer || customerInfo;
                      }
                    }

                    const cleanPhone = (customerInfo.phone || '').replace(/[^0-9]/g, '');
                    const waCustomerUrl = cleanPhone
                      ? `https://api.whatsapp.com/send?phone=51${cleanPhone}&text=${encodeURIComponent(`Hola ${customerInfo.name || ''}, te contactamos de TECNOSISTEMAS MDOS para coordinar tu Orden #${order.id}.`)}`
                      : null;

                    return (
                      <div
                        key={order.id}
                        style={{
                          background: '#ffffff',
                          borderRadius: '16px',
                          border: '1px solid #e2e8f0',
                          padding: '1.5rem',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                        }}
                      >
                        {/* Fila Superior: ID, Estado, Fecha y Total */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '0.75rem',
                          borderBottom: '1px solid #f1f5f9',
                          paddingBottom: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ fontWeight: 900, fontSize: '1.25rem', color: '#0f172a' }}>
                              ORDEN #{order.id}
                            </span>
                            <span style={{
                              background: order.status === 'Entregado' ? '#dcfce7' : (order.status === 'Cancelado' ? '#fee2e2' : (order.status === 'En Proceso' ? '#eff6ff' : '#fef3c7')),
                              color: order.status === 'Entregado' ? '#15803d' : (order.status === 'Cancelado' ? '#b91c1c' : (order.status === 'En Proceso' ? '#1d4ed8' : '#b45309')),
                              border: `1px solid ${order.status === 'Entregado' ? '#86efac' : (order.status === 'Cancelado' ? '#fca5a5' : (order.status === 'En Proceso' ? '#bfdbfe' : '#fde68a'))}`,
                              padding: '0.2rem 0.75rem',
                              borderRadius: '999px',
                              fontSize: '0.8rem',
                              fontWeight: 800
                            }}>
                              {order.status || 'Pendiente'}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                              📅 {order.created_at ? new Date(order.created_at).toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' }) : 'Reciente'}
                            </span>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>
                              Total de la Orden
                            </span>
                            <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ef4444' }}>
                              S/ {parseFloat(order.total).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Fila Cliente */}
                        <div style={{
                          background: '#f8fafc',
                          borderRadius: '10px',
                          padding: '0.85rem 1.1rem',
                          marginBottom: '1rem',
                          border: '1px solid #e2e8f0',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '0.75rem'
                        }}>
                          <div>
                            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#1e293b' }}>
                              👤 Cliente: {customerInfo.name || 'Cliente sin nombre'}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.2rem' }}>
                              📞 Teléfono: {customerInfo.phone || 'No especificado'}
                              {customerInfo.notes && (
                                <span style={{ marginLeft: '1rem', color: '#64748b' }}>
                                  📝 Notas: {customerInfo.notes}
                                </span>
                              )}
                            </div>
                          </div>

                          {waCustomerUrl && (
                            <a
                              href={waCustomerUrl}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                background: '#16a34a',
                                color: '#ffffff',
                                textDecoration: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                fontSize: '0.82rem',
                                fontWeight: 800,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                boxShadow: '0 2px 6px rgba(22,163,74,0.3)'
                              }}
                            >
                              📲 Abrir WhatsApp del Cliente
                            </a>
                          )}
                        </div>

                        {/* Lista de Productos Solicitados */}
                        <div style={{ marginBottom: '1.25rem' }}>
                          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.45rem', letterSpacing: '0.5px' }}>
                            Productos Comprados ({itemsList.length})
                          </div>
                          <div style={{ border: '1px solid #f1f5f9', borderRadius: '8px', overflow: 'hidden' }}>
                            {itemsList.map((it, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  padding: '0.65rem 1rem',
                                  borderBottom: idx < itemsList.length - 1 ? '1px solid #f1f5f9' : 'none',
                                  background: idx % 2 === 0 ? '#ffffff' : '#fafafa'
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                  <span style={{
                                    background: '#0f172a',
                                    color: '#ffffff',
                                    fontSize: '0.72rem',
                                    fontWeight: 800,
                                    padding: '0.15rem 0.5rem',
                                    borderRadius: '6px'
                                  }}>
                                    x{it.quantity}
                                  </span>
                                  <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1e293b' }}>
                                    {it.name.toUpperCase()}
                                  </span>
                                </div>
                                <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.88rem' }}>
                                  S/ {((parseFloat(it.price) || 0) * it.quantity).toFixed(2)}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Barra de Cambiar Estado y Eliminar */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '0.75rem',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid #f1f5f9'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569', marginRight: '0.35rem' }}>
                              Cambiar Estado:
                            </span>
                            {['Pendiente', 'En Proceso', 'Entregado', 'Cancelado'].map((st) => (
                              <button
                                key={st}
                                type="button"
                                onClick={() => handleUpdateOrderStatus(order.id, st)}
                                disabled={updatingOrderId === order.id}
                                style={{
                                  background: (order.status || 'Pendiente') === st ? '#0f172a' : '#f1f5f9',
                                  color: (order.status || 'Pendiente') === st ? '#ffffff' : '#475569',
                                  border: 'none',
                                  padding: '0.35rem 0.65rem',
                                  borderRadius: '6px',
                                  fontSize: '0.78rem',
                                  fontWeight: 700,
                                  cursor: 'pointer'
                                }}
                              >
                                {st}
                              </button>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteOrder(order.id)}
                            style={{
                              background: '#fee2e2',
                              color: '#b91c1c',
                              border: '1px solid #fecaca',
                              padding: '0.4rem 0.85rem',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            🗑️ Eliminar Orden
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
}
