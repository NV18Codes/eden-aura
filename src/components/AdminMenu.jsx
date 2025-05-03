import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <div className="admin-menu p-3 bg-light" style={{ minHeight: '100vh' }}>
      <h4>Admin Menu</h4>
      <ul className="list-unstyled">
        <li>
          <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/create-category" className="nav-link">Create Category</Link>
        </li>
        <li>
          <Link to="/admin/create-product" className="nav-link">Create Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
