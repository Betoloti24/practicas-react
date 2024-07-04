import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PromiseSesionContext } from "../contexts/PromiseSesionContext";

function ProtectedRouteLogin({ children }) {
    const navigate = useNavigate();
    const { sesion, setSesion, verifiAuthenticatedInCookie } = useContext(PromiseSesionContext);

    useEffect(() => {
        if (sesion.value === 'unauthorized') {
            if (verifiAuthenticatedInCookie('state') === 'authorized') {
                setSesion({ type: 'AUTHORIZED', data: { user: 'user', password: 'password' } });
                navigate('/home', { replace: true });
            }
        }
    }, []);

    return children;
}

export default ProtectedRouteLogin;