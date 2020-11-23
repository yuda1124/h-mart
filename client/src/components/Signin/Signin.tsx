import React, { useState } from 'react';
import { Input } from '..';
import { Button } from '..';
import './Signin.scss';

interface SigninProps {
  requestSignin: (email: string, password: string) => void;
}

const Signin = ({ requestSignin }: SigninProps) => {
  const [userInfo, setInfo] = useState({
    email: '',
    password: '',
  });

  const changeInfo = (propName: string) => (value: any) => {
    setInfo({ ...userInfo, [propName]: value });
  };

  const { email, password } = userInfo;

  return (
    <div className="signin">
      <div className="form_signin">
        <h2>Sign In</h2>
        <div className="wrap_input">
          <Input
            placeholder="Email"
            type="text"
            onChange={changeInfo('email')}
            text={email}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={changeInfo('password')}
            text={password}
          />
        </div>
        <div className="wrap_signin_button">
          <Button
            text="Sign In"
            type="empty"
            onClick={() => {
              requestSignin(email, password);
            }}
          />
          <Button text="Sign Up" type="empty" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
