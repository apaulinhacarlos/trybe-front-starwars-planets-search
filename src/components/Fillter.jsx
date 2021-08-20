import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filters: { filterByNumericValues } } = useContext(PlanetContext);
  const { setDeleteFilter } = useContext(PlanetContext);

  const handleClick = (index) => {
    setDeleteFilter(index);
  };

  const showFilter = () => {
    const newFilter = filterByNumericValues.filter((_item, index) => index !== 0);
    const map = newFilter.map((item, index) => (
      <div key={ index }>
        <p
          data-testid="filter"
        >
          {`${item.column}, ${item.comparison}, ${item.value}`}
        </p>
        <button onClick={ () => handleClick(index) } type="button">X</button>
      </div>
    ));
    return map;
  };

  return (
    <div className="App">
      <h2>Eu sou o Componente Filtro!</h2>
      { showFilter() }
    </div>
  );
}

export default Filter;
