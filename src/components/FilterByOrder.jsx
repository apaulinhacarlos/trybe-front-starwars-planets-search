import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByOrder() {
  const { filters, setFilters, dataHeader } = useContext(PlanetContext);

  const [filterByOrderLocal, setFilterByOrderLocal] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilterByOrderLocal({
      ...filterByOrderLocal,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      order: filterByOrderLocal,
    });
  };

  const columnSort = () => {
    if (dataHeader) {
      const dataKeys = Object.keys(dataHeader[0]);
      const noResidents = dataKeys.filter((item) => item !== 'residents');

      const result = noResidents.map((item) => (
        <option value={ item } key={ item }>{item}</option>
      ));

      return result;
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label
        htmlFor="input-filter-by-name"
        className="div-form"
      >
        Ordenar Planetas:
        <select
          name="column"
          id="input-numbers"
          onChange={ handleChange }
          data-testid="column-sort"
          className="div-form form-select"
        >
          { columnSort() }
        </select>
        <label
          htmlFor="sort-ascending"
          className="div-form radio"
        >
          ASC
          <input
            name="sort"
            id="sort-ascending"
            onChange={ handleChange }
            data-testid="column-sort-input-asc"
            type="radio"
            value="ASC"
            className="div-form radio"
          />
        </label>
        <label
          htmlFor="sort-descending"
          className="div-form radio"
        >
          DESC
          <input
            name="sort"
            id="sort-descending"
            onChange={ handleChange }
            data-testid="column-sort-input-desc"
            type="radio"
            value="DESC"
            className="div-form radio"
          />
        </label>
        <button
          type="submit"
          data-testid="column-sort-button"
          onClick={ handleSubmit }
          className="div-form btn btn-primary"
        >
          Adicionar Ordenação
        </button>
      </label>
    </form>
  );
}

export default FilterByOrder;
