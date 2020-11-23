import axios from 'axios';
import api from './api';
import { User } from '../modules/auth';

export const signin = async (
  email: string,
  password: string
): Promise<User> => {
  const response = await api.post('/user/signIn', { email, password });
  return response.data;
};
