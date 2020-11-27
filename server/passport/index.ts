import passport from 'passport';
import LocalStrategy from './local-signin';
import JWTStrategy from './jwt-signin';
const passportConfig = () => {
  passport.use('local-signin', LocalStrategy);
  passport.use('jwt-signin', JWTStrategy);
};

export default passportConfig;
