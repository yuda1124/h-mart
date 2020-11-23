import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { AuthState } from './auth';
import auth from './auth';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });

export default createRootReducer;

export type RootState = {
  auth: AuthState;
  router: RouterState;
};
