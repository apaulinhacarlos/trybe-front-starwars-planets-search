import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';

function Inputs() {
  return (
    <div className="div-form">
      <FilterByName />
      <FilterByNumericValues />
    </div>
  );
}

export default Inputs;
