import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/fetchPlanetsApi';

function PlanetProvider({ children }) {
  const [data, setData] = useState();
  const [inputName, setInputName] = useState();
  const [inputNumeric, setInputNumeric] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [deleteFilter, setDeleteFilter] = useState();

  // componentDidMount - faz requisicao api
  useEffect(() => {
    const getPlanetsApi = async () => {
      const result = await fetchPlanetsApi();
      setData(result);
    };
    getPlanetsApi();
  }, []);

  // componentDidUpdate - faz filtro por nome
  useEffect(() => {
    setFilters({ ...filters, filterByName: { name: inputName } });
  }, [inputName]);

  // componentDidUpdate - faz filtro por numeros
  useEffect(() => {
    if (data) {
      const { column, comparison, value } = inputNumeric;
      const { filterByNumericValues } = filters;

      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
      }); // teste 80
    }
  }, [inputNumeric]);

  // componentDidUpdate - deleta Filtros
  useEffect(() => {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues) {
      const filter = filterByNumericValues.filter((_item, index) => (
        index !== deleteFilter + 1
      ));
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filterByNumericValues,
          filter,
        ],
      });
      console.log(filterByNumericValues);
    }

  }, [deleteFilter]);

  const contextValue = {
    data,
    setData,
    inputName,
    setInputName,
    inputNumeric,
    setInputNumeric,
    filters,
    setFilters,
    deleteFilter,
    setDeleteFilter,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default PlanetProvider;
