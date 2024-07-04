import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

import THead from './THead';
import TBody from './TBody';
import TFoot from './TFoot';

function Table() {
    const { head, body, total } = useContext(ProductsContext);
    
    return (
        <table className="">
            <THead head={head} />
            <TBody body={body} />
            <TFoot total={total} />
        </table>
    )
}

export default Table;