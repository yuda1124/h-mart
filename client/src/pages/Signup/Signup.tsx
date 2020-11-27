import React from 'react';
import { useDispatch } from 'react-redux';
import { Signup as SignupComponent } from '../../components';
import { signupThunk } from '../../modules/auth';

const Signup = () => {
  const dispatch = useDispatch();
  const requestSignup = (email: string, password: string, name: string) => {
    dispatch(signupThunk(email, password, name));
  };
  return <SignupComponent requestSignup={requestSignup} />;
};

export default Signup;
