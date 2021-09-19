import PropTypes from 'prop-types';
import React from 'react';

function Lines({ item }) {
  return (
    <tr>
      <td>{ item.name }</td>
      <td>{ item.rotation_period }</td>
      <td>{ item.orbital_period }</td>
      <td>{ item.diameter }</td>
      <td>{ item.climate }</td>
      <td>{ item.gravity }</td>
      <td>{ item.terrain }</td>
      <td>{ item.surface_water }</td>
      <td>{ item.population }</td>
      <td>{ item.films }</td>
      <td>{ item.created }</td>
      <td>{ item.edited }</td>
      <td>{ item.url }</td>
    </tr>
  );
}

Lines.propTypes = {
  item: PropTypes.shape({
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Lines;
