
function TFoot({ total }) {
    return (
        <tfoot>
            <tr>
                <th scope="row">Total Generado</th>
                <td>{total && total} COP</td>
            </tr>
        </tfoot>
    )
}

export default TFoot;