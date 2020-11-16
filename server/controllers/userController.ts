import createError from 'http-errors';
import { IUser } from '../../interfaces';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services';

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = req.body;
  const { email } = user;
  const exist = await UserService.findByEmail(email);
  if (exist.length > 0) {
    next(createError(403, 'duplicated email'));
  } else {
    const result = await UserService.create(user);
    res.status(200).send(result);
  }
};

export default { create };
