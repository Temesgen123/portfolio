import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className= {styles.title}>About</h2>
        <div className= {styles.content}>
            <img  className={styles.aboutImage} src={getImageUrl('about/sampleimage0003.png')} alt="sample image" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorblue0002.png')} alt="cursor image" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a Frontend developer with experience in building responsive and optimazed sites.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverblue0002.png')} alt="server image" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimazed backend systems and APIs.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorblue0002.png')} alt="cursor image" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p> I have designed multiple landing pages and have created design systems as well.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About;
