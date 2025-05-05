import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Product A', price: '₹29.99' },
  { id: 2, name: 'Product B', price: '₹39.99' },
  { id: 3, name: 'Product C', price: '₹24.99' },
  { id: 4, name: 'Product D', price: '₹49.99' },
  { id: 5, name: 'Product E', price: '₹19.99' },
  { id: 6, name: 'Product F', price: '₹59.99' },
  { id: 7, name: 'Product G', price: '₹34.99' },
  { id: 8, name: 'Product H', price: '₹44.99' },
  { id: 9, name: 'Product I', price: '₹29.99' },
  { id: 10, name: 'Product J', price: '₹39.99' },
  { id: 11, name: 'Product K', price: '₹24.99' },
  { id: 12, name: 'Product L', price: '₹49.99' },
  { id: 13, name: 'Product M', price: '₹19.99' },
  { id: 14, name: 'Product N', price: '₹59.99' },
  { id: 15, name: 'Product O', price: '₹34.99' },
  { id: 16, name: 'Product P', price: '₹44.99' }
];

function Products() {
  const [favorites, setFavorites] = useState([]);
  const [quantities, setQuantities] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const incrementQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantities[product.id];
    } else {
      cart.push({ ...product, quantity: quantities[product.id] });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event("storage")); // trigger header update
  };

  return (
    <section className="container my-5">

      <h2 className="mb-4 text-center">Our Products</h2>
      <div className="row">
        {productsData.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="product-card text-center p-3 border rounded shadow-sm">
              <div className="product-img d-flex align-items-center justify-content-center bg-light rounded mb-3" style={{ height: '200px' }}>
                <img
                  src="https://via.placeholder.com/150"
                  alt={product.name}
                  className="img-fluid"
                />
              </div>
              <h5 className="product-name">{product.name}</h5>
              <p className="text-muted">{product.price}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="input-group input-group-sm w-50">
                  <button className="btn btn-outline-secondary" onClick={() => decrementQuantity(product.id)} disabled={quantities[product.id] <= 1}>-</button>
                  <input type="text" className="form-control text-center" value={quantities[product.id]} readOnly />
                  <button className="btn btn-outline-secondary" onClick={() => incrementQuantity(product.id)}>+</button>
                </div>
                <button className="btn btn-success btn-sm w-50 ms-2" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
                <button
                  className={`btn-fav btn btn-link p-0 ms-2 ${favorites.includes(product.id) ? 'text-danger' : 'text-muted'}`}
                  onClick={() => toggleFavorite(product.id)}
                  title="Add to Favorites"
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
