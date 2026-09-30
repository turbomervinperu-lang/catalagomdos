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

## 🗄️ Base de Datos Neon PostgreSQL

El proyecto está configurado para conectarse directamente a tu base de datos **Neon Serverless Postgres** creada en tu cuenta:
- **Consola Neon:** [https://console.neon.tech/app/org-shiny-feather-88417736/projects](https://console.neon.tech/app/org-shiny-feather-88417736/projects)
- **Repositorio GitHub:** [https://github.com/turbomervinperu-lang/catalagomdos](https://github.com/turbomervinperu-lang/catalagomdos)
- **Endpoints Serverless:** `/api/products`, `/api/config` y `/api/health`.
- **Persistencia Total:** Los productos creados, fotos comprimidas (WebP/JPEG $\le 1\text{ MB}$), cambios de precios, reordenamiento de fotos y pedidos se guardan de forma permanente en la nube.
- **Inicialización Automática:** Si la base de datos está vacía, el sistema crea las tablas `products` y `store_config` e inserta automáticamente los productos iniciales.
- **Respaldo Híbrido:** Si se visualiza sin conexión o de forma local, el catálogo utiliza su almacenamiento local (`localStorage`) y se sincroniza automáticamente al reconectar con Neon.

---

## ⚡ Conexión Neon + GitHub + Vercel

### Paso 1: Obtener la Connection String de Neon
1. Entra a [https://console.neon.tech/app/org-shiny-feather-88417736/projects](https://console.neon.tech/app/org-shiny-feather-88417736/projects).
2. Haz clic en tu proyecto.
3. En la sección **Connection Details** (Dashboard), selecciona **Connection string** y cópiala (empieza con `postgresql://...`).

### Paso 2: Conectar con Vercel
1. En tu proyecto de [Vercel](https://vercel.com), asegúrate de que el repositorio importado sea **`turbomervinperu-lang/catalagomdos`**.
2. Ve a la pestaña **Settings** -> **Environment Variables**.
3. Agrega la variable:
   - **Key:** `POSTGRES_URL`
   - **Value:** *(Pega tu Connection string de Neon)*
   - Marca: **Production**, **Preview**, **Development**.
4. Haz clic en **Save** y luego haz un **Redeploy** (o haz un nuevo commit) para que tome efecto.

*Nota:* También puedes conectar Neon en 1 solo clic desde Neon en **Integrations -> Vercel**.

---

## 💻 Prueba Local en Windows

Haz doble clic en **`iniciar-catalogo.bat`** o abre **`index.html`** directamente en tu navegador.

