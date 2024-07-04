import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PromiseSesionContext } from '../contexts/PromiseSesionContext';

function Login() {
  const { sesion, setSesion } = useContext(PromiseSesionContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    setSesion({ type: 'VERIFYYING' });
    setTimeout(() => {
      setSesion({ type: 'AUTHORIZED', data: { user: username, password: password } });
    }, 5000);
  }

  useEffect(() => {
    if (sesion.matches('authorized')) {
      navigate('/home', { replace: true });
    }
  }, [sesion, navigate]);

  return (
    <>
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar</button>
    </>
  );
}

export default Login;
// import { useEffect } from "react";
// import { useContext } from "react";

// import { useNavigate } from "react-router-dom";

// import { PromiseSesionContext } from "../machines/autMachine";


// function Login() {
//   const { sesion, setSesion } = useContext(PromiseSesionContext);
//   const navigate = useNavigate(); 
  
//   function handleLogin() {
//     setSesion({ type: "VERIFYYING" });
//     console.log("Iniciando sesión");
//     console.log("Sesion antes de verificar", sesion);
//     setTimeout(() => {
//       setSesion({ type: "AUTHORIZED", user: "user", password: "password" });
//       console.log("Sesion después de verificar", sesion);
//     }, 5000); // 10000 milliseconds = 10 seconds
//     console.log("Sesión iniciada");
//   }

//   useEffect(() => {
//     if (sesion.matches("authorized")) {
//       console.log("Sesión autorizada");
//       navigate("/home");
//     }
//   }, [setSesion]);

//   return (
//     <>
//       <h1>Login</h1>
//       <button onClick={handleLogin}>Iniciar</button>
//     </>
//   )
// }

// export default Login