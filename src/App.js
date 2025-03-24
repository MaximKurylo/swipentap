import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import TikTokPage from './pages/TikTokPage';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { 
      id: 1, 
      name: 'Emerald Evening Dress',
      description: 'A stunning emerald green evening dress, perfect for formal events. Made from high-quality satin with a flowing silhouette.',
      image: 'https://images.pexels.com/photos/31270808/pexels-photo-31270808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
      price: '120,99€' 
    },
    { 
      id: 2, 
      name: 'White Casual T-Shirt',
      description: 'A comfortable white T-shirt made from 100% cotton. Ideal for everyday wear with a relaxed fit.',
      image: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1200', 
      price: '129€' 
    },
    { 
      id: 3, 
      name: 'Red Button-Up Dress',
      description: 'A chic red dress with button details, perfect for both casual and semi-formal occasions. Made from breathable fabric.',
      image: 'https://images.pexels.com/photos/1377451/pexels-photo-1377451.jpeg?auto=compress&cs=tinysrgb&w=1200', 
      price: '200€' 
    },
    { 
      id: 4, 
      name: 'White Dress Shirt',
      description: 'A classic white dress shirt, ideal for formal settings. Made from crisp cotton with a tailored fit.',
      image: 'https://images.pexels.com/photos/3214769/pexels-photo-3214769.jpeg?auto=compress&cs=tinysrgb&w=1200', 
      price: '89€' 
    },
    { 
      id: 5, 
      name: 'Streetwear T-Shirt',
      description: 'A trendy streetwear T-shirt with a bold design. Perfect for casual outings, made from soft cotton.',
      image: 'https://images.pexels.com/photos/5586488/pexels-photo-5586488.jpeg?auto=compress&cs=tinysrgb&w=1200', 
      price: '50€' 
    },
    { 
      id: 6, 
      name: 'Green Sleeveless Top',
      description: 'A stylish green sleeveless top, great for summer. Made from lightweight fabric with a flattering cut.',
      image: 'https://images.pexels.com/photos/17243615/pexels-photo-17243615.jpeg?auto=compress&cs=tinysrgb&w=1200', 
      price: '69€' 
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/tiktok" element={<TikTokPage products={products} addToCart={addToCart} />} />
        </Routes>
        {showCart && (
          <div className="cart-popup-overlay">
            <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} />
          </div>
        )}
        <Navbar setShowCart={setShowCart} cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      </div>
    </Router>
  );
};

export default App;