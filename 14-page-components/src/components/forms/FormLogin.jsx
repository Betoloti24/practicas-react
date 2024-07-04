import { redirect, useNavigate } from "react-router-dom";

function FormLogin() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/home");
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
            <fieldset>
            <label htmlFor="remember">
                <input type="checkbox" role="switch" id="remember" name="remember" />
                Recordar este usuario en el dispositivo
            </label>
            </fieldset>
            <button type="submit">
            Iniciar
            </button>
        </form>
    )

}

export default FormLogin;