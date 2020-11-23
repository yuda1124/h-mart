import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as Pages from './pages';
import { Header } from './components';
import './App.scss';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
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
            <Route path="/signin">
              <Pages.Signin />
            </Route>
            <Redirect path="*" to="/" />
          </Switch>
        </Router>
      </div>
    </ConnectedRouter>
  );
};

export default App;
