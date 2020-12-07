import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { ErrorHandler } from './hocs';
import routes from './routes';
import './App.scss';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <ErrorHandler>
        <div className="App">{routes}</div>
      </ErrorHandler>
    </ConnectedRouter>
  );
};

export default App;
