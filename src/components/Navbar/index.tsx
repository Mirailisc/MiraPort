import React, { useState } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-scroll'

import Toggler from './toggler.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>MiraPort</div>
        <button className={styles.toggler} onClick={() => setToggle(!toggle)}>
          <img src={Toggler} alt="toggler" />
        </button>
        <div className={styles.navItems}>
          <Link to="Home" smooth={true}><button>Home</button></Link>
          <Link to="About" smooth={true}><button>About Me</button></Link>
          <Link to="Projects" smooth={true}><button>Projects</button></Link>
          <Link to="Contact" smooth={true}><button>Contact</button></Link>
        </div>
      </nav>
      <div className={toggle ? styles.navLinkActive : styles.navLink}>
        <Link to="Home" smooth={true}><button>Home</button></Link>
        <Link to="About" smooth={true}><button>About Me</button></Link>
        <Link to="Projects" smooth={true}><button>Projects</button></Link>
        <Link to="Contact" smooth={true}><button>Contact</button></Link>
      </div>
    </>
  )
}

// <a href={"#Home"}><button>Home</button></a>
//         <a href={"#About"}><button>About Me</button></a>
//         <a href={"#Projects"}><button>Projects</button></a>
//         <a href={"#Contact"}><button>Contact</button></a>

export default Navbar
