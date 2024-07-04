import { createContext } from "react";
import { useMachine } from "@xstate/react";

import useCookies from "../hooks/useCookies";
import { sesionMachine } from "../machines/autMachine";

export const PromiseSesionContext = createContext({});

export function PromiseSesionProvider({ children }) {
    const { getCookie, verifiAuthenticatedInCookie, setCookie } = useCookies();
    const [sesion, setSesion] = useMachine(sesionMachine);

    return (
        <PromiseSesionContext.Provider value={{ getCookie, verifiAuthenticatedInCookie, setCookie, sesion, setSesion }}>
            {children}
        </PromiseSesionContext.Provider>
    );
}