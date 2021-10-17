import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Lines from './Lines';

function TableLines() {
  const {
    data,
    filters: { filterByName, filterByNumericValues },
  } = useContext(PlanetContext);

  const tableFilter = () => {
    if (filterByName) {
      const dataFilterByName = data.filter((item) => (
        (item.name.toLowerCase()).includes(filterByName.toLowerCase())
      ));
      const line = dataFilterByName.map((item) => (
        <Lines key={ item.name } item={ item } />
      ));
      return line;
    }

    if (filterByNumericValues.length > 0) {
      const dataFilterByNumber = filterByNumericValues
        .map(({ column, comparison, value }) => (
          data.filter((item) => {
            if (comparison === 'maior que') return item[column] > +value;
            if (comparison === 'menor que') return item[column] < +value;
            return item[column] === value;
          })
        ));

      const line = dataFilterByNumber.map((itens) => (
        itens.map((item) => {
          console.log(item);
          return <Lines key={ item.name } item={ item } />;
        })
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
      { data ? tableFilter() : <p>Carregando...</p> }
    </tbody>
  );
}

export default TableLines;
