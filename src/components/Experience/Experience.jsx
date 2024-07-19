import Styles from './Experience.module.css'
import React from 'react'
import skills from '../../data/skills.json';
import history from '../../data/history.json'
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (    
    <section id='experience' className={Styles.container}>
      <h2 className={Styles.title}>Experience</h2>
      <div className={Styles.content}>
        <div className={Styles.skills}>
          {
            skills.map((skill, id)=> {
              return(
                <div key={id} className={Styles.skill}>
                  <div className={Styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })
          }
        </div>
        <ul className={Styles.history}>
          {
            history.map((historyItem, id)=>{
              return(
                <li key={id} className={Styles.historyItem}>
                  <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.Organization} Logo`}/>
                <div className={Styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.Organization}`}</h3>
                  <p> {`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id)=>{
                      return(
                        <li key={id} className={Styles.experienceList}>{`${experience}`}</li>
                      )
                    })}
                  </ul>
                </div>                
                </li>                
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
