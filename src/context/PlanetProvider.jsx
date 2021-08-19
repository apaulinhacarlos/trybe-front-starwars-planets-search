import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/fetchPlanetsApi';

function PlanetProvider({ children }) {
  const [data, setData] = useState();
  const [inputName, setInputName] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getPlanetsApi = async () => {
      const result = await fetchPlanetsApi();
      setData(result);
    };
    getPlanetsApi();
  }, []);

  useEffect(() => {
    if (data) {
      const dataFilter = data.filter((item) => (
        item.name.toLowerCase().includes(inputName)
      ));
      setFilters({ ...filters, filterByName: { name: dataFilter } });
    }
  }, [inputName]);

  const contextValue = {
    data,
    setInputName,
    filters,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired, // verificar se é assim mesmo
};

export default PlanetProvider;
