import React from 'react'
import styles from './index.module.scss'

import Navbar from '../Navbar'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.Home}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>
              <span className={styles.highlight}>P</span>HUBORDIN
            </h1>
            <h1>
              <span className={styles.highlight}>P</span>OOLNAI
            </h1>
          </div>
          <div className={styles.text}>
            <hr className={styles.divider} />
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
