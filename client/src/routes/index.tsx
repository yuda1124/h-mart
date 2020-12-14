import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';
import {
  Header as HeaderContainer,
  Loading as LoadingContainer,
} from '../containers';

const routes = (
  <>
    <HeaderContainer />
    <LoadingContainer />
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
