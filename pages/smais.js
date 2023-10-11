import StyleSmais from '../styles/smais.module.css'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Main from './componentes/Main/Main'
import SearchHome from './componentes/SearchHome/SearchHome'

export default function Smais(){
    return(
        <div>
        <Header/>
        <SearchHome/>
        <Main/>
        <Footer/>
        </div>
    
    )
}