import './Home.scss';
// import Banner from './Banner/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <img
        className="Home-img"
        src="src\assets\banner2.png"
        alt="Placeholder"
      />
      <div className="Home-title">
        <h1 className="Home-title_hello">
          ~ Hello, I&apos;m <span className="accent">Nathalie</span> ~
        </h1>
        <h3 className="Home-title_sub">
          ★<span className="Home-title_star secondary">★</span>★
        </h3>
        <h3 className="Home-title_intro">
          I&apos;m a <span className="accent">front-end developper</span> and
          this is my <span className="secondary"> portfolio</span>
        </h3>
        <Link className="button" to="/about">
          Come visit!
        </Link>
      </div>
    </div>
  );
};

export default Home;
