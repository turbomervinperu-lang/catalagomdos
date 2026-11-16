// pages/api/order.js
import { Client } from 'pg';
import Twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { items, total, customerName, customerPhone, customerNotes } = req.body;
  if (!items || !Array.isArray(items) || items.length === 0 || typeof total !== 'number') {
    return res.status(400).json({ error: 'Datos de pedido inválidos o carrito vacío' });
  }

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    
    // Guardar en la base de datos
    const orderPayload = {
      items,
      customer: {
        name: customerName || 'Anónimo',
        phone: customerPhone || '',
        notes: customerNotes || ''
      }
    };

    const query = `INSERT INTO "Order" (items, total, status) VALUES ($1, $2, $3) RETURNING id, created_at, status;`;
    const result = await client.query(query, [JSON.stringify(orderPayload), total, 'Pendiente']);
    const order = result.rows[0];

    // Intentar enviar WhatsApp por Twilio si las credenciales existen
    let twilioSent = false;
    const WHATSAPP_PERU = '51929198813';
    if (
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_WHATSAPP_FROM
    ) {
      try {
        const twilio = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        const messageBody = `🛒 *Nuevo Pedido en TECNOSISTEMAS MDOS*\n` +
          `*Orden #:* ${order.id}\n` +
          (customerName ? `*Cliente:* ${customerName}\n` : '') +
          (customerPhone ? `*Teléfono:* ${customerPhone}\n` : '') +
          `*Total:* S/ ${total.toFixed(2)}\n\n` +
          `*Productos:*\n${items.map((i) => `• ${i.name} (x${i.quantity}) - S/ ${((parseFloat(i.price) || 0) * i.quantity).toFixed(2)}`).join('\n')}` +
          (customerNotes ? `\n\n*Notas:* ${customerNotes}` : '');

        await twilio.messages.create({
          from: process.env.TWILIO_WHATSAPP_FROM,
          to: `whatsapp:+${WHATSAPP_PERU}`,
          body: messageBody,
        });
        twilioSent = true;
      } catch (twErr) {
        console.warn('Twilio WhatsApp error (la orden fue guardada en BD igualmente):', twErr.message);
      }
    }

    return res.status(200).json({
      ok: true,
      orderId: order.id,
      twilioSent,
      whatsappNumber: WHATSAPP_PERU
    });
  } catch (e) {
    console.error('Order error:', e);
    return res.status(500).json({ error: e.message });
  } finally {
    await client.end();
  }
}
