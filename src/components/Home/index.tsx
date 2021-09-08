import React from 'react'
import styles from './index.module.scss'
import { Parallax } from 'react-parallax'

import Background from '../../image/background.png'
import Navbar from '../Navbar'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Parallax bgImage={Background} bgImageAlt="background" strength={600}>
        <div className={styles.Home} id="Home">
          <Navbar />
          <div className={styles.content}>
            <div className={styles.header}>
              <h1 data-aos="fade-left">
                <span className={styles.highlight}>P</span>HUBORDIN
              </h1>
              <h1 data-aos="fade-left">
                <span className={styles.highlight}>P</span>OOLNAI
              </h1>
            </div>
            <div className={styles.text}>
              <hr className={styles.divider} />
              <p data-aos="fade-up">Frontend Developer</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default Home
