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
          Hello, I&apos;m <span className="accent">Nathalie</span>
        </h1>
        <h3 className="Banner-title_sub">
          ★<span className="Banner-title_star secondary">★</span>★
        </h3>
        <h3 className="Banner-title_intro">
          I&apos;m a <span className="accent">front-end developper</span> and
          this is my <span className="secondary"> portfolio</span>
        </h3>
        <Link className="button" to="/about">
          Come visit!
        </Link>
      </div>
    </div>
  );
}

export default Banner;
