import { createAction } from 'typesafe-actions';
import { User } from './types';

export const SUCCESS_SIGNIN = '@success/signIn';
export const SUCCESS_LOGOUT = '@success/logout';

export const successSignin = createAction(SUCCESS_SIGNIN)<User>();
export const successLogout = createAction(SUCCESS_LOGOUT)();
