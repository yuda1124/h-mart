import { createReducer } from 'typesafe-actions';
import { AuthAction, AuthState } from './types';
import { SUCCESS_SIGNIN, SUCCESS_LOGOUT } from './actions';

const initialState: AuthState = {
  user: null,
};

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [SUCCESS_SIGNIN]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  [SUCCESS_LOGOUT]: (state) => ({
    ...initialState,
  }),
});

export default auth;
