import React, { useState } from 'react';
import calculate from './logic/calculate';
import Calculator from './components/Calculator';

const App = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });

  const clickHandler = (e) => {
    setState((prev) => calculate(prev, e.target.value));
  };

  const { total, next } = state;
  const stateOfCalc = { total, next };
  return (
    <>
      <Calculator handleClick={clickHandler} calcState={stateOfCalc} />
    </>
  );
};

export default App;
