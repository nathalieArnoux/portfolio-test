import './Banner.scss';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="Banner">
      <img
        className="Banner-img"
        src="src\assets\banner2.png"
        alt="Placeholder"
      />
      <div className="Banner-title">
        <h1 className="Banner-title_hello">
          Hello, I&apos;m <span className="Banner-title_name">Nathalie</span>
        </h1>
        <h2 className="Banner-title_sub">
          ★<span className="Banner-title_star">★</span>★
        </h2>
        <h3 className="Banner-title_intro">
          I&apos;m a{' '}
          <span className="Banner-title_dev">front-end developper</span> and
          this is my <span className="Banner-title_portfolio"> portfolio</span>
        </h3>
        <Link className="Banner-title_button" to="/about">
          Come visit!
        </Link>
      </div>
    </div>
  );
}

export default Banner;
