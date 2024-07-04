import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

function SearchInput() {
    const { setSearch } = useContext(SearchContext)
    
    return (
        <input type="text" placeholder="Add a color" onChange={(ev) => {
            setSearch(ev.target.value)
        }}/>
    )
}

export default SearchInput;