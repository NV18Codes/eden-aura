
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items from localStorage or API
    try {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      if (Array.isArray(storedCart)) {
        setCartItems(storedCart);
      }
    } catch (error) {
      console.error("Error loading cart items:", error);
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => {
      if (item.price && item.quantity) {
        const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, '')); // Strips out non-numeric characters
        if (!isNaN(priceNumber)) {
          return acc + priceNumber * item.quantity;
        }
      }
      return acc;
    }, 0);
    setTotal(totalPrice.toFixed(2));
  }, [cartItems]);

  const handleCheckout = () => {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Please sign in to proceed to checkout.');
      navigate('/signin');
    } else {
      navigate('/checkout');
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
    setTotal(0);
    localStorage.removeItem('cartItems');
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Your Shopping Cart</h1>
      <div id="cartItemsContainer" className="mb-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 border rounded p-3">
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: {item.price}</div>
            </div>
          ))
        )}
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
      <h4>Total: ₹{total}</h4>
      </div>
      <div className="d-flex gap-3">
        <Link to="/products" className="btn btn-secondary">Continue Shopping</Link>
        <button id="checkoutBtn" className="btn btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
        <button id="clearCartBtn" className="btn btn-danger" onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
}

export default Cart;
