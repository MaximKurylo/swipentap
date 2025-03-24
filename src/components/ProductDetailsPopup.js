import React, { useEffect } from 'react';

const ProductDetailsPopup = ({ product, onClose }) => {
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
    if (e.target.classList.contains('product-details-popup-overlay')) {
      onClose();
    }
  };

  return (
    <div className="product-details-popup-overlay" onClick={handleOverlayClick}>
      <div className="product-details-popup">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetailsPopup;