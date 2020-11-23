import createError from 'http-errors';
import { IUser } from '../../interfaces';
import jwt from 'jsonwebtoken';
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
    return next(createError(403, 'duplicated email'));
  }
  const result = await UserService.create(user);
  res.status(200).send(result);
};

const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  passport.authenticate('local-signin', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(createError(401, info.message));
    }
    const payload = { email: user.email, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '2h',
    });
    res.cookie('token', token, { httpOnly: true });
    return res.json({ success: true, user: payload });
  })(req, res, next);
};
export default { create, signIn };
