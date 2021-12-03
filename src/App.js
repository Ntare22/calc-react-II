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

  return (
    <>
      <Calculator handleClick={clickHandler} calcState={state} />
    </>
  );
};

export default App;
