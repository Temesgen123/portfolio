import React, {useState} from 'react'
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.title}>Portfolio</a>       
    <div className={styles.menu}>  
    <img  src={menuOpen ?  getImageUrl('nav/closeIcon2.png'): getImageUrl('nav/menuIcon.png') }
     className={styles.menuBtn} alt='menuButten' onClick={()=>{setMenuOpen(!menuOpen)}}/> 
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}> 
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar