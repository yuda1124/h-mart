import { createReducer } from 'typesafe-actions';
import { AuthAction, AuthState } from './types';
import { SUCCESS_SIGNIN } from './actions';

const initialState: AuthState = {
  user: null,
};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [SUCCESS_SIGNIN]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
});

export default auth;
