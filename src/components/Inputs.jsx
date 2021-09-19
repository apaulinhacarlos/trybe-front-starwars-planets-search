import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';

function Inputs() {
  return (
    <div>
      <FilterByName />
      <FilterByNumericValues />
    </div>
  );
}

export default Inputs;
