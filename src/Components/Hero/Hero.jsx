import React from 'react';
import './Hero.css';
import profileImage from '../../assets/profilephoto2.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileImage} alt="profileImage" />
      <h1>
        Hello, <span>I'm Temesgen.</span>{' '}
      </h1>
      <p>
        I'm a full-stack web developer based in Addis Ababa, Ethiopia with
        experience using React.js and Node.js. Reach out if you'd like to learn
        more.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {' '}
          <AnchorLink className="anchor-link" href="#contact">
            Contact Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a className="resume-link" href=" https://temesgensresume.vercel.app">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
