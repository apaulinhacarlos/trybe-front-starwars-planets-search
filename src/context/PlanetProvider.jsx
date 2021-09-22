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
      filterByNumericValues: [],
    },
  };

  const [data, setData] = useState();
  const [dataHeader, setDataHeader] = useState();
  const [filters, setFilters] = useState(initialState);
  const [inputName, setInputName] = useState();
  const [inputNumeric, setInputNumeric] = useState({});

  const [deleteFilter, setDeleteFilter] = useState();

  useEffect(() => {
    const getPlanetsApi = async () => {
      const result = await fetchPlanetsApi();
      setDataHeader(result);
      setData(result);
    };
    getPlanetsApi();
  }, []);

  useEffect(() => {
    const saveFilterByName = async () => {
      setFilters({
        filters: {
          filterByName: {
            name: inputName,
          },
          filterByNumericValues: [
            inputNumeric,
          ],
        },
      });
    };
    saveFilterByName();
  }, [inputName, inputNumeric]);

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
    inputName,
    setInputName,
    inputNumeric,
    setInputNumeric,
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
