import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const SearchPopup = ({ products, addToCart, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Фільтрація товарів за запитом
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Закриття на Esc
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Закриття при кліку поза вікном
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('search-popup-overlay')) {
      onClose();
    }
  };

  return (
    <div className="search-popup-overlay" onClick={handleOverlayClick}>
      <div className="search-popup">
        <h2>Search Products</h2>
        <input
          type="text"
          placeholder="Enter product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SearchPopup;