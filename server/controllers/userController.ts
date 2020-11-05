import { IUser } from '../../interfaces';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services';

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = await UserService.create(req.body);
  res.status(200).send(user);
};

export default { create };
