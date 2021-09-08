import React from 'react'
import styles from './index.module.scss'

import { social } from './social'

const Contact: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.Contact} id="Contact">
        <h1 className={styles.header}>CONTACT ME</h1>
        <div className={styles.contact}>
          {social.map((items, index) => (
            <a href={items.url} key={index + 1} target="_blank" rel="noreferrer" data-aos="fade-down">
              <div className={styles.card}>
                <img src={items.icon} alt="icon" />
                <h3>{items.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
      <p className={styles.TelAndEmail} data-aos="fade-right">Gmail: mirailisclm@gmail.com<br/>Tel: (+66) 96 712 0048</p>
    </>
  )
}

export default Contact
