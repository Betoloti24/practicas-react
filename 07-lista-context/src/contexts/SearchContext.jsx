import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext({
    message: "Hola Mundo"
});

export function SearchProvider({ children }) {
    let [search, setSearch] = useState()
    return (
        <SearchContext.Provider value={ { search, setSearch } }>
            {children}
        </SearchContext.Provider>
    )
}