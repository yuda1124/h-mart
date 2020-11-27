import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { AuthAction } from './types';
import { signin, signup } from '../../apis/auth';
import { successSignin } from './actions';

export const signinThunk = (
  email: string,
  password: string
): ThunkAction<Promise<void>, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const user = await signin(email, password);
      dispatch(successSignin(user));
    } catch (e) {
      console.log(e.response.data.messages);
    }
  };
};

export const signupThunk = (
  email: string,
  password: string,
  name: string
): ThunkAction<Promise<void>, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const user = await signup(email, password, name);
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.messages);
      }
    }
  };
};
