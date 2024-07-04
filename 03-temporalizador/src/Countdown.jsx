import { useState, useEffect } from 'react';

import './countdown.css';

function ConuntDown(){
    let [targetsecond, setTargetSecond] = useState(null);
    let [currentSecond, setCurrentSecond] = useState(null);
    
    const parseForm = (ev) => {
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSecond(parseInt(seconds));
    }

    useEffect(
        () => {
            if(targetsecond === null) return;

            setCurrentSecond(0);

            let interval = setInterval(
                () => {
                    setCurrentSecond((currentSecond) => currentSecond + 1);
                }, 
                1000
            );

            return () => clearInterval(interval);
        }, 
        [targetsecond]);

    // console.log(currentSecond, targetsecond);

    if (targetsecond !== null && currentSecond >= targetsecond){
        return (
            <div className="countdown">
                <p>Se ha cumplido el tiempo</p>
                <button onClick={ () => { 
                    setTargetSecond(null);
                 }}>Reiniciar</button>
            </div>
        )
    }

    if(targetsecond !== null){
        return (
            <div className="countdown">
                <p>Faltan {targetsecond - currentSecond} para finalizar</p>
            </div>
        )
    }

    return (
        <div className="countdown">
            <p>Cuantos segundos quieres establecer?</p>
            <form action="" onSubmit={ ev => parseForm(ev) }>
                <input type="number" name="seconds" id="s" aria-placeholder={targetsecond} />
                <button type="submit">Iniciar</button>
            </form>
        </div>
    )
}

export default ConuntDown;