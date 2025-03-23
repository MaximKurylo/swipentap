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
    { id: 1, image: 'https://images.pexels.com/photos/24740628/pexels-photo-24740628.jpeg?auto=compress&cs=tinysrgb&w=1200', price: '120,996€' },
    { id: 2, image: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1200', price: '120,996€' },
    { id: 3, image: 'https://images.pexels.com/photos/1377451/pexels-photo-1377451.jpeg?auto=compress&cs=tinysrgb&w=1200', price: '120,996€' },
    { id: 4, image: 'https://images.pexels.com/photos/3214769/pexels-photo-3214769.jpeg?auto=compress&cs=tinysrgb&w=1200', price: '120,996€' },
    { id: 5, image: 'https://images.pexels.com/photos/5586488/pexels-photo-5586488.jpeg?auto=compress&cs=tinysrgb&w=1200', price: '120,996€' },
    { id: 6, image: 'https://images.pexels.com/photos/17243615/pexels-photo-17243615.jpeg?auto=compress&cs=tinysrgb&w=1200', price: '120,996€' },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Шукаємо, чи є товар уже в кошику
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (existingItem) {
        // Якщо товар уже є, збільшуємо кількість
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Якщо товару немає, додаємо його з кількістю 1
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