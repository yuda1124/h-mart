import { Dispatch } from 'redux';
import { startLoading, endLoading } from '../modules/app';
import { RootState } from '../modules';
import { replace, push } from 'connected-react-router';
const createAsyncThunk = (
  onSuccess: any,
  request: (...params: any[]) => Promise<any>,
  redirect?: string
) => {
  return (...params: any[]) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
      dispatch(startLoading());
      try {
        const result = await request(...params);
        dispatch(onSuccess(result));
        if (redirect) dispatch(push(redirect));
      } catch (e) {
        const path = getState().router.location.pathname;
        console.log(e);
        replace(path, {
          errorStatusCode: e.response.status,
        });
      } finally {
        dispatch(endLoading());
      }
    };
  };
};

export { createAsyncThunk };
