import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <img
        className="Header_logo"
        src="src\assets\Logo-short.png"
        alt="Logo Lyndalis"
      />
      <ul className="Header_list">
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
