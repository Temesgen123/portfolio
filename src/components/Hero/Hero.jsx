import React from 'react';
import styles from './Hero.module.css'
import {getImageUrl} from '../../utils'

function Hero() { 
  return (
  <section className={styles.container}>    
         <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm  Temesgen</h1>
            <p className={styles.description}>I'm full-stack developer with three years of experience using React and Node.js. Reach out if you'd like to learn more! </p>
            <a href="mailto:birechis@gmail.com" className={styles.contactBtn}>Contact Me</a>
         </div>        
         <img src={getImageUrl("hero/photo391.png")} alt="My image" className={styles.heroImg} />
         <div className={styles.topBlur} />        
         <div className={styles.bottomBlur} /> 
    </section>
   
  )
}

export default Hero