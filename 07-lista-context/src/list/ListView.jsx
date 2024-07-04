import { useContext } from 'react';
import './listview.css';

import SearchInput from '../form/SearchInput';
import { ItemsContext } from '../contexts/ItemsContext';
import ResultCount from '../contexts/ResultCount';
 
function ListView() {
  let elements = useContext(ItemsContext)

  return (
    <div className="list-view">
        <div className='list-content'>
            <h1>Colors</h1>
            <p>Filtrar colores: </p>
            <ResultCount/>
            <SearchInput/>
        </div>
        <div className="list-item">
            {elements.map((item, index) => item && <div className="item-color" key={index}>{item}</div>)}
        </div>
    </div>
  );
}

export default ListView;