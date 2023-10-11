import Link from 'next/link'
import styles from '../Search/Search.module.css'

export default function SearchHome(){
    return(
            <div className={styles.label}>

        <label>
        <input name="myInput" placeholder="Procurar tudo sobre." className={styles.mainInput} />
            <button className={styles.btnMain}>
                 <img  src="/lupa.svg" alt="Logo"className={styles.imgMain} ></img>
            </button>
        </label>
            <Link className={styles.mLink} href={"/minform"}> Mais Informações  </Link>
            </div>
    )
}