import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import MainNavbar from './components/layout/MainNavbar';
import CentralContent from './components/layout/CentralContent';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <MainNavbar />
        <CentralContent></CentralContent>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
