import './listview.css';

function ListView({ items, funcfilterItems }) {
  return (
    <div className="list-view">
        <div className='list-content'>
            <h1>Colors</h1>
            <p>Filtrar colores: </p>
            <input type="text" placeholder="Add a color" onChange={(ev) => {
                funcfilterItems(ev.target.value)
            }}/>
        </div>
        <div className="list-item">
            {items.map((item, index) => item && <div className="item-color" key={index}>{item}</div>)}
        </div>
    </div>
  );
}

export default ListView;