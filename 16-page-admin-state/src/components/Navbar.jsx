import { Link, useNavigate } from 'react-router-dom';

import { IoIosLogOut, IoIosCube, IoIosHome } from "react-icons/io";
import { MdOutlineHomeRepairService } from "react-icons/md";
import '../css/components/Navbar.css';

import Logo from '../assets/logo.png';
import { GeneralContext } from '../contexts/GeneralContext';
import { useContext } from 'react';
import useSession from '../hooks/useSession';

function Navbar() {
    const { setSession } = useContext(GeneralContext);
    const { resetSession } = useSession();
    const navegate = useNavigate();

    function handleLogout() {
        setSession({ type: 'UNAUTHORIZED' });
        resetSession(); 
        navegate("/login");
    }

    return (
        <header className="container-fluid header">
            <nav className='navbar'>
                <ul>
                    <li><Link className='icono' to="/home"><img className='imagen' src={Logo} alt="Logo" /></Link></li>
                </ul>
                <ul>
                    <li><Link className='icono' to="/home" title="Home"><IoIosHome /></Link></li>
                    <li><Link className='icono' to="/servicios" title="Servicios"><MdOutlineHomeRepairService /></Link></li>
                    <li><Link className='icono' to="/productos" title="Productos"><IoIosCube /></Link></li>
                    <li><button className='icono' onClick={handleLogout} title="Cerrar Sesion"><IoIosLogOut /></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar