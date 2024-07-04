
import { createContext } from "react";

import { useMachine } from "@xstate/react";
import { sessionMachine } from "../machines/sessionMachine";

export const GeneralContext = createContext({})

export function GeneralProvider({ children }) {
    const [ session, setSession ] = useMachine(sessionMachine);

    return (
        <GeneralContext.Provider value={{ session, setSession }}>
            {children}
        </GeneralContext.Provider>
    )
}
