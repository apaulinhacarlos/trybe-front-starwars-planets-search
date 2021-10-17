import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Lines from './Lines';

function TableLines() {
  const {
    data,
    filters: { filterByName, filterByNumericValues },
  } = useContext(PlanetContext);

  const tableFilter = () => {
    if (filterByName || filterByNumericValues.length > 0) {
      let dataFiltered = [...data];

      dataFiltered = data
        .filter((item) => item.name.toLowerCase().includes(filterByName.toLowerCase()));

      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          dataFiltered = dataFiltered.filter((item) => item[column] > +value);
        } else if (comparison === 'menor que') {
          dataFiltered = dataFiltered.filter((item) => item[column] < +value);
        } else if (comparison === 'igual a') {
          dataFiltered = dataFiltered.filter((item) => item[column] === +value);
        }
      });

      const line = dataFiltered.map((item) => (
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
      { data ? tableFilter() : <p>Carregando...</p> }
    </tbody>
  );
}

export default TableLines;
