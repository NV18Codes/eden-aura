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
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';

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
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/landscaping" element={<Landscaping />} />
                    <Route path="/services/workshop" element={<Workshop />} />
                    <Route path="/services/gifting" element={<Gifting />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="create-category" element={<CreateCategory />} />
                        <Route path="create-product" element={<CreateProduct />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
            <CartModal />
            <UserAuthModal />
        </Router>
    );
}

export default App;
