import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const {
    filters,
    filters: { filterByNumericValues },
    setFilters,
  } = useContext(PlanetContext);

  const handleClick = (indexToDel) => {
    const filterDelete = filterByNumericValues.filter((_item, index) => (
      index !== indexToDel
    ));
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
      { filterByNumericValues.length > 0 ? showFilter() : null}
    </div>
  );
}

export default Filter;
