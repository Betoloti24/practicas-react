import { useContext, useEffect } from "react";

import useSession from "../hooks/useSession";
import { GeneralContext } from "../contexts/GeneralContext";
import { useNavigate } from "react-router-dom";


function ProtectedRouterLogin({ children }) {
    const { getValue } = useSession();
    const { session, setSession } = useContext(GeneralContext);
    const navegate = useNavigate();

    useEffect(() => {
        if (session.value === "unauthorized") {
            if (getValue("state") === "authorized") {
                setSession({ type: 'AUTHORIZED', data: { user: null, password: null} }); 
                navegate(-1);
            }
        }
    }, []);

    return !getValue("state") || getValue("state") === "unauthorized" ? children : null;
}

export default ProtectedRouterLogin;