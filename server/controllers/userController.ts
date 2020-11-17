import createError from 'http-errors';
import { IUser } from '../../interfaces';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services';
import passport from 'passport';

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

const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log('body parsing', req.body);

  passport.authenticate('local-signin', (err, user, message) => {
    console.log(err, user, message);
  })(req, res, next);
};
export default { create, signIn };
