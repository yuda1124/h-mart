import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import auth, { AuthState } from './auth';

import app, { AppState } from './app';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    app,
  });

export default createRootReducer;

export type RootState = {
  router: RouterState;
  auth: AuthState;
  app: AppState;
};
