import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data } = useContext(PlanetContext);

  return (
    <div>
      <h1>Eu sou o Componente Table!</h1>
      { data ? (
        <table>
          <tr>
            <th>name</th>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>films</th>
            <th>gravity</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th>url</th>
          </tr>
          {
            data.map((item) => (
              <tbody key={ item.name }>
                <tr>
                  <td>{ item.name }</td>
                  <td>{ item.climate }</td>
                  <td>{ item.created }</td>
                  <td>{ item.diameter }</td>
                  <td>{ item.edited }</td>
                  <td>{ item.films }</td>
                  <td>{ item.gravity }</td>
                  <td>{ item.orbital_period }</td>
                  <td>{ item.population }</td>
                  <td>{ item.rotation_period }</td>
                  <td>{ item.surface_water }</td>
                  <td>{ item.terrain }</td>
                  <td>{ item.url }</td>
                </tr>
              </tbody>
            ))
          }
        </table>
      ) : null}
    </div>
  );
}

export default Table;
