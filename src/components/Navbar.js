import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowCart, cartCount }) => {
  return (
    <div className="navbar">
      <Link to="/">
      <span>⌂</span>
      </Link>

      <span>🔍</span>
      <Link to="/tiktok">
      <span>⌄</span>
      </Link>
      <span onClick={() => setShowCart(true)}>
      🗑  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </span>
      <span>👤</span>
    </div>
  );
};

export default Navbar;