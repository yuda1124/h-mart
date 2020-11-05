import Pool from './pool';
import { IUser } from '../../interfaces';
import { getCurrentTime } from '../utils';

const CREATE_USER =
  'INSERT INTO USER(name, email, password, activation, createdAt, editedAt ) VALUES (?, ?, ?, 1, ?, ?)';

export default class UserModel {
  constructor() {}

  async create({ name, email, password }: IUser) {
    const connection = await Pool.getConnection();
    const [rows] = await connection.execute(CREATE_USER, [
      name,
      email,
      password,
      getCurrentTime(),
      getCurrentTime(),
    ]);
    connection.release();
    return rows;
  }
}
