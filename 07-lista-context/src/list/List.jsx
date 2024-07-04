import ListView from './ListView';
import { SearchProvider } from '../contexts/SearchContext';
import { ItemsProvider } from '../contexts/ItemsContext';

// Patrones de componentes presentacion y componentes contenedores

function List() {
    return (
        <SearchProvider>
            <ItemsProvider>
                <ListView/>
            </ItemsProvider>
        </SearchProvider>
    )
}

export default List;