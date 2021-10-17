import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const {
    filters,
    filters: { filterByNumericValues },
    setFilters,
    columnFilter,
    setColumnFilter,
  } = useContext(PlanetContext);

  const handleClick = (indexToDel) => {
    const filterDelete = filterByNumericValues.filter((item, index) => (
      index !== indexToDel
    ));

    setColumnFilter([
      ...columnFilter,
      filterByNumericValues[indexToDel].column,
    ]);

    setFilters({
      ...filters,
      filterByNumericValues: filterDelete,
    });
  };

  const showFilter = () => {
    const SIX = 6;
    if (filterByNumericValues.length < SIX) {
      const newFilter = filterByNumericValues
        .map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter">
            <span>{`${column}, ${comparison}, ${value}`}</span>
            <button
              onClick={ () => handleClick(index) }
              type="button"
              className="div-form btn btn-primary"
            >
              X
            </button>
          </div>
        ));
      return newFilter;
    }
  };

  return (
    <div>
      { filterByNumericValues.length > 0 ? showFilter() : null }
      { columnFilter.length === 0
        ? <span>Não existem mais filtros disponíveis</span>
        : null }
    </div>
  );
}

export default Filter;
