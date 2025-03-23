import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, addToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;