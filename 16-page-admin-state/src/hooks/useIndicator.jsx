// import { useEffect, useState } from 'react';

// function useIndicator() {
//     const [body, setBody] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Define el cuerpo de la petición
//         const requestBody = {
//             // Agrega los datos que deseas enviar en el cuerpo de la petición
//             // Ejemplo: { key: value }
//         };

//         // Realiza la petición fetch con el cuerpo
//         fetch('https://api.example.com/data', {
//             method: 'POST', // Cambia el método a POST si es necesario
//             headers: {
//                 'Content-Type': 'application/json' // Asegúrate de establecer el tipo de contenido adecuado
//             },
//             body: JSON.stringify(requestBody) // Convierte el cuerpo a formato JSON si es necesario
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // Actualiza la lista de datos con la respuesta recibida
//                 setBody(data);
//             })
//             .catch(error => {
//                 // Maneja el error
//                 setError(error.message);
//             });
//     }, []);

//     const head = ["Mes", "Año", "Monto", "Cantidad"];
//     const total = "1.512.015";

//     return { head, body, total, error };
// }

// export default useIndicator;
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/querys';

function useIndicator() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    // console.log("Data: ", data && data.indicadores, "Cargando: ", loading, "Error: ", error);
    // console.log(error);
    const head = ["Dia", "Mes", "Año", "Ingresos", "Cantidad", "Segmento", "Genero", "Edad", "Municipio", "Departamento"];   
    const body = data && data.indicadores.map( (product) => ({
        dia: product.dia,
        mes: product.mes,
        anio: product.anio,
        genero: product.genero,
        edad: product.edad,
        municipio: product.municipio,
        departamento: product.departamento,
        cantidad: product.cantidadTransacciones, 
        monto: product.montoTransacciones.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        segmento: product.segmento
    })).sort((a, b) => {
        if (a.anio !== b.anio) {
            return b.anio - a.anio;
        } else if (a.mes !== b.mes) {
            return b.mes - a.mes;
        } else if (a.dia !== b.dia) {
            return b.dia - a.dia;
        } else {
            return a.segmento.localeCompare(b.segmento);
        }
    });
    const total = data ? body.length : 0;

    return { head, body, total, loading, error };
}

export default useIndicator;
