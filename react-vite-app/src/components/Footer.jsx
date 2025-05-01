import React from 'react';

function Footer() {
  return (
    <footer
      className="text-light text-center text-lg-start mt-auto"
      style={{ backgroundColor: '#0F4229' }} // Dark gray background
    >
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">EdenAura</h5>
            <p>
              Transforming homes into green sanctuaries with expert landscaping and garden design.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="/signin" className="text-light text-decoration-none">Sign In</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li><i class="fa fa-envelope me-3"></i>
                        <a href="mailto:Edenaurraea@gmail.com"
                            class="text-light text-decoration-none">Edenaurraea@gmail.com</a></li>
              <li>Phone: 7204450133</li>
              <li>Phone: 8778108278</li>
              <li>Address:6th Main Appareddy Palya, Near Yallamma Templeallamma Temple
Indiranagar, Bengaluru.
</li>
<li>District: Bengaluru Urban</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: '#0F4229' }} // Slightly darker bottom bar
      >
        &copy; {new Date().getFullYear()} EdenAura. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
