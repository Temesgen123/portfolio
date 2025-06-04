import React from 'react';
import './About.css';
import ProfilePhoto from '../../assets/profilephoto3.png';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={ProfilePhoto} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate Full-Stack Developer with experience in building
              dynamic and responsive web applications using React.js and
              Node.js. I enjoy solving complex problems and turning ideas into
              reality with clean and efficient code. With a strong foundation in
              front-end and back-end technologies, I thrive on delivering
              seamless digital experiences.
            </p>
          </div>
          <div className="about-skills">
            <h2 className="skills-title">Skills</h2>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '65%' }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '55%' }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: '55%' }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: '55%' }} />
            </div>
            <div className="about-skill">
              <p>ExpressJS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>Next.js</p>
              <hr style={{ width: '55%' }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="related-technologies">
        <div className="technology">
          <h3>Languages</h3>
          <p>C++</p>
          <p>Pyhton</p>
        </div>
        <hr />
        <div className="technology">
          <h3>Databases</h3>
          <p>SQL Server</p>
          <p>MySQL</p>
        </div>
        <hr />
        <div className="technology">
          <h3>Version Control</h3>
          <p>Git & GitHub</p>
        </div>
        <hr />
        <div className="technology">
          <h3>UI/UX Tools</h3>
          <p>InkScape</p>
          <p>Figma</p>
        </div>
        <hr />
        <div className="technology">
          <h3>Cloud</h3>
          <p>AWS</p>
        </div>
        <hr />
        <div className="technology">
          <h3>Frameworks</h3>
          <p>Tailwind CSS</p>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default About;
