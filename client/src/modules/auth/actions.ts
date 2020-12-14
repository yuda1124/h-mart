import { createAction } from 'typesafe-actions';
import { User } from './types';

export const SUCCESS_SIGNIN = '@success/signin';
export const SUCCESS_LOGOUT = '@success/logout';
export const SUCCESS_SIGNUP = '@success/signup';
export const successSignin = createAction(SUCCESS_SIGNIN)<User>();
export const successLogout = createAction(SUCCESS_LOGOUT)();
export const successSignup = createAction(SUCCESS_SIGNUP)();
