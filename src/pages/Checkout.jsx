import React, { useState, useEffect } from 'react';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cartTotal, setCartTotal] = useState(0);
  const [additionalCharges, setAdditionalCharges] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    // Load cart total from localStorage or calculate
    try {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const total = storedCart.reduce((acc, item) => {
        if (item.price && item.quantity) {
          const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
          if (!isNaN(priceNumber)) {
            return acc + priceNumber * item.quantity;
          }
        }
        return acc;
      }, 0);
      setCartTotal(total);
      // Example additional charges: 5% tax + ₹10 shipping
      const charges = total * 0.05 + 10;
      setAdditionalCharges(charges);
    } catch (error) {
      setCartTotal(0);
      setAdditionalCharges(0);
    }
  }, []);

  useEffect(() => {
    const payable = cartTotal + additionalCharges - couponDiscount;
    setTotalPayable(payable > 0 ? payable : 0);
  }, [cartTotal, additionalCharges, couponDiscount]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const applyCoupon = () => {
    // Simple coupon logic: if couponCode is 'DISCOUNT10', give ₹10 discount
    if (couponCode.trim().toUpperCase() === 'DISCOUNT10') {
      setCouponDiscount(10);
      alert('Coupon applied: ₹10 discount');
    } else {
      setCouponDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    alert(`Payment method ${paymentMethod} selected. Total payable: ₹${totalPayable.toFixed(2)}. Proceeding with payment...`);
    // Implement payment processing logic here
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Checkout</h1>
      <div className="mb-3">
        <h5>Cart Total: ₹{cartTotal.toFixed(2)}</h5>
        <h5>Additional Charges (Tax + Shipping): ₹{additionalCharges.toFixed(2)}</h5>
        <h5>Coupon Discount: ₹{couponDiscount.toFixed(2)}</h5>
        <h4>Total Payable: ₹{totalPayable.toFixed(2)}</h4>
      </div>
      <div className="mb-3">
        <table className="table">
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={handleCouponChange}
                />
              </td>
              <td>
                <button className="btn btn-secondary" type="button" onClick={applyCoupon}>
                  Apply Coupon
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Select Payment Method</label>
          <select className="form-select" value={paymentMethod} onChange={handlePaymentChange} required>
            <option value="">-- Select --</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="net_banking">Net Banking</option>
            <option value="upi">UPI</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Pay Now</button>
      </form>
    </div>
  );
}

export default Checkout;
