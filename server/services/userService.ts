import UserModel from '../models/userModel';
import { IUser } from '../../interfaces';
import { generateHash } from '../utils';

const userModel = new UserModel();

const create = async (user: IUser): Promise<any> => {
  const hash = await generateHash(user.password);
  const newUser = await userModel.create({ ...user, password: hash });
  return newUser;
};

export default { create };
