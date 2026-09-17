import React from 'react';
import './Footer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="" />
          <p>
            I am a full-stack web developer based in Addid Ababa, Ethiopia ...
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src="" alt="" />
            <input type="email" placeholder="Enter your email." />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &#169; 2025 Temesgen Birechis. All rights reserved.
        </p>
        {/* <div className="footer-bottom-right">
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <AnchorLink href='#contact' className='footer-anchor-link'><p>Contact me</p></AnchorLink>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
