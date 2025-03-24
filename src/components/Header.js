import React from 'react';
import searchIcon from "../assets/search.png"; // Лупа

const Header = ({ setShowSearch }) => {
  return (
    <div className="header">
      <span className="menu-icon">☰</span>
      <h1>YOUSWIPE</h1>
      <span onClick={() => setShowSearch(true)} aria-label="Пошук">
        <img src={searchIcon} alt="Пошук" className="icono" />
      </span>
    </div>
  );
};

export default Header;