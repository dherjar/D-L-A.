
// Orders API using Vercel KV Storage
import { kv } from './config';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const orders = await kv.get('orders') || [];
        res.json(orders);
    } else if (req.method === 'POST') {
        const { user, items, total, paymentMethod, address } = req.body;
        const orders = await kv.get('orders') || [];
        const newOrder = { id: Date.now(), user, items, total, paymentMethod, address, status: 'Pending' };
        orders.push(newOrder);
        await kv.set('orders', orders);
        res.json({ message: 'Order placed', order: newOrder });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
