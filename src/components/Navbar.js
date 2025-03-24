import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from "../assets/home.png";
import searchIcon from "../assets/search.png"; // Лупа
import dropdownIcon from "../assets/dropdown.png"; // Стрілка вниз
import cartIcon from "../assets/cart.png"; // Кошик
import userIcon from "../assets/user.png"; // Логін
const Navbar = ({ setShowCart, cartCount }) => {
  return (
    <div className="navbar">
      <Link to="/" aria-label="Головна">
      <img src={homeIcon} alt="Головна" className="icon" />
      </Link>
      <img src={searchIcon} alt="Пошук" />
      <Link to="/tiktok" aria-label="Меню">
      <img src={dropdownIcon} alt="Меню" className="icon" />
      </Link>
      <Link>
      <span onClick={() => setShowCart(true)}
        aria-label="Кошик">
         <img src={cartIcon} alt="Кошик" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </span>
        </Link>
      <Link>
        <img src={userIcon} alt="Профіль" />
        </Link>
    </div>
  );
};

export default Navbar;