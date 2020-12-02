import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services';
import passport from 'passport';
import { HTTP_STATUS } from '../constants';

const create = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = req.body;
  const { email } = user;
  const exist = await UserService.findByEmail(email);
  if (exist.length > 0) {
    return next(createError(HTTP_STATUS.FORBIDDEN, 'duplicated email'));
  }
  const result = await UserService.create(user);
  res.json({ success: true });
};

const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  passport.authenticate('local-signin', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(createError(HTTP_STATUS.UNAUTHORIZED, info.message));
    }
    const payload = { email: user.email, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '2h',
    });
    res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 2 * 1000 });
    return res.json({ success: true, user: payload });
  })(req, res, next);
};

const signinByJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  passport.authenticate('jwt-signin', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(createError(HTTP_STATUS.UNAUTHORIZED, info.message));
    }
    const payload = { email: user.email, name: user.name };
    return res.json({ success: true, user: payload });
  })(req, res, next);
};

const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  res.cookie('token', null, { maxAge: 0 });
  res.json({ success: true });
};

export default { create, signin, signinByJwt, logout };
