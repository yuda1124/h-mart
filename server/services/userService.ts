import { IUser } from '../interfaces';
import { generateHash } from '../utils';
import { getManager } from 'typeorm';
import { User } from '../entities/User';

const create = async (user: IUser): Promise<any> => {
  const repository = getManager().getRepository(User);
  const hash = await generateHash(user.password);
  const newUser = repository.create({ ...user, password: hash });
  await repository.save(newUser);
  return newUser;
};
const findByEmail = async (email: string): Promise<any> => {
  const repository = getManager().getRepository(User);
  const user = await repository.find({ where: { email: email } });
  return user;
};

export default { create, findByEmail };
