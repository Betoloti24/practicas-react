import { Link } from 'react-router-dom';

import { IoIosLogOut } from "react-icons/io";
import Logo from '../assets/logo.png';

function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><img src={Logo} alt="Logo" /></li>
                </ul>
                <ul>
                    <li><Link to="/home">Inicio</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/login"><IoIosLogOut className='logout'/></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar