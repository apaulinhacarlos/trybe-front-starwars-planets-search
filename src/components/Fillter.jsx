import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { inputNumeric } = useContext(PlanetContext);
  // console.log(filters);

  const { setDeleteFilter } = useContext(PlanetContext);

  const handleClick = (index) => {
    setDeleteFilter(index);
  };

  const showFilter = () => {
    // const newFilter = inputNumeric.filter((_item, index) => index !== 0);
    // const map = newFilter.map((item, index) => (
    //   <div key={ index }>
    //     <p
    //       data-testid="filter"
    //     >
    //       {`${item.column}, ${item.comparison}, ${item.value}`}
    //     </p>
    //     {/* <button onClick={ () => handleClick(index) } type="button">X</button> */}
    //   </div>
    // ));
    // return map;
    // console.log(inputNumeric);
    const { column, comparison, value } = inputNumeric;
    if (inputNumeric) {
      return (
        <div>
          <span>{`${column}, ${comparison}, ${value}`}</span>
          <button
            onClick={ () => handleClick(0) }
            type="button"
            className="div-form btn btn-primary"
          >
            X
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      { inputNumeric ? showFilter() : null}
    </div>
  );
}

export default Filter;
