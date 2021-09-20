import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByName() {
  const { setInputName } = useContext(PlanetContext);

  const handleChange = ({ target: { value } }) => {
    setInputName(value);
  };

  return (
    <form className="div-form">
      <label
        htmlFor="input-filter-by-name"
        className="div-form"
      >
        Pesquisar Planeta por Nome:
        <input
          type="text"
          name="name"
          id="input-filter-by-name"
          onChange={ handleChange }
          data-testid="name-filter"
          className="div-form form-control"
        />
      </label>
    </form>
  );
}

export default FilterByName;
