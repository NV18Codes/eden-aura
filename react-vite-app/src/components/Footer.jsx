import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">EdenAura</h5>
            <p>
              Transforming homes into green sanctuaries with expert landscaping and garden design.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/" className="text-dark">Home</a></li>
              <li><a href="/products" className="text-dark">Products</a></li>
              <li><a href="/cart" className="text-dark">Cart</a></li>
              <li><a href="/signin" className="text-dark">Sign In</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>Email: info@edenaura.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Garden St, Green City</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
        &copy; {new Date().getFullYear()} EdenAura. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
