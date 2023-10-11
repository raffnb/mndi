import styles from '../Footer/Footer.module.css'


export default function Main() {
    return (
      <div className={styles.main}>
        <label className={styles.label}>
        <input name="myInput" placeholder="Procurar tudo sobre." className={styles.mainInput} />
            <button className={styles.btnMain}>
                 <img  src="/lupa.svg" alt="Logo"className={styles.imgMain} ></img>
            </button>
        </label>

        <div className={styles.card}> 
        <img  src="/country.svg" alt="Logo"className={styles.imgcard} ></img>
        <ul className={styles.uList}>
          <li>Nome: Search by country name</li>
          <li>Lingua: Search by language</li>
          <li>Capital: Search by capital city</li>
          <li>Região: Search by region</li>
        </ul>

        </div>


             
      </div>
    )
  }