import { createContext } from "react";

import useIndicator from "../hooks/useIndicator";

export const ProductsContext = createContext({})

export function ProductsProvider({ children }) {
    const { head, body, total } = useIndicator();

    return (
        <ProductsContext.Provider value={ {head, body, total} }>
            {children}
        </ProductsContext.Provider>
    )
}