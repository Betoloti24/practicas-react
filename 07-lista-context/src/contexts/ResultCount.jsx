import { useContext } from "react"
import { ItemsContext } from "./ItemsContext"

function ResultCount() {
    const elements = useContext(ItemsContext)

    return (
        <p>Se encontraron {elements.filter((value) => value).length} elementos</p>
    )
}

export default ResultCount;