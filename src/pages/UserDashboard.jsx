import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_CHANGE_PASSWORD_URL = 'https://apiedenaura-production-b3d4.up.railway.app/api/v1/auth/change-password';

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
    // TODO: Fetch user orders from API if available
    setOrders([]); // Empty for now
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPasswordError('');
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setPasswordError('Please fill all password fields.');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }
    setPasswordLoading(true);
    try {
      // Example API call to change password
      const { data } = await axios.post(API_CHANGE_PASSWORD_URL, {
        email: user.email,
        currentPassword,
        newPassword,
      });
      if (data.success) {
        toast.success('Password changed successfully.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        setPasswordError(data.message || 'Password change failed.');
      }
    } catch (error) {
      setPasswordError(error.response?.data?.message || 'Password change failed.');
    } finally {
      setPasswordLoading(false);
    }
  };

  if (!user) {
    return <div className="container my-5"><h2>Please sign in to view your dashboard.</h2></div>;
  }

  return (
    <div className="container my-5">
      <h1>User Dashboard</h1>
      <section className="mb-5">
        <h3>Profile Information</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
        <p><strong>Address:</strong> {user.address || 'N/A'}</p>
      </section>

      <section className="mb-5">
        <h3>Your Orders</h3>
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                Order #{order.id} - {order.status} - ₹{order.total.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordChange}>
          <div className="mb-3">
            <label className="form-label">Current Password</label>
            <input
              type="password"
              className="form-control"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          {passwordError && <div className="text-danger mb-3">{passwordError}</div>}
          <button type="submit" className="btn btn-primary" disabled={passwordLoading}>
            {passwordLoading ? 'Changing Password...' : 'Change Password'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default UserDashboard;
