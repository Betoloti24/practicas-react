import LogoPanda from '../assets/Logo-PandaID.png';

import '../css/components/Footer.css';

function Footer() {
    return (
        <footer className="container-fluid footer">
            <img className='imagen' src={LogoPanda} alt="Logo" />
            <p>2024 - Ing. Roiberth Gonzalez</p>
        </footer>
    )
}

export default Footer;
