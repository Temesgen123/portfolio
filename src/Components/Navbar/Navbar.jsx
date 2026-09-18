import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/portfoliologo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import openmenuicon from '../../assets/menu.png';
import closemenuicon from '../../assets/close.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = '0';
  };
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  const clickHandler = (selectedMenu) => {
    setMenu(selectedMenu);
    closeMenu();
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logoImage" />
      <img
        src={openmenuicon}
        alt=""
        className="mobile-nav-open"
        onClick={openMenu}
        onLoad={closeMenu}
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={closemenuicon}
          alt=""
          className="mobile-nav-close"
          onClick={closeMenu}
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => clickHandler('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => clickHandler('about')}>About</p>
          </AnchorLink>
          {menu === 'about' ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => clickHandler('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => clickHandler('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' ? <hr /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => clickHandler('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <hr /> : <></>}
        </li>
      </ul>

      {/* Social links */}
      <div className="nav-social">
        <a
          href="https://www.linkedin.com/in/temesgen-birechis-ab2a18319/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.984V9h3.102v1.561h.046c.431-.816 1.484-1.676 3.054-1.676 3.267 0 3.868 2.149 3.868 4.942v6.625zM5.337 7.433a1.805 1.805 0 1 1 0-3.61 1.805 1.805 0 0 1 0 3.61zm1.603 13.019H3.733V9h3.207v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <a
          href="https://birechis.gumroad.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Gumroad"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2c-3.978 0-7.2-3.222-7.2-7.2S8.022 4.8 12 4.8c2.4 0 4.511 1.178 5.818 2.982H13.2v2.4h7.178A7.172 7.172 0 0 1 19.2 12c0 .277-.017.55-.048.818H13.2v2.4h5.52A7.202 7.202 0 0 1 12 19.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
