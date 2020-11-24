import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './modules';
import Thunk from 'redux-thunk';

export const history = createBrowserHistory();

const configureStore = (prevState?: any) => {
  const store = createStore(
    createRootReducer(history),
    prevState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), Thunk))
  );
  return store;
};

export default configureStore;
