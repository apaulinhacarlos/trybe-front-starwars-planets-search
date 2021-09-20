import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Lines from './Lines';

function TableLines() {
  const { data, inputName, inputNumeric } = useContext(PlanetContext);

  const tableFilter = () => {
    if (inputName) {
      const dataFilterByName = data.filter((item) => (
        (item.name.toLowerCase()).includes(inputName.toLowerCase())
      ));
      const line = dataFilterByName.map((item) => (
        <Lines key={ item.name } item={ item } />
      ));
      return line;
    }

    if (inputNumeric) {
      const { column, comparison, value } = inputNumeric;
      const dataFilterByNumber = data.filter((item) => {
        if (comparison === 'maior que') return item[column] > +value;
        if (comparison === 'menor que') return item[column] < +value;
        return item[column] === value;
      });
      const line = dataFilterByNumber.map((item) => (
        <Lines key={ item.name } item={ item } />
      ));
      return line;
    }

    const line = data.map((item) => (
      <Lines key={ item.name } item={ item } />
    ));
    return line;
  };

  return (
    <tbody>
      { data ? tableFilter() : null }
    </tbody>
  );
}

export default TableLines;
