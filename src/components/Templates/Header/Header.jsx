import './Header.scss';
import { NavLink } from 'react-router-dom';
import { isMobileOnly } from 'react-device-detect';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// list of navigation links, to avoid repetition
const Links = ({ handler }) => {
  const tabs = ['about', 'resume', 'projects', 'contact'];
  return (
    <>
      <li>
        <NavLink to="/" onClick={handler}>
          Home
        </NavLink>
      </li>
      {tabs.map((page) => {
        return (
          <li key={page}>
            <NavLink to={`/${page}`} onClick={handler}>
              {page}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

// hamburger menu, to better display menu on smartphones
const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // handler for outside click
  const handleClickOutside = (evt) => {
    if (menuRef.current && !menuRef.current.contains(evt.target)) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    // event listener for open menu
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside, true);
      document.addEventListener('scroll', handleClickOutside, true);
    }

    // event listener cleaner
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);

  return (
    <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
      <button className="hamburger-button" type="button" onClick={toggleMenu}>
        {!isMenuOpen ? (
          <i className="ri-menu-line" />
        ) : (
          <i className="ri-close-circle-line" />
        )}
      </button>
      {isMenuOpen && (
        <ul className="menu-items">
          <Links handler={toggleMenu} />
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

Links.propTypes = {
  handler: PropTypes.func,
};

Links.defaultProps = {
  handler: null,
};

export default Header;
