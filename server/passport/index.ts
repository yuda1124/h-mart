import passport from 'passport';
import LocalStrategy from './local-signin';

const passportConfig = () => {
  passport.use('local-signin', LocalStrategy);
};

export default passportConfig;
