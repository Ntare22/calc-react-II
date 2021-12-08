import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import calculate from '../logic/calculate';
import NavBar from './NavBar';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

export default function RouteComponent() {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });

  const clickHandler = (e) => {
    setState((prev) => calculate(prev, e.target.value));
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator handleClick={clickHandler} calcState={state} />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}
