import React from 'react'
import styles from './index.module.scss'

import Image1 from '../../image/image1.jpg'

const About: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.About} id="About">
        <h1 className={styles.Header}>ABOUT ME</h1>
        <div className={styles.content}>
          <img className={styles.image} src={Image1} alt="Image_1" data-aos="zoom-in" />
          <div className={styles.text}>
            <h3 data-aos="fade-down">PHUBORDIN POOLNAI</h3>
            <p data-aos="fade-up">
              I am a 16 years old junior high school student and also working as an intern Web Developer at Datability.
              My main programming languages are Python, JavaScript, TypeScript, and SQL, also I'm still learning about
              GraphQL Arduino and Docker. I have some working experiences from my intern company and my school project
              but since I am still a student so I don’t have much time to learn.
            </p>
            <p data-aos="fade-up">At last, hobbies are coding, sleeping, watching an Anime</p>
            <div className={styles.fact} data-aos="fade-up">
              <h4>FUN FACT</h4>
              <p>I love Murasaki Shion and Nanashi Mumei</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
