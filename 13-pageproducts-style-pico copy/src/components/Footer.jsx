import '../css/Footer.css';
import LogoPanda from '../assets/Logo-PandaID.png';

function Footer() {
    return (
        <footer className="container-fluid footer">
            <img className='image' src={LogoPanda} alt="Logo" />
            <p>2024 - Ing. Roiberth Gonzalez</p>
        </footer>
    )
}

export default Footer;
