import { Link } from 'react-router-dom';

import '../css/Navbar.css';
import { IoIosLogOut } from "react-icons/io";
import Logo from '../assets/logo.png';

function Navbar() {
    return (
        <header className="container-fluid">
            <nav>
                <ul>
                    <li><Link to="/home"><img src={Logo} alt="Logo" /></Link></li>
                </ul>
                <ul>
                    <li><details className="dropdown" >
                        <summary>
                            Cuenta
                        </summary>
                        <ul dir="rtl">
                            <li><Link to="/servicios">Servicios</Link></li>
                            <li><Link to="/productos">Productos</Link></li>
                            <li><Link to="/login">Cerrar Sesion</Link></li>
                        </ul>
                    </details></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar