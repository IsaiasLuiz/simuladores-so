import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/homePage';
import ProcessList from './pages/processList';
import Simulation from './pages/simulation';

const routes = ({ props } = props ) => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <HomePage props={props} />}
        />
        <Route
          path='/process-list'
          component={ ProcessList }
        />
        <Route
          path='/simulation'
          component={() => <Simulation props={props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
