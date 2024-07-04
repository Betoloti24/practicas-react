import '../../css/components/TBody.css';

function TBody({ body }) {
    return (
        <tbody>
            { body && body.map((value, index) => <tr key={index}>
                <th>{value.dia}</th>
                <th>{value.mes}</th>
                <th>{value.anio}</th>
                <td className='ingreso'>{value.monto} COP</td>
                <td className='cantidad'>{value.cantidad} MOV</td>
                <td>{value.segmento}</td>
                <td>{value.genero}</td>
                <td>{value.edad}</td>
                <td className='ubicacion'>{value.municipio}</td>
                <td className='ubicacion'>{value.departamento}</td>
            </tr>) }
        </tbody>
    )
}

export default TBody;