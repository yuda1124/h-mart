import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import routes from './routes';
import './App.scss';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">{routes}</div>
    </ConnectedRouter>
  );
};

export default App;
