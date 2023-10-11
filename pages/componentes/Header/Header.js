import Link from 'next/link'
import styles from '../Footer/Header.module.css'




export default function Header() {
    return (
      <header  className={styles.headerP}>
        <Link href={'/'}>
        <img src="/logo.svg" alt="Logo" className={styles.imgHeader}></img>
        </Link>
        <h2 className={styles.titleHeader}>QUAL PAÍS VOCÊ <br/> DESEJA PESQUISAR?</h2>
      </header>
    )
  }