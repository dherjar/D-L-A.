
// Product Schema
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    category: String,
    priceINR: Number,
    priceOres: Number,
    stock: Number,
    description: String,
    image: String
});

module.exports = mongoose.model('Product', ProductSchema);
