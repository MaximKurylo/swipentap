import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import TikTokProductCard from '../components/TikTokProductCard';

const TikTokPage = ({ products, addToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обробка свайпів
  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (currentIndex < products.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedDown: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
    trackMouse: true, // Для тестування на десктопі
  });

  return (
    <div className="tiktok-page" {...handlers}>
      <TikTokProductCard product={products[currentIndex]} addToCart={addToCart} />
      {/* Індикатор, який показує, на якому товарі ми знаходимося */}
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