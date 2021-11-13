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
            <h3 data-aos="fade-down">Hi, I’m Mark. A human who just started the journey at the Tech industry.</h3>
            <p data-aos="fade-up">
              I am a 16 years old junior high school student, working as an Intern Web Developer at Datability. I
              started my journey by watching technology grow with the world.{' '}
              <span> ( actually, by playing "Minecraft" lol ) </span> and I started learning to code by learning Python,
              making a task management website for myself and my friends.
            </p>
            <p data-aos="fade-up">
              And, I love to do something fun and challenge for improve myself and entertain others
            </p>
            <div className={styles.fact} data-aos="fade-up">
              <h4>FUN FACT</h4>
              <p>I am a Simp</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
