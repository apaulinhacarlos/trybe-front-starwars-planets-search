import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TableHeaders() {
  const { dataHeader } = useContext(PlanetContext);

  const tableHeader = () => {
    if (dataHeader) {
      const dataKeys = Object.keys(dataHeader[0]);
      const noResidents = dataKeys.filter((item) => item !== 'residents');
      const header = noResidents.map((item) => <th key={ item }>{ item }</th>);
      return header;
    }
  };

  return (
    <thead>
      <tr>
        { tableHeader() }
      </tr>
    </thead>
  );
}

export default TableHeaders;
