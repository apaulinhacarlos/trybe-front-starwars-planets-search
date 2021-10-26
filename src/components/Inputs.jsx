import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';
import FilterByOrder from './FilterByOrder';

function Inputs() {
  return (
    <div className="div-form">
      <FilterByName />
      <FilterByNumericValues />
      <FilterByOrder />
    </div>
  );
}

export default Inputs;
