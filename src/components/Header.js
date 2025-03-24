import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import searchIcon from '../assets/search.png';

const Header = ({ setShowSearch }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <span onClick={() => setShowMenu(true)} className="header-menu" aria-label="Меню">
        <FaBars className="header-menu-icon" />
      </span>
      <h1>YOUSWIPE</h1>
      <span onClick={() => setShowSearch(true)} className="header-search" aria-label="Пошук">
        <img src={searchIcon} alt="Пошук" className="icono" />
      </span>
      {showMenu && (
        <div className={`sidebar ${showMenu ? 'active' : ''}`}>
          <div className="sidebar-header">
            <h2>Menu</h2>
            <button onClick={() => setShowMenu(false)} className="sidebar-close">
              ✕
            </button>
          </div>
          <ul className="sidebar-menu">
            <li>
              <a href="/" onClick={() => setShowMenu(false)}>Home</a>
            </li>
            <li>
              <a href="/tiktok" onClick={() => setShowMenu(false)}>TikTok Page</a>
            </li>
            <li>
              <a href="/profile" onClick={() => setShowMenu(false)}>Profile</a>
            </li>
            <li>
              <a href="#" onClick={() => setShowMenu(false)}>Settings</a>
            </li>
          </ul>
        </div>
      )}
      {showMenu && <div className="sidebar-overlay" onClick={() => setShowMenu(false)} />}
    </header>
  );
};

export default Header;