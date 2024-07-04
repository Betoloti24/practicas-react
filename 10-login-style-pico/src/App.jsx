import React, { useRef, useEffect } from "react";
import './App.css'

function App() {
  return (
    <main className="container">
      <h1>Iniciar Sesion</h1>
      <form>
        <input
          type="text"
          name="login"
          placeholder="Ingrese su Usuario"
          aria-label="Login"
          autoComplete="username"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Ingrese su Contraseña"
          aria-label="Password"
          autoComplete="current-password"
          required
        />
        <fieldset>
          <label htmlFor="remember">
            <input type="checkbox" role="switch" id="remember" name="remember" />
            Recordar este usaurio en el dispositivo
          </label>
        </fieldset>
        <button type="submit">
          Iniciar
        </button>
      </form>
    </main>
  )
}

export default App
