import { createContext, useState, useEffect, useContext } from "react";
import { SearchContext } from "./SearchContext";
import colorsList from '../list/items';

export const ItemsContext = createContext({})

/**
 * Provides a context for managing items and filtering them based on a search term.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The context provider component.
 */
export function ItemsProvider({ children }) {
    let [items, setItems] = useState(colorsList)
    let { search } = useContext(SearchContext)

    useEffect(() => {
        if (!search || search === '') {
            setItems(colorsList)
            return
        }
        filterItems(search)
    },[search])

    /**
     * Filters the items based on the provided search term.
     * @param {string} searchTerm - The search term to filter the items.
     */
    function filterItems(searchTerm) {
        let filteredItems = filterItemsBySeartchTerm(searchTerm)
        setItems(filteredItems)
    }

    /**
     * Filters the items by comparing them with the provided search term.
     * @param {string} searchTerm - The search term to compare the items with.
     * @returns {Array} The filtered items.
     */
    function filterItemsBySeartchTerm(params) {
        let filteredItems = colorsList.map((item) => item.toLowerCase().includes(params.toLowerCase()) ? item : null)
        return filteredItems
    }

    return (
        <ItemsContext.Provider value={ items }>
            {children}
        </ItemsContext.Provider>
    )
}