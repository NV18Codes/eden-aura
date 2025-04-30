import React from 'react';

function CartModal() {
  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">Your Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div id="cartItemsContainer">
              {/* Cart items will be dynamically inserted here */}
            </div>
            <div className="mt-3 text-end">
              <strong>Total: $<span id="cartTotal">0.00</span></strong>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
            <button type="button" className="btn btn-primary" id="checkoutBtn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
