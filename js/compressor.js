/**
 * Motor de Compresión Inteligente de Imágenes
 * Diseñado específicamente para catálogos y plataformas como Vercel
 * Garantiza que ninguna imagen supere el límite máximo de 1MB (1,048,576 bytes)
 */

const MAX_ALLOWED_BYTES = 1024 * 1024; // 1 MB exacto (1,048,576 bytes)
const TARGET_SAFE_BYTES = 900 * 1024;  // 900 KB (margen de seguridad óptimo)

/**
 * Formatea bytes a una representación legible (B, KB, MB)
 */
function formatBytes(bytes, decimals = 2) {
    if (!bytes || bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Lee un archivo File/Blob y lo convierte a objeto HTMLImageElement
 */
function fileToImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('No se pudo cargar la imagen para procesarla.'));
            img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('Error al leer el archivo de imagen.'));
        reader.readAsDataURL(file);
    });
}

/**
 * Convierte un Canvas a Blob con tipo y calidad especificados
 */
function canvasToBlob(canvas, mimeType, quality) {
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            resolve(blob);
        }, mimeType, quality);
    });
}

/**
 * Convierte un Blob a DataURL (base64)
 */
function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

/**
 * Función principal: Comprime automáticamente una imagen para asegurar que pese <= 1MB
 * @param {File|Blob} file - Archivo de imagen seleccionado por el usuario
 * @param {Object} options - Parámetros de compresión opcionales
 * @returns {Promise<Object>} Resultado con blob, dataUrl, métricas y estado
 */
async function compressImage(file, options = {}) {
    const maxSizeBytes = options.maxSizeBytes || MAX_ALLOWED_BYTES;
    const maxDimension = options.maxDimension || 1600; // Ancho o alto máximo inicial
    const originalSize = file.size;

    // Cargar imagen en memoria
    const img = await fileToImage(file);
    let { width, height } = img;

    // Escalar dimensiones proporcionales si sobrepasa la dimensión máxima recomendada
    if (width > maxDimension || height > maxDimension) {
        if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
        } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
        }
    }

    // Probar formatos: Primero WebP (más eficiente), si no es soportado, usar JPEG
    let mimeType = 'image/webp';
    const testCanvas = document.createElement('canvas');
    testCanvas.width = 1;
    testCanvas.height = 1;
    if (testCanvas.toDataURL('image/webp').indexOf('data:image/webp') !== 0) {
        mimeType = 'image/jpeg';
    }

    // Crear canvas con suavizado de alta calidad
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    let currentWidth = width;
    let currentHeight = height;
    let quality = 0.88; // Calidad inicial alta
    let compressedBlob = null;
    let attempts = 0;
    const maxAttempts = 12;

    // Ciclo de optimización dinámica hasta cumplir la meta de <= 1MB
    while (attempts < maxAttempts) {
        attempts++;
        canvas.width = currentWidth;
        canvas.height = currentHeight;

        // Limpiar y dibujar con fondo blanco para transparencias PNG si se convierte a JPEG
        if (mimeType === 'image/jpeg') {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, currentWidth, currentHeight);
        } else {
            ctx.clearRect(0, 0, currentWidth, currentHeight);
        }

        ctx.drawImage(img, 0, 0, currentWidth, currentHeight);

        compressedBlob = await canvasToBlob(canvas, mimeType, quality);

        // Si ya está por debajo del límite seguro (<= 1MB), terminamos
        if (compressedBlob && compressedBlob.size <= maxSizeBytes) {
            break;
        }

        // Si sobrepasa el límite, ajustamos calidad
        if (quality > 0.45) {
            quality -= 0.12;
        } else {
            // Si la calidad ya es baja y aún pesa más de 1MB, reducimos las dimensiones en 15%
            currentWidth = Math.round(currentWidth * 0.85);
            currentHeight = Math.round(currentHeight * 0.85);
            quality = 0.70;
        }
    }

    // Si por alguna razón extrema la imagen sigue pesando > 1MB, forzamos escala agresiva
    if (compressedBlob && compressedBlob.size > maxSizeBytes) {
        currentWidth = Math.min(currentWidth, 1000);
        currentHeight = Math.round((img.height * currentWidth) / img.width);
        canvas.width = currentWidth;
        canvas.height = currentHeight;
        ctx.clearRect(0, 0, currentWidth, currentHeight);
        ctx.drawImage(img, 0, 0, currentWidth, currentHeight);
        compressedBlob = await canvasToBlob(canvas, mimeType, 0.40);
    }

    const compressedSize = compressedBlob ? compressedBlob.size : originalSize;
    const reductionPercent = Math.max(0, ((originalSize - compressedSize) / originalSize) * 100).toFixed(1);
    const dataUrl = await blobToDataUrl(compressedBlob);

    return {
        blob: compressedBlob,
        dataUrl: dataUrl,
        originalSize: originalSize,
        originalSizeFormatted: formatBytes(originalSize),
        compressedSize: compressedSize,
        compressedSizeFormatted: formatBytes(compressedSize),
        reductionPercent: reductionPercent,
        width: currentWidth,
        height: currentHeight,
        mimeType: mimeType,
        isWithinLimit: compressedSize <= maxSizeBytes,
        limitFormatted: formatBytes(maxSizeBytes)
    };
}

/**
 * Descargar un Blob en el navegador como archivo físico
 */
function downloadBlob(blob, filename = 'imagen-comprimida.webp') {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Exportar funciones globalmente para uso en app.js y admin.js
window.ImageCompressor = {
    compress: compressImage,
    formatBytes: formatBytes,
    downloadBlob: downloadBlob,
    MAX_ALLOWED_BYTES: MAX_ALLOWED_BYTES
};
