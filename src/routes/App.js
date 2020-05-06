import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LandingPage from '../views/LandingPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
