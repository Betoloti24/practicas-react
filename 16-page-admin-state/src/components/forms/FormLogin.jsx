import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import useSession from "../../hooks/useSession";
import useAuth from "../../hooks/useAuth";

import { GeneralContext } from "../../contexts/GeneralContext";

function FormLogin() {
    const navigate = useNavigate();
    const { setSession } = useContext(GeneralContext);
    const { addValue } = useSession();
    const { loginUser } = useAuth();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar el mensaje de error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Establecer el estado de envío a true
        setErrorMessage(''); // Limpiar el mensaje de error previo

        setSession({ type: 'VERIFYING' });

        const username = e.target.login.value;
        const password = e.target.password.value;
        
        const result = await loginUser(username, password);

        if (result.success) {
            const data = result.data;
            setSession({ type: 'AUTHORIZED', data: { access_token: data.access_token, refresh_token: data.refresh_token } });
            addValue('access_token', data.access_token);
            addValue('refresh_token', data.refresh_token);
            addValue('state', 'authorized');
            navigate("/home");
        } else {
            setSession({ type: 'UNAUTHORIZED' });
            addValue('state', 'unauthorized');
            addValue('access_token', null);
            addValue('refresh_token', null);
            setIsSubmitting(false); // Restaurar el estado de envío a false
            setErrorMessage(result.error); // Establecer el mensaje de error
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mostrar el mensaje de error */}
            <fieldset>
                {/* <label htmlFor="remember">
                <input type="checkbox" role="switch" id="remember" name="remember" />
                Recordar este usuario en el dispositivo
            </label> */}
            </fieldset>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Iniciar'}
            </button>
        </form>
    )
}

export default FormLogin;
