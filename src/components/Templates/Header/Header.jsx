import './Header.scss';
import { NavLink } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
      <button className="hamburger-button" type="button" onClick={toggleMenu}>
        <span>
          <i className="ri-menu-line" />
        </span>
      </button>
      {menuOpen && (
        <ul className="menu-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="Header">
      <NavLink className="Header-logo" to="/">
        <img
          className="Header-logo_img"
          src="src\assets\Logo-short2.png"
          alt="Logo Lyndalis"
        />
      </NavLink>
      <nav className={`Header-nav ${isMobileOnly ? 'mobile' : ''}`}>
        {!isMobileOnly ? (
          <ul className="Header-nav_list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        ) : (
          <HamburgerMenu />
        )}
      </nav>
    </header>
  );
};

export default Header;
