import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { AuthAction } from './types';
import { signin } from '../../apis/auth';
import { successSignin } from './actions';

export const signinThunk = (
  email: string,
  password: string
): ThunkAction<Promise<void>, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const user = await signin(email, password);
      console.log(user);
      dispatch(successSignin(user));
    } catch (e) {
      console.log(e.message);
    }
  };
};
