import React from "react";
import { AdminProvider } from "./AdminContext";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <AdminProvider>
      <div className="admin-layout container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/admin/dashboard">Admin Dashboard</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/create-category">Create Category</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/create-product">Create Product</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </AdminProvider>
  );
};

export default AdminLayout;
