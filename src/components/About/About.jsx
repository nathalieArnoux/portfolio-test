import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import './About.scss';

import aboutData from './About_data';

const ContentNav = () => {
  const { hash } = useLocation();
  const scrollWithOffset = (el) =>
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 90,
      behavior: 'smooth',
    });
  return (
    <ul className="About-nav">
      {aboutData.map((section) => {
        const isActive = hash === `#${section.hash}`;
        return (
          <li key={section.hash}>
            <HashLink
              to={`#${section.hash}`}
              scroll={scrollWithOffset}
              className={isActive ? 'active' : ''}
            >
              {section.name}
            </HashLink>
          </li>
        );
      })}
    </ul>
  );
};

const About = () => {
  return (
    <div className="About">
      <h2 className="About-title">About</h2>
      <ContentNav />
      <img
        className="About-img"
        src="src\assets\old\Placeholder.png"
        alt="placeholder"
      />
      <ul className="About-content">
        {aboutData.map((section) => {
          return (
            <li key={section.hash}>
              <h3 id={section.hash}>{section.name}</h3>
              <div>
                {section.content.map((content) => {
                  const Tag = content.tag;
                  return <Tag key={content.id}>{content.text}</Tag>;
                })}
              </div>
            </li>
          );
        })}
        {/* If you have received positive feedback from clients or collaborators, you could include a section for testimonials. */}
      </ul>
      <div>
        <h2 className="About-call">Feeling curious?</h2>
      </div>
      <div className="About-action">
        <button className="button" type="button" to="/about">
          Check resume
        </button>
        <button className="button" type="button" to="/about">
          Browse projects
        </button>
      </div>
    </div>
  );
};

export default About;
