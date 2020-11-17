import { comparePassword } from '../utils';
import UserModel from '../models/userModel';
const LocalStrategy = require('passport-local').Strategy;
const userModel = new UserModel();

export default new LocalStrategy(
  { usernameField: 'email', passwordField: 'password', session: false },
  async (email: string, password: string, done: any) => {
    try {
      const user = await userModel.find(email);
      if (user.length === 0 || !user) {
        return done(null, false, { message: 'incorrect email' });
      }
      if (!comparePassword(password, user[0].password)) {
        return done(null, false, { message: 'incorrect password' });
      }
      return done(null, user[0]);
    } catch (err) {
      return done(err);
    }
  }
);
