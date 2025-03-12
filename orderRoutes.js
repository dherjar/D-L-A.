
// Order Routes
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/create', async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json({ message: 'Order placed successfully' });
});

module.exports = router;
