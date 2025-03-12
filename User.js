
// User Schema
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    oauthProvider: String,
    oauthId: String,
    wallet: [{ bankName: String, cardNumber: String, pin: String, balance: Number }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
