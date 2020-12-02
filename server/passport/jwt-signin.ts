import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { Request } from 'express';
import { UserService } from '../services';

const cookieExtractor = (req: Request) => {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies['token'];
  }
  return token;
};

export default new JWTStrategy(
  {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET as string,
  },
  async (jwtPayload, done) => {
    try {
      const user = await UserService.findByEmail(jwtPayload.email);
      if (user.length === 0 || !user) {
        return done(null, false, { message: 'unvalidate token' });
      }
      return done(null, user[0]);
    } catch (err) {
      return done(err);
    }
  }
);
