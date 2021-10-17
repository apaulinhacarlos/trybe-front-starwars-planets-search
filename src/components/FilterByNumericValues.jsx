import React, { useState, useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumericValues() {
  const {
    filters,
    filters: { filterByNumericValues },
    setFilters,
    columnFilter,
    setColumnFilter,
  } = useContext(PlanetContext);

  const [filterByNumericValuesLocal, setFilterByNumericValuesLocal] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  useEffect(() => {
    const changeColumn = async () => {
      setFilterByNumericValuesLocal((previousState) => ({
        ...previousState,
        column: columnFilter[0],
      }));
    };
    changeColumn();
  }, [columnFilter]);

  const comparisonFilter = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilterByNumericValuesLocal({
      ...filterByNumericValuesLocal,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const columnFilterDelete = columnFilter
      .filter((item) => item !== filterByNumericValuesLocal.column);
    setColumnFilter(columnFilterDelete);

    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        filterByNumericValuesLocal,
      ],
    });
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label
          htmlFor="input-numbers"
          className="div-form"
        >
          Pesquisar Planeta por Números:

          <select
            name="column"
            id="input-numbers"
            onChange={ handleChange }
            data-testid="column-filter"
            className="div-form form-select"
          >
            { columnFilter.map((item) => (
              <option value={ item } key={ item }>{ item }</option>
            ))}
          </select>

          <select
            name="comparison"
            onChange={ handleChange }
            data-testid="comparison-filter"
            className="div-form form-select"
          >
            { comparisonFilter.map((item) => (
              <option value={ item } key={ item }>{ item }</option>
            ))}
          </select>

          <input
            type="number"
            name="value"
            onChange={ handleChange }
            data-testid="value-filter"
            className="div-form form-control"
          />

          <button
            type="submit"
            data-testid="button-filter"
            onClick={ handleSubmit }
            className="div-form btn btn-primary"
          >
            Adicionar Filtro
          </button>
        </label>
      </form>
    </div>
  );
}

export default FilterByNumericValues;
