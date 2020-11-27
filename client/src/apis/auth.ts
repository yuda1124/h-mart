import api from './api';
import { User } from '../modules/auth';

export const signin = async (
  email: string,
  password: string
): Promise<User> => {
  const response = await api.post('/user/signin', { email, password });
  return response.data;
};

export const signup = async (
  email: string,
  password: string,
  name: string
): Promise<User> => {
  const response = await api.post('/user/signup', { email, name, password });
  return response.data;
};
