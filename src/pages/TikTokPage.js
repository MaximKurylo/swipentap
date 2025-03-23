import React, { useEffect, useRef, useState } from 'react';
import TikTokProductCard from '../components/TikTokProductCard';

const TikTokPage = ({ products, addToCart }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Оновлення індексу при скролі
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollPosition = container.scrollTop;
        const itemHeight = container.clientHeight;
        const newIndex = Math.round(scrollPosition / itemHeight);
        setCurrentIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="tiktok-page" ref={containerRef}>
      {products.map((product, index) => (
        <div key={product.id} className="tiktok-product-wrapper">
          <TikTokProductCard product={product} addToCart={addToCart} />
        </div>
      ))}
      <div className="tiktok-indicator">
        {products.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TikTokPage;