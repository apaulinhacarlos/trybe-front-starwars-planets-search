import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Lines from './Lines';

function TableLines() {
  const { data } = useContext(PlanetContext);



  // const { data, inputName, inputNumeric } = useContext(PlanetContext);

  // const tableFilter = () => {
  //   if (data) {
  //     if (inputName) {
  //       const dataFilterByName = data.filter((item) => (
  //         item.name.toLowerCase().includes(inputName.toLowerCase())
  //       ));
  //       return <TableData data={ dataFilterByName } />;
  //     }

  //     if (inputNumeric) {
  //       const { column, comparison, value } = inputNumeric;
  //       const dataFilterByNumber = data.filter((item) => {
  //         if (comparison === 'maior que') return item[column] > +value;
  //         if (comparison === 'menor que') return item[column] < +value;
  //         return item[column] === value;
  //       });
  //       return <TableData data={ dataFilterByNumber } />;
  //     }

  //     return <TableData data={ data } />;
  //   }
  // };






  const tableLine = () => {
    if (data) {
      const line = data.map((item) => (
        <Lines key={ item.name } item={ item } />
      ));
      return line;
    }
  };

  return (
    <tbody>
      { tableLine() }
    </tbody>
  );
}

export default TableLines;
