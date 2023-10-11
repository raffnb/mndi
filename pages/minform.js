import Header from "./componentes/Header/Header";
import styles from '../styles/minform.module.css'
import Link from "next/link";


export default function Minform(){
    return(
        <section className={styles.section}>
            <Header/>
            <Link className={styles.mLink} href={"/"}> Home  </Link>

            <div className="mainInform">
            <div className={styles.imgcard}>
            <img  src="/country.svg" alt="Logo" ></img>
            </div>
            <div className={styles.mainList}>
            <ul className={styles.uList}>
          <li>Nome: Search by country name</li>
          <li>Lingua: Search by language</li>
          <li>Capital: Search by capital city</li>
          <li>Região: Search by region</li>
        </ul>

        <ul className={styles.uList}>
          <li>Nome: Search by country name</li>
          <li>Lingua: Search by language</li>
          <li>Capital: Search by capital city</li>
          <li>Região: Search by region</li>
        </ul>
            </div>

            </div>
        </section>

    )
}