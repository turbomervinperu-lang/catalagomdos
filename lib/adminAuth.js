// lib/adminAuth.js
import crypto from 'crypto';

/**
 * Obtiene la clave secreta del servidor para firmar tokens de sesión de administración.
 * Prioriza ADMIN_JWT_SECRET, luego tokens del entorno, o un fallback seguro por defecto.
 */
function getAuthSecret() {
  return (
    process.env.ADMIN_JWT_SECRET ||
    process.env.BLOB_READ_WRITE_TOKEN ||
    process.env.POSTGRES_URL ||
    'tecnosistemas_mdos_admin_secret_auth_token_key_2026'
  );
}

/**
 * Genera un token firmado HMAC-SHA256 para la sesión del administrador.
 * @param {number} expiresInHours Duración del token en horas (por defecto 12)
 * @returns {string} Token firmado
 */
export function createAdminToken(expiresInHours = 12) {
  const secret = getAuthSecret();
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const exp = now + expiresInHours * 3600;
  const payload = Buffer.from(
    JSON.stringify({ role: 'admin', iat: now, exp })
  ).toString('base64url');
  const data = `${header}.${payload}`;
  const signature = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  return `${data}.${signature}`;
}

/**
 * Verifica el token del administrador a partir de los encabezados HTTP de la petición.
 * Revisa `Authorization: Bearer <token>` o `x-admin-token: <token>`.
 * @param {object} req Petición HTTP (NextApiRequest)
 * @returns {{ valid: boolean, error?: string, payload?: object }}
 */
export function verifyAdminToken(req) {
  try {
    const authHeader =
      req.headers['authorization'] ||
      req.headers['Authorization'] ||
      req.headers['x-admin-token'];

    if (!authHeader) {
      return { valid: false, error: 'Acceso no autorizado: token no proporcionado' };
    }

    const token =
      typeof authHeader === 'string' && authHeader.startsWith('Bearer ')
        ? authHeader.slice(7).trim()
        : String(authHeader).trim();

    if (!token) {
      return { valid: false, error: 'Acceso no autorizado: token vacío' };
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
      return { valid: false, error: 'Token inválido o malformado' };
    }

    const [headerB64, payloadB64, signature] = parts;
    const secret = getAuthSecret();
    const expectedSig = crypto
      .createHmac('sha256', secret)
      .update(`${headerB64}.${payloadB64}`)
      .digest('base64url');

    const sigBuf = Buffer.from(signature);
    const expBuf = Buffer.from(expectedSig);

    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return { valid: false, error: 'Firma de autenticación no válida' };
    }

    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
    const now = Math.floor(Date.now() / 1000);

    if (payload.exp && payload.exp < now) {
      return { valid: false, error: 'La sesión de administrador ha expirado. Inicia sesión nuevamente.' };
    }

    if (payload.role !== 'admin') {
      return { valid: false, error: 'Permisos de administrador insuficientes' };
    }

    return { valid: true, payload };
  } catch (err) {
    return { valid: false, error: 'Error al validar credenciales: ' + (err.message || 'Token inválido') };
  }
}
