import React, { useState } from 'react';
import ProductDetailsPopup from './ProductDetailsPopup';

const ProductCard = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product-card">
      <div onClick={() => setShowDetails(true)} className="product-card-content">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {showDetails && (
        <ProductDetailsPopup product={product} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
};

export default ProductCard;