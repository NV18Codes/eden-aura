import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import ServicesPage from './pages/ServicesPage';
import CartModal from './components/CartModal';
import UserAuthModal from './components/UserAuthModal';

// Import the service components
import Landscaping from './components/landscaping';
import Workshop from './components/Workshop';
import Gifting from './components/Gifting';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import UserDashboard from './pages/UserDashboard';
import UserInfo from './pages/UserInfo';

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
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/dashboard" element={<UserDashboard />} />
                    <Route path="/userinfo" element={<UserInfo />} />
                    {/* Removed admin-dashboard route because AdminDashboard component is missing */}
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/landscaping" element={<Landscaping />} />
                    <Route path="/services/workshop" element={<Workshop />} />
                    <Route path="/services/gifting" element={<Gifting />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
            <CartModal />
            <UserAuthModal />
        </Router>
    );
}

export default App;
