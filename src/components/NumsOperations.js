import React from 'react';

const numsOperations = [
  { key: 'clear', value: 'AC' },
  { key: 'plusMinus', value: '+/-' },
  { key: 'modulo', value: '%' },
  { key: 'divide', value: '÷' },
  { key: 'seven', value: 7 },
  { key: 'eight', value: 8 },
  { key: 'nine', value: 9 },
  { key: 'multiply', value: 'x' },
  { key: 'four', value: 4 },
  { key: 'five', value: 5 },
  { key: 'six', value: 6 },
  { key: 'subtract', value: '-' },
  { key: 'one', value: 1 },
  { key: 'two', value: 2 },
  { key: 'three', value: 3 },
  { key: 'plus', value: '+' },
  { key: 'zero', value: 0 },
  { key: 'dot', value: '.' },
  { key: 'equals', value: '=' },
];

const NumsOperations = (props) => {
  const { handleClick } = props;
  const buttons = numsOperations.map((item) => <button className="calc-btn" id={item.key} onClick={handleClick} value={item.value} type="submit" key={item.key}>{item.value}</button>);
  return <div className="calc-container">{buttons}</div>;
};

export default NumsOperations;
