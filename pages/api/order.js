// pages/api/order.js
import { Client } from 'pg';
import Twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { items, total } = req.body;
  if (!items || typeof total !== 'number') {
    return res.status(400).json({ error: 'Missing order data' });
  }

  const pgClient = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await pgClient.connect();
    const query = `INSERT INTO "Order" (items, total) VALUES ($1, $2) RETURNING id, created_at;`;
    const result = await pgClient.query(query, [JSON.stringify(items), total]);
    const order = result.rows[0];

    // Send WhatsApp message via Twilio
    const twilio = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    const messageBody = `🛒 *Nuevo pedido*\nID: ${order.id}\nTotal: $${total.toFixed(2)}\nItems:\n${items
      .map((i) => `- ${i.name} x${i.quantity} = $${(i.price * i.quantity).toFixed(2)}`)
      .join('\n')}`;

    await twilio.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.TWILIO_WHATSAPP_TO,
      body: messageBody,
    });

    res.status(200).json({ ok: true, orderId: order.id });
  } catch (e) {
    console.error('Order error', e);
    res.status(500).json({ error: e.message });
  } finally {
    await pgClient.end();
  }
}

