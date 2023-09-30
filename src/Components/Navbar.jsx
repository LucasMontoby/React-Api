import {Link} from 'react-router-dom';
import './NavBar.css'

function NavBar(){
    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                <Link to="/alta">Registro</Link>
                </li>
                <li>
                <Link to="/ingresar">Ingresar</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;