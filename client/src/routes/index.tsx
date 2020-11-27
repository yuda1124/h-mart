import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';
import { Header as HeaderContainer } from '../containers';

const routes = (
  <>
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
  </>
);

export default routes;
