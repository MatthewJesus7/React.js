
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Company">Contato</Link></li>
                <li><Link to="/Contact">Contato</Link></li>
                <li><Link to="/NewProject">Novo Projeto</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar