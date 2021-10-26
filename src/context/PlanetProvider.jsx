import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/fetchPlanetsApi';

function PlanetProvider({ children }) {
  const [data, setData] = useState();
  const [dataHeader, setDataHeader] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {},
  });
  const [columnFilter, setColumnFilter] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  useEffect(() => {
    const getPlanetsApi = async () => {
      const result = await fetchPlanetsApi();
      setData(result);
      setDataHeader(result);
    };
    getPlanetsApi();
  }, []);

  const contextValue = {
    data,
    setData,
    dataHeader,
    setDataHeader,
    filters,
    setFilters,
    columnFilter,
    setColumnFilter,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default PlanetProvider;
