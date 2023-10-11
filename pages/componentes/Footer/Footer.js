import Link from 'next/link'
import styles from '../Footer/Footer.module.css'




export default function Footer() {
    return (
      <footer className={styles.footer}>
      <div>
      <img  src="/country.svg" alt="País"className={styles.imgFooter} ></img>
      <p>Nome do País</p>
        </div>        

        
    <div>
      <img  src="/country.svg" alt="País"className={styles.imgFooter} ></img>
      <p>Nome do País</p>
        </div>        

        
      <div>
      <img  src="/country.svg" alt="País"className={styles.imgFooter} ></img>
      <p>Nome do País</p>
        </div>        

        
      </footer>
    )
  }