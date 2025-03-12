
// Authentication API for Vercel
import { VercelRequest, VercelResponse } from '@vercel/node';
import passport from 'passport';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
