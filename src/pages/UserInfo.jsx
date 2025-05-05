import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const API_CHANGE_PASSWORD_URL = 'https://apiedenaura-production-b3d4.up.railway.app/api/v1/auth/change-password';
const API_GET_ORDERS_URL = 'https://apiedenaura-production-b3d4.up.railway.app/api/v1/orders/user';

function UserInfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'orders', 'settings'

  // Profile fields
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Settings fields for password change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);

  const [settingsMessage, setSettingsMessage] = useState('');
  const [settingsLoading, setSettingsLoading] = useState(false);

  useEffect(() => {
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (userStr) {
      const userObj = JSON.parse(userStr);
      setUser(userObj);
      setName(userObj.name || '');
      setMobile(userObj.phone || '');
      setEmail(userObj.email || '');
      setAddress(userObj.address || '');
      fetchOrders(userObj.email);
    }
  }, []);

  const fetchOrders = async (email) => {
    try {
      const { data } = await axios.get(`${API_GET_ORDERS_URL}?email=${encodeURIComponent(email)}`);
      if (data.success) {
        setOrders(data.orders);
      } else {
        setOrders([]);
      }
    } catch (error) {
      setOrders([]);
      console.error('Failed to fetch orders', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    setUser(null);
    navigate('/signin');
  };

  const handleSettingsSave = async (e) => {
    e.preventDefault();
    setSettingsMessage('');
    setSettingsLoading(true);
    try {
      const { data } = await axios.put('/api/v1/auth/update-profile', {
        email: user.email,
        name,
        phone: mobile,
        address,
      });
      if (data.success) {
        setSettingsMessage('Settings updated successfully.');
        const updatedUser = { ...user, name, phone: mobile, address };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        setSettingsMessage('Failed to update settings.');
      }
    } catch (error) {
      setSettingsMessage('Failed to update settings.');
    } finally {
      setSettingsLoading(false);
    }
  };

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
    return <div className="container my-5"><h2>Please sign in to view your profile.</h2></div>;
  }

  return (
    <div className="container my-5">
      <h1>User Dashboard</h1>
      <div className="mb-3">
        <button className="btn btn-secondary me-2" onClick={() => setActiveTab('profile')} disabled={activeTab === 'profile'}>
          Profile
        </button>
        <button className="btn btn-secondary me-2" onClick={() => setActiveTab('orders')} disabled={activeTab === 'orders'}>
          Your Orders
        </button>
        <button className="btn btn-secondary" onClick={() => setActiveTab('settings')} disabled={activeTab === 'settings'}>
          Settings
        </button>
        <button className="btn btn-danger float-end" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className="card p-4 mb-4">
          <h3>Profile Information</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Mobile Number:</strong> {mobile}</p>
          <p><strong>Email ID:</strong> {email}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="card p-4 mb-4">
          <h3>Your Orders</h3>
          {orders.length === 0 ? (
            <div>
              <p>You have no orders yet. Start shopping now!</p>
              <button className="btn btn-primary" onClick={() => navigate('/products')}>
                Go to Products
              </button>
            </div>
          ) : (
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  Order #{order.id} - {order.status} - ₹{order.total.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="card p-4 mb-4">
          <h3>Update Profile</h3>
          <form onSubmit={handleSettingsSave}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            {settingsMessage && <div className="mb-3 text-success">{settingsMessage}</div>}
            <button type="submit" className="btn btn-primary" disabled={settingsLoading}>
              {settingsLoading ? 'Saving...' : 'Update Profile'}
            </button>
          </form>

          <hr />

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
        </div>
      )}
    </div>
  );
}

export default UserInfo;
