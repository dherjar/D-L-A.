
// Products API using Vercel KV Storage
import { kv } from './config';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const products = await kv.get('products') || [];
        res.json(products);
    } else if (req.method === 'POST') {
        const { name, brand, category, priceOres, stock } = req.body;
        const products = await kv.get('products') || [];
        const newProduct = { id: Date.now(), name, brand, category, priceOres, stock };
        products.push(newProduct);
        await kv.set('products', products);
        res.json({ message: 'Product added', product: newProduct });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
