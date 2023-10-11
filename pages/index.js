import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/smais">Smais</Link>
        </li>
      </ul>
      <h1>Hello World Next!</h1>

      <div className={styles.page}>
    <label className={styles.label}>
    <input name="myInput" placeholder="Procurar tudo sobre." className={styles.mainInput} />
        <button className={styles.btnMain}>
          <Link href={'/loading'}>
             <img  src="/lupa.svg" alt="Logo"className={styles.imgMain} ></img>
          </Link>
        </button>
    </label>
    </div>
    </>

    
  )
}
