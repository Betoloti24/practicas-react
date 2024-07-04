import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { PromiseSesionContext } from "../contexts/PromiseSesionContext";

function Home() {

  const { sesion, setSesion } = useContext(PromiseSesionContext); 
  const navigate = useNavigate();

  function handleLogout() {
    setSesion({ type: "UNAUTHORIZED" });
    document.cookie = `state=unauthorized;`;
    navigate('/login', { replace: true });
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  )
}

export default Home