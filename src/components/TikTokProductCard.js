import React from 'react';

const TikTokProductCard = ({ product, addToCart }) => {
  return (
    <div className="tiktok-product-card">
      <img src={product.image} alt="Product" />
      <div className="tiktok-product-info">
        <p>{product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default TikTokProductCard;