import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Main from './componentes/Main/Main'
import Search from './componentes/Search/Search'

export default function Smais(){
    return(
        <section className={styles.sectionPrincipal}>
        <Header/>
        <Search/>
        <Main/>
        <Footer/>
        </section>
    
    )
}