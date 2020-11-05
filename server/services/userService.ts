import UserModel from '../models/userModel';
import { IUser } from '../../interfaces';

const userModel = new UserModel();

const create = async (user: IUser): Promise<any> => {
  const newUser = await userModel.create(user);
  return newUser;
};

export default { create };
