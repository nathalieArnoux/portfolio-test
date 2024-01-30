import './Header.scss';
import { NavLink } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';
import { useState } from 'react';

// list of navigation links, to avoid repetition
const Links = () => {
  return (
    <>
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
    </>
  );
};

// hamburger menu, to better display menu on smartphones
const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
      <button className="hamburger-button" type="button" onClick={toggleMenu}>
        <i className="ri-menu-line" />
      </button>
      {menuOpen && (
        <ul className="menu-items">
          <Links />
        </ul>
      )}
    </div>
  );
};

// whole header, containing logo and nav links / nav menu
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
            <Links />
          </ul>
        ) : (
          <HamburgerMenu />
        )}
      </nav>
    </header>
  );
};

export default Header;
