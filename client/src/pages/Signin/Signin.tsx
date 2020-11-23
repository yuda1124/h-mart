import React from 'react';
import { useDispatch } from 'react-redux';
import { signinThunk } from '../../modules/auth';
import { Signin as SigninComponent } from '../../components';
const Signin = () => {
  const dispatch = useDispatch();
  const requestSignin = (email: string, password: string) => {
    dispatch(signinThunk(email, password));
  };

  return (
    <>
      <SigninComponent requestSignin={requestSignin} />
    </>
  );
};

export default Signin;
