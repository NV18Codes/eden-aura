import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('Header useEffect storedUser:', storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    function handleStorageChange() {
      const updatedUser = localStorage.getItem('user');
      console.log('Header storage event updatedUser:', updatedUser);
      if (updatedUser) {
        setUser(JSON.parse(updatedUser));
      } else {
        setUser(null);
      }
    }
    window.addEventListener('storage', handleStorageChange);

    // Poll localStorage every 1 second to detect changes in same tab
    const intervalId = setInterval(() => {
      const currentUser = localStorage.getItem('user');
      setUser(currentUser ? JSON.parse(currentUser) : null);
    }, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get('/api/v1/category/getAll-category');
        if (data.success) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };
    fetchCategories();
  }, []);

  const navLinkClass = ({ isActive }) =>
    "nav-item nav-link" + (isActive ? " active" : "");

  return (
    <>
      <style>{`
        .nav-link {
          margin-left: 1rem;
          margin-right: 1rem;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
        }
        .nav-link.active {
          color: #348E38 !important;
          font-weight: 600;
        }
        .cart-icon {
          margin-right: 0.5rem;
          font-size: 1.2rem;
        }
        .dropdown-menu {
          min-width: 10rem;
        }
      `}</style>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 shadow-sm">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img style={{ height: '5rem' }} src="img/Edenaura_png-01logo.png" alt="EdenAura Logo" />
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
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/products" className={navLinkClass}>
                Products
              </NavLink>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                  {categories.length === 0 && (
                    <li className="dropdown-item text-muted">Loading...</li>
                  )}
                  {categories.map((category) => (
                    <li key={category._id}>
                      <NavLink
                        to={`/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="dropdown-item"
                      >
                        {category.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <NavLink to="/services/landscaping" className="dropdown-item">
                      Landscaping
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/workshop" className="dropdown-item">
                      Workshop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/gifting" className="dropdown-item">
                      Gifting
                    </NavLink>
                  </li>
                </ul>
              </div>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
              <NavLink to="/cart" className={({ isActive }) => navLinkClass({ isActive }) + " position-relative"}>
                <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
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
              {user ? (
                <NavLink to="/userinfo" className={navLinkClass} end>
                  <i className="fa fa-user"></i> Profile
                </NavLink>
              ) : (
                <NavLink to="/signin" className={navLinkClass} end>
                  <i className="fa fa-user"></i> Sign In
                </NavLink>
              )}
            </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
