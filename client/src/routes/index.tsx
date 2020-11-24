import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Pages from '../pages';
import { Header as HeaderContainer } from '../containers';

const routes = (
  <Router>
    <HeaderContainer />
    <Switch>
      <Route exact path="/">
        <Pages.ProductPage />
      </Route>
      <Route path="/signup">
        <Pages.Signup />
      </Route>
      <Route path="/signin">
        <Pages.Signin />
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default routes;
