import UserModel from '../models/userModel';
import { IUser } from '../../interfaces';
import { generateHash } from '../utils';

const userModel = new UserModel();

const create = async (user: IUser): Promise<any> => {
  const hash = await generateHash(user.password);
  const newUser = await userModel.create({ ...user, password: hash });
  return newUser;
};
const findByEmail = async (email: string): Promise<any> => {
  const user = await userModel.find(email);
  return user;
};

export default { create, findByEmail };
