import './Banner.scss';

function Banner() {
  return (
    <div className="Banner">
      <img
        className="Banner-img"
        src="src\assets\banner2.png"
        alt="Placeholder"
      />
      <div className="Banner-title">
        <h1 className="Banner-title_hello">Hello!</h1>
        <h2 className="Banner-title_intro">
          I&apos;m <span className="Banner-title_name">Lyn</span>, welcome to my
          <span className="Banner-title_star"> portfolio</span> ★
        </h2>
      </div>
    </div>
  );
}

export default Banner;
