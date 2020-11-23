import { createAction } from 'typesafe-actions';
import { User } from './types';

export const SUCCESS_SIGNIN = '@success/signIn';

export const successSignin = createAction(SUCCESS_SIGNIN)<User>();
