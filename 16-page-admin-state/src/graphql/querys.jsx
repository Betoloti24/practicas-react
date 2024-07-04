import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
query{
  indicadores{
      cantidadTransacciones
      montoTransacciones
      dia
      mes
      trimestre
      semestre
      anio
      genero
      segmento
      municipio
      departamento
      esPropia
      edad
  }
}
`;
