import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './About.scss';

import aboutData from './About_data';

const ContentNav = () => {
  return (
    <ul className="About-nav">
      {aboutData.map((section) => {
        return (
          <li key={section.hash}>
            <NavHashLink to={`/about#${section.hash}`}>
              {section.name}
            </NavHashLink>
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
      <ul>
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
        {/* Conclude with a call to action: Encourage visitors to explore your projects, resume, and get in touch.
        If you have received positive feedback from clients or collaborators, you could include a section for testimonials. */}
      </ul>
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
