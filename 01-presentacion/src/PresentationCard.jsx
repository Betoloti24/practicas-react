import imagen from './assets/descarga.jpeg';
import './PresentationCard.css';

function PresentationCard() {
    let name = 'Roiberth'

    return (
        <div className="presentation-card">
            <img src={imagen} alt="Imagen" className='avatar' />
            <h1>
                ¡Hola, <span>soy {name}</span>!
            </h1>
        </div>
    )
}

export default PresentationCard;