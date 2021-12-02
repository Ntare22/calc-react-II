import React from 'react';
import NumsOperations from './NumsOperations';
import '../logic/operate';

const Calculator = (props) => {
  const { calcState, handleClick } = props;
  const { total, next } = calcState;
  let value = 0;
  if (next) {
    value = next;
  } else if (total) {
    value = total;
  }

  return (
    <>
      <input className="calc-screen" placeholder="0" value={value} readOnly />
      <NumsOperations handleClick={handleClick} />
    </>
  );
};

export default Calculator;
