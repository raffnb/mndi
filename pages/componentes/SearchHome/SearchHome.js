import styles from '../SearchHome/SearchHome.module.css'

export default function SearchHome(){
    return(
        <div className={styles.main}>
        <label className={styles.label}>
        <input name="myInput" placeholder="Procurar tudo sobre." className={styles.mainInput} />
            <button className={styles.btnMain}>
                 <img  src="/lupa.svg" alt="Logo"className={styles.imgMain} ></img>
            </button>
        </label>
        </div>
    )
}