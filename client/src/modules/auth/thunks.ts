import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { AuthAction, User } from './types';
import { signin, signup, signinByJwt, logout } from '../../apis/auth';
import { successSignin, successLogout } from './actions';
import { push } from 'connected-react-router';

export const signinThunk = (
  email: string,
  password: string
): ThunkAction<Promise<void>, RootState, null, any> => {
  return async (dispatch) => {
    try {
      const user = await signin(email, password);
      dispatch(successSignin(user));
      dispatch(push('/'));
    } catch (e) {
      console.log(e.response.data.messages);
    }
  };
};

export const signinByJwtThunk = (): ThunkAction<
  Promise<void>,
  RootState,
  null,
  any
> => {
  return async (dispatch) => {
    try {
      const user = await signinByJwt();
      dispatch(successSignin(user));
      dispatch(push('/'));
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.messages);
      }
    }
  };
};

export const signupThunk = (
  email: string,
  password: string,
  name: string
): ThunkAction<Promise<void>, RootState, null, any> => {
  return async (dispatch) => {
    try {
      const user = await signup(email, password, name);
      dispatch(push('/'));
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.messages);
      }
    }
  };
};

export const logoutThunk = (): ThunkAction<
  Promise<void>,
  RootState,
  null,
  any
> => {
  return async (dispatch) => {
    try {
      await logout();
      dispatch(successLogout());
      dispatch(push('/'));
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.messages);
      }
    }
  };
};
