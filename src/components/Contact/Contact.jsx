import React from 'react';
import { getImageUrl } from '../../utils';
 import Styles from './Contact.module.css';


export const Contact = () => {
  return (
   <footer id='contact' className={Styles.container} >
    <div className={Styles.text}>
    <h2>Contact</h2>
    <p>Feel free to reach out!</p>   
    </div >
    <ul className={Styles.links}>
        <li className={Styles.link}><img src={getImageUrl('contact/emailIcon.png')}
         alt="Email Icon" /> <a href="mailto:birechis@gmail.com">birechis@gmail.com</a></li>
        <li className={Styles.link}><img src={getImageUrl('contact/linkedinIcon.png')}
         alt="LinkedIn Icon" /> <a href="https://www.linkedin.com/myname">LinkedIn</a></li>
        <li className={Styles.link}><img src={getImageUrl('contact/githubIcon.png')} 
        alt="Github Icon" /> <a href="https://www.github.com/myname">Github</a></li>
    </ul>
   </footer>
  )
}
