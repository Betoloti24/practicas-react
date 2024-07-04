import { useState } from "react"

import '../counter.css'

function Counter () {

    const [contador, setContador] = useState(0)
    return (
        <div className="counter">
            <p>Has hecho click {contador}  veces a este boton</p>
            <div className="contenedor-button">
                <button onClick={() => {setContador(contador + 1)}}>Increment</button>
                <button onClick={() => {setContador(contador - 1)}}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter