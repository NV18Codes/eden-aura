import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    function updateCartCount() {
      let cart = [];
      try {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
      } catch {
        cart = [];
      }

      const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(totalCount);
    }

    updateCartCount();

    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 shadow-sm">
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img style={{ height: '5rem' }} src="/img/Edenaura_png-01logo.png" alt="EdenAura Logo" />
      </Link>
      <button
        className="navbar-toggler me-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/" className="nav-item nav-link" end>
            Home
          </NavLink>
          <NavLink to="/products" className="nav-item nav-link">
            Products
          </NavLink>
          <NavLink to="/cart" className="nav-item nav-link position-relative">
            Cart
            {cartCount > 0 && (
              <span
                className="position-absolute badge rounded-pill bg-danger"
                style={{ fontSize: '0.75rem', top: '1rem', right: '0.5rem' }}
              >
                {cartCount}
              </span>
            )}
          </NavLink>
          <NavLink to="/signin" className="nav-item nav-link">
            <i className="fa fa-user"></i> Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
