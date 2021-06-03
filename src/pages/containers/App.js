import React from 'react';

import '../../assets/sass/main.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Countries from './Countries';
import Country from './Country';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/:country">
        <Country />
      </Route>
      <Route path="/" exact>
        <Countries />
      </Route>
    </BrowserRouter>
  );
}

export default App;
