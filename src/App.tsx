import React from 'react'
import styles from './index.module.scss'

import Home from './components/Home'

function App() {
  return (
    <div className={styles.App}>
      <Home/>
      <div className={styles.About}></div>
    </div>
  )
}

export default App
