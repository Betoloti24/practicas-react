
function TBody({ body }) {
    return (
        <tbody>
            { body && body.map((value, index) => <tr key={index}>
                <th scope="row">{value.mes}</th>
                <td>{value.anio}</td>
                <td>{value.monto} COP</td>
                <td>{value.cantidad}</td>
            </tr>) }
        </tbody>
    )
}

export default TBody;