import React, { useState } from 'react';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import './Signup.scss';

const Signin = () => {
  const [userInfo, setInfo] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
    agree: false,
  });

  const changeInfo = (propName: string) => (value: any) => {
    setInfo({ ...userInfo, [propName]: value });
  };

  const { name, email, password, passwordCheck, agree } = userInfo;

  return (
    <div className="signin">
      <div className="form_signin">
        <h2>Create Account</h2>
        <div className="wrap_input">
          <Input
            placeholder="Name"
            type="text"
            onChange={changeInfo('name')}
            text={name}
          />
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
          <Input
            placeholder="Password Check"
            type="password"
            onChange={changeInfo('passwordCheck')}
            text={passwordCheck}
          />
        </div>
        <div className="policy">
          <Checkbox onChange={changeInfo('agree')} agree={agree}>
            <span>I agree to the Terms and Privacy Policy.</span>
          </Checkbox>
        </div>
        <div className="wrap_signin_button">
          <Button text="Sign Up" type="filled" onClick={() => {}} />
          <Button text="Sign In" type="filled" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
