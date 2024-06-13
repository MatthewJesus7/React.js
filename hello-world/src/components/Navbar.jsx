import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
                <li><Link to="/Empresa">Empresa</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar