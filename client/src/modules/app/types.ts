import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type AppAction = ActionType<typeof actions>;

export type AppState = {
  loading: boolean;
};
