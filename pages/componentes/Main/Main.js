import styles from '../Main/Main.module.css'


export default function Main() {
    return (


        <div className={styles.card}> 
        <img  src="/country.svg" alt="Logo"className={styles.imgcard} ></img>
        <ul className={styles.uList}>
          <li>Nome: Search by country name</li>
          <li>Lingua: Search by language</li>
          <li>Capital: Search by capital city</li>
          <li>Região: Search by region</li>
        </ul>

        </div>


             
      
    )
  }