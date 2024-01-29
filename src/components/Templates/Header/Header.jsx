import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <NavLink className="Header-logo" to="/">
        <img
          className="Header-logo_img"
          src="src\assets\Logo-short2.png"
          alt="Logo Lyndalis"
        />
      </NavLink>
      <nav className="Header-nav">
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
      </nav>
    </header>
  );
}

export default Header;
