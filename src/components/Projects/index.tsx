import React from 'react'
import styles from './index.module.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { projectCards } from './projectCards'

const Projects: React.FC = (): JSX.Element => {
  const CustomDot = ({ index, onClick, active }: any) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <div className={styles.dotGroup}>
        <button
          className={active ? styles.dotActive : styles.dotInActive}
          onClick={() => onClick()}
          key={index + 1}
        ></button>
      </div>
    )
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <div className={styles.Project} id="Projects">
        <h1 className={styles.header}>PROJECTS</h1>
        <div className={styles.content}>
          <Carousel arrows={false} responsive={responsive} showDots customDot={<CustomDot />}>
            {projectCards.map((items) => (
              <div className={styles.card} key={items.key} data-aos="fade-up">
                <a href={items.url}>
                  <div className={styles.cardContent} style={{ backgroundImage:`url(${items.image})` }}>
                    <div className={styles.body}>
                      <h3>{items.name}</h3>
                      <p>{items.detail}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Projects
