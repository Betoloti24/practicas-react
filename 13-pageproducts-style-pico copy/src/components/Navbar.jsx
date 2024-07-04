import { Link } from 'react-router-dom';

import '../css/Navbar.css';
import { IoIosLogOut, IoIosCube, IoIosHome } from "react-icons/io";
import { MdOutlineHomeRepairService } from "react-icons/md";

import Logo from '../assets/logo.png';

function Navbar() {
    return (
        <header className="container-fluid header">
            <nav className='navbar'>
                <ul>
                    <li><Link className='icono image' to="/home"><img src={Logo} alt="Logo" /></Link></li>
                </ul>
                <ul>
                    <li><Link className='icono' to="/home" title="Home"><IoIosHome /></Link></li>
                    <li><Link className='icono' to="/servicios" title="Servicios"><MdOutlineHomeRepairService /></Link></li>
                    <li><Link className='icono' to="/productos" title="Productos"><IoIosCube /></Link></li>
                    <li><Link className='icono' to="/login" title="Cerrar Sesión"><IoIosLogOut /></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar