import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import CartModal from './components/CartModal';
import UserAuthModal from './components/UserAuthModal';

function App() {
    return (
        <Router>
            <Header />
            <main className="container my-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </main>
            <Footer />
            <CartModal />
            <UserAuthModal />
        </Router>
    );
}

export default App;
