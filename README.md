# 🛒 Catálogo Digital Estándar - MDOS TECNOSISTEM (Perú)

Catálogo web de productos con **carrito de compras integrado**, **compresión automática de imágenes a un máximo de 1MB**, **métricas de artículos más pedidos**, medios de pago exclusivos para Perú (**Yape, Plin, BCP, Interbank**) y **finalización de pedidos directa al WhatsApp de la tienda** en moneda **Soles (S/)**, optimizado para despliegue en **Vercel** (`https://vercel.com/new?teamSlug=tecnosistemas-mdos`).

---

## 🇵🇪 Moneda y Medios de Pago Oficiales (Perú)

- **Moneda:** Sol Peruano (`S/` - PEN).
- **Únicos Medios de Pago Aceptados:**
  1. 🟣 **Yape**
  2. 🔵 **Plin**
  3. 🟠 **BCP (Banco de Crédito del Perú)**
  4. 🟢 **Interbank**

---

## 🏷️ Categorías Oficiales de Productos

El catálogo cuenta con las 13 categorías oficiales solicitadas para filtrado instantáneo:
1. **Almacenamiento**
2. **Case**
3. **Estabilizadores / UPS**
4. **Fuente de Poder**
5. **Laptop**
6. **Memoria Ram**
7. **Monitores**
8. **Periféricos**
9. **Placas Madres**
10. **Procesadores**
11. **Procesadores OEM**
12. **Refrigeración**
13. **Tarjetas de Video**

---

## 🚀 Características Principales

1. **Catálogo Responsivo Adaptado a Móviles (Smartphones):**
   - 2 columnas táctiles y compactas en celulares (3 en tablet, 4 en PC).
   - Barra flotante inferior para realizar pedidos con una sola mano.
   - Pestaña especial **`🔥 Más Pedidos`** para destacar los productos con mayor demanda.

2. **Compresión Automática de Imágenes (&le; 1 MB):**
   - Cualquier imagen subida en el panel administrativo es analizada y comprimida en formato WebP de alta fidelidad, asegurando que **nunca sobrepase 1MB**.
   - No satura el almacenamiento ni el ancho de banda en Vercel.

3. **Acceso Privado de Administrador con PIN:**
   - Oculto de la vista de los clientes (acceso discreto con candado `🔒 Acceso Interno` en el footer).
   - Pantalla de bloqueo por PIN (Clave inicial: `1234`).
   - Panel de control para subir productos, editar existentes, eliminar artículos y ver el ranking de los más pedidos.

4. **Pedido Directo a WhatsApp:**
   - Genera un mensaje formateado y estructurado con el desglose en Soles (`S/`), datos del cliente, modalidad (Delivery / Recojo) y método de pago elegido (Yape, Plin, BCP, Interbank).

---

## 🗄️ Base de Datos Neon PostgreSQL (`neon-green-ladder`)

El proyecto está configurado para conectarse directamente a la base de datos **Neon Serverless Postgres** conectada en tu proyecto de Vercel (`catalago-mdos`):
- **Endpoints Serverless:** `/api/products`, `/api/config` y `/api/health`.
- **Persistencia Total:** Los productos creados, fotos comprimidas (WebP/JPEG $\le 1\text{ MB}$), cambios de precios, reordenamiento de fotos y pedidos se guardan de forma permanente en la nube.
- **Inicialización Automática:** Si la base de datos está vacía, el sistema crea las tablas `products` y `store_config` e inserta automáticamente los 13 productos oficiales.
- **Respaldo Híbrido:** Si se visualiza sin conexión o de forma local, el catálogo utiliza su almacenamiento local (`localStorage`) y se sincroniza automáticamente al reconectar con Neon.

---

## ⚡ Cómo Desplegar en Vercel (`tecnosistemas-mdos`)

1. **Subir a GitHub:**
   - Crea un repositorio en [GitHub.com](https://github.com/new) (ej. `catalogo-mdos-peru`).
   - Sube los archivos de esta carpeta.
2. **Importar en Vercel:**
   - Abre **[https://vercel.com/new?teamSlug=tecnosistemas-mdos](https://vercel.com/new?teamSlug=tecnosistemas-mdos)**.
   - Como la base de datos `neon-green-ladder` ya está conectada al proyecto `catalago-mdos`, Vercel inyecta automáticamente `POSTGRES_URL` y las funciones de `/api` comenzarán a guardar todos los datos directamente en Neon sin configuración adicional.

---

## 💻 Prueba Local en Windows

Haz doble clic en **`iniciar-catalogo.bat`** o abre **`index.html`** directamente en tu navegador.
"# catalagomdos" 
