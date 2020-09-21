import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Signin from './pages/Signin';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
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
