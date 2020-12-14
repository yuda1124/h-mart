import { createAction } from 'typesafe-actions';

export const START_LOADING = '@start/loading';
export const END_LOADING = '@end/loading';

export const startLoading = createAction(START_LOADING)();
export const endLoading = createAction(END_LOADING)();
