import React, { useState, useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumericValues() {
  const {
    filters,
    filters: { filterByNumericValues },
    setFilters,
  } = useContext(PlanetContext);

  const [columnFilter, setColumnFilter] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  const [stateLocal, setStateLocal] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  useEffect(() => {
    const changeColumn = async () => {
      setStateLocal((previousState) => ({
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
    setStateLocal({
      ...stateLocal,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const columnFilterDelete = columnFilter.filter((item) => item !== stateLocal.column);
    setColumnFilter(columnFilterDelete);
    if (columnFilter.length === 0) alert('Não existem mais filtros disponíveis');
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        stateLocal,
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
