import Link from 'next/link'
import styles from '../SearchHome/SearchHome.module.css'

export default function SearchHome(){
    return(

        <label className={styles.label}>
        <input name="myInput" placeholder="Procurar tudo sobre." className={styles.mainInput} />
            <Link href={"/smais"}>
            <button className={styles.btnMain}>
                 <img  src="/lupa.svg" alt="Logo"className={styles.imgMain} ></img>
            </button>
            </Link>
        </label>
    )
}