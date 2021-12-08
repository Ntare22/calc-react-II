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
    <div className="calc-wrap">
      <h2>Let&apos;s do some Maths!</h2>
      <div>
        <input className="calc-screen" placeholder="0" value={value} readOnly />
        <NumsOperations handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
