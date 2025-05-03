import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
  });

  const addCategory = (category) => {
    setCategories((prev) => [...prev, category]);
  };

  return (
    <AdminContext.Provider value={{ categories, addCategory, user }}>
      {children}
    </AdminContext.Provider>
  );
};
