import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Lines from './Lines';

function TableLines() {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order,
    },
  } = useContext(PlanetContext);

  const tableFilter = () => {
    if (name || filterByNumericValues.length > 0 || order) {
      let dataFiltered = [...data];

      dataFiltered = data
        .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));

      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          dataFiltered = dataFiltered.filter((item) => item[column] > +value);
        } else if (comparison === 'menor que') {
          dataFiltered = dataFiltered.filter((item) => item[column] < +value);
        } else if (comparison === 'igual a') {
          dataFiltered = dataFiltered.filter((item) => item[column] === value);
        }
      });

      if (order.sort === 'ASC') {
        dataFiltered
          .sort((prev, next) => prev[order.column].localeCompare(next[order.column]))
          .sort((prev, next) => prev[order.column] - next[order.column]);
      }

      if (order.sort === 'DESC') {
        dataFiltered
          .sort((prev, next) => next[order.column] - prev[order.column]);
      }

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
