import { signin, signup, signinByJwt, logout } from '../../apis/auth';
import { successSignin, successLogout, successSignup } from './actions';
import { createAsyncThunk } from '../../utils/thunks';

export const signinThunk = createAsyncThunk(successSignin, signin, '/');
export const signinByJwtThunk = createAsyncThunk(successSignin, signinByJwt);
export const logoutThunk = createAsyncThunk(successLogout, logout);
export const signupThunk = createAsyncThunk(successSignup, signup, '/');
