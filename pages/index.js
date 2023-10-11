import styles from '../styles/Home.module.css'

import Link from 'next/link'
import SearchHome from './componentes/SearchHome/SearchHome'
import Header from './componentes/Header/Header'

export default function Home() {
  return (
    <div className={styles.sectionHome}>
      <Header/>
      <SearchHome/>
    </div>


    
  )
}
