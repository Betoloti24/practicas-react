import { useState } from 'react';
import colorsList from './items';
import ListView from './ListView';

// Patrones de componentes presentacion y componentes contenedores

function List() {
    let [items, setItems] = useState(colorsList)

    function filterItems(searchTerm) {
        if (searchTerm === '') {
            setItems(colorsList)
        }else{
            let newItems = filterItemsBySeartchTerm(searchTerm)
            setItems(newItems)
        }
    }

    function filterItemsBySeartchTerm(params) {
        let filteredItems = colorsList.map((item) => item.toLowerCase().includes(params.toLowerCase()) ? item : null)
        return filteredItems
    }

    return (
        <ListView items={items} funcfilterItems={filterItems} />
    )
}

export default List;