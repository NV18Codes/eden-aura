import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
        &copy; {new Date().getFullYear()} EdenAura. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
