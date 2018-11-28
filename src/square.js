import React from 'react';

const Square = props => (
  <button className={`${props.winnerClass} ${props.value} square`} onClick={props.onClick}>
  </button>
);

export default Square;
