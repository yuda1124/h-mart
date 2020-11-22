import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Pages from './pages';

import Header from './components/Header';
import './App.scss';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Pages.ProductPage />
          </Route>
          <Route path="/signup">
            <Pages.Signup />
          </Route>
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
