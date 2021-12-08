import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteComponent from './components/RouteComponent';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
