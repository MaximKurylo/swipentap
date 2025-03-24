import React, { useState } from 'react';
import ProductDetailsPopup from './ProductDetailsPopup';

const TikTokProductCard = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="tiktok-product-card">
      <div onClick={() => setShowDetails(true)} className="tiktok-product-content">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div className="tiktok-product-info">
          <p>{product.price}</p>
          <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
            Add to Cart
          </button>
        </div>
      </div>
      {showDetails && (
        <ProductDetailsPopup product={product} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
};

export default TikTokProductCard;