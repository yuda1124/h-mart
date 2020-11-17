import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import UserModel from '../models/userModel';
const userModel = new UserModel();
export default new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string,
  },
  async (jwtPayload, done) => {
    try {
      const user = await userModel.find(jwtPayload.email);
      if (user.length === 0 || !user) {
        return done(null, false, { message: 'unvalidate token' });
      }
      return done(null, user[0]);
    } catch (err) {
      return done(err);
    }
  }
);
