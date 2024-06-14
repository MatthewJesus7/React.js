import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { BsCoin } from "react-icons/bs";
import Container from './Container'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <BsCoin className={styles.icon}></BsCoin>
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>                    
                    <li className={styles.item}>
                        <Link to="/Projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/NewProject">Novo Projeto</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar