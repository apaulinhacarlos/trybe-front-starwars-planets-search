import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByName() {
  const { setInputName } = useContext(PlanetContext);

  const handleChange = ({ target: { value } }) => {
    setInputName(value);
  };

  // const { filters, setFilters } = useContext(PlanetContext);

  // const handleChange = ({ target: { value } }) => {
  //   setFilters({
  //     ...filters,
  //     filters: {
  //       filterByName: {
  //         name: value,
  //       },
  //     },
  //   });
  // };

  return (
    <form className="div-form">
      <label htmlFor="input-filter-by-name">
        Pesquisar Planeta por Nome:
        <input
          type="text"
          name="name"
          id="input-filter-by-name"
          onChange={ handleChange }
          data-testid="name-filter"
          className="form-control"
        />
      </label>
    </form>
  );
}

export default FilterByName;
