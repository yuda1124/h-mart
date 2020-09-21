import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from './pages/Main';
import Signin from './pages/Signin';
import ProductPage from './pages/ProductPage';

import Header from './components/Header';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductPage />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Redirect path="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
