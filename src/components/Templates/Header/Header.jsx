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
      <img
        className="Header_logo"
        src="src\assets\Logo-short2.png"
        alt="Logo Lyndalis"
      />
      <nav className={`Header-nav ${isMobileOnly ? 'mobile' : ''}`}>
        {!isMobileOnly ? (
          <ul className="Header-nav_list">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Resume</NavLink>
            </li>
            <li>
              <NavLink>Projects</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
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
