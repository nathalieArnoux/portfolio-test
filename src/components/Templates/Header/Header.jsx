import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <img
        className="Header_logo"
        src="src\assets\Logo-short2.png"
        alt="Logo Lyndalis"
      />
      <nav className="Header-nav">
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
      </nav>
    </header>
  );
}

export default Header;
