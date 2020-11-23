import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type AuthAction = ActionType<typeof actions>;
export type User = {
  email: string;
  name: string;
};
export type AuthState = {
  user: User | null;
};
