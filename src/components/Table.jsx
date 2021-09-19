import React from 'react';
import TableHeaders from './TableHeaders';
import TableLines from './TableLines';

function Table() {
  return (
    <table className="table table-striped">
      <TableHeaders />
      <TableLines />
    </table>
  );
}

export default Table;
