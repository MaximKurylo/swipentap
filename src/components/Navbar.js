import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from "../assets/home.png";
import searchIcon from "../assets/search.png"; // Лупа
import dropdownIcon from "../assets/dropdown.png"; // Стрілка вниз
import cartIcon from "../assets/cart.png"; // Кошик
import userIcon from "../assets/user.png"; // Логін

const Navbar = ({ setShowCart, setShowSearch, cartCount }) => {
  return (
    <div className="navbar">
      <Link to="/" aria-label="Головна">
        <img src={homeIcon} alt="Головна" className="icon" />
      </Link>
      <span onClick={() => setShowSearch(true)} aria-label="Пошук">
        <img src={searchIcon} alt="Пошук" className="icon" />
      </span>
      <Link to="/tiktok" aria-label="Меню">
        <img src={dropdownIcon} alt="Меню" className="icon" />
      </Link>
      <span onClick={() => setShowCart(true)} aria-label="Кошик">
        <img src={cartIcon} alt="Кошик" className="icon" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </span>
      <Link to="/profile" aria-label="Профіль">
        <img src={userIcon} alt="Профіль" className="icon" />
      </Link>
    </div>
  );
};

export default Navbar;