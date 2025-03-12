
// Main React app component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import WalletPage from './pages/WalletPage';
import OrdersPage from './pages/OrdersPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wallet" element={<WalletPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
