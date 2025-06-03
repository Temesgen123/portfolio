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
      <div className="navbar ">
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
        {/* <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p onClick={() => setMenu('contact')}>Contact me</p>
        </AnchorLink>
      </div> */}
      </div>    
  );
};

export default Navbar;
