import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/fetchPlanetsApi';

function PlanetProvider({ children }) {
  const initialState = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  };

  const [data, setData] = useState();
  const [dataHeader, setDataHeader] = useState();
  const [filters, setFilters] = useState(initialState);

  // const [inputName, setInputName] = useState();
  // const [inputNumeric, setInputNumeric] = useState();
  // const [filters, setFilters] = useState({
  //   filterByName: {
  //     name: '',
  //   },
  //   filterByNumericValues: [],
  // });
  // const [deleteFilter, setDeleteFilter] = useState();

  // componentDidMount - faz requisicao api
  useEffect(() => {
    const getPlanetsApi = async () => {
      const result = await fetchPlanetsApi();
      setDataHeader(result);
      setData(result);
    };
    getPlanetsApi();
  }, []);

  // componentDidUpdate - faz filtro por nome
  useEffect(() => {
    const getPlanets = async () => {
      const result = await fetchPlanetsApi();
      const { filters: { filterByName: { name } } } = filters;
      if (name) {
        const nameLowerCase = name.toLowerCase();
        const filterResult = result.filter((item) => (
          (item.name.toLowerCase()).includes(nameLowerCase)
        ));
        setData(filterResult);
      }
      if (name === '') setData(result);
    };
    getPlanets();
  }, [filters]);

  // componentDidUpdate - faz filtro por numeros
  // useEffect(() => {
  //   if (data) {
  //     const { column, comparison, value } = inputNumeric;
  //     const { filterByNumericValues } = filters;

  //     setFilters({
  //       ...filters,
  //       filterByNumericValues: [
  //         ...filterByNumericValues,
  //         {
  //           column,
  //           comparison,
  //           value,
  //         },
  //       ],
  //     }); // teste
  //   }
  // }, [inputNumeric]);

  // componentDidUpdate - deleta Filtros
  // useEffect(() => {
  //   const { filterByNumericValues } = filters;

  //   if (filterByNumericValues) {
  //     const filter = filterByNumericValues.filter((_item, index) => (
  //       index !== deleteFilter + 1
  //     ));
  //     setFilters({
  //       ...filters,
  //       filterByNumericValues: [
  //         ...filterByNumericValues,
  //         filter,
  //       ],
  //     });
  //     console.log(filterByNumericValues);
  //   }

  // }, [deleteFilter]);

  const contextValue = {
    data,
    setData,
    dataHeader,
    setDataHeader,
    filters,
    setFilters,
    // inputName,
    // setInputName,
    // inputNumeric,
    // setInputNumeric,
    // filters,
    // setFilters,
    // deleteFilter,
    // setDeleteFilter,
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
