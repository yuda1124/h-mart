import { createReducer } from 'typesafe-actions';
import { AppAction, AppState } from './types';
import { START_LOADING, END_LOADING } from './actions';

const initialState: AppState = {
  loading: false,
};

const app = createReducer<AppState, AppAction>(initialState, {
  [START_LOADING]: (state) => ({
    ...state,
    loading: true,
  }),
  [END_LOADING]: (state) => ({
    ...state,
    loading: false,
  }),
});

export default app;
