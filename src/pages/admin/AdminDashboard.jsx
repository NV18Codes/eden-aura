import React, { useContext } from 'react';
import { AdminContext } from './AdminContext';

const AdminDashboard = () => {
  const { user } = useContext(AdminContext);

  return (
    <div className="admin-dashboard container">
      <h1>Admin Dashboard</h1>
      {user ? (
        <div className="user-info">
          <h2>Logged in as:</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
