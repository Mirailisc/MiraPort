import React from 'react'
import styles from './index.module.scss'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>MiraPort</div>
        <div className={styles.navItems}>
          <button>Home</button>
          <button>About Me</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
