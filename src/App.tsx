import React from 'react'
import styles from './index.module.scss'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
