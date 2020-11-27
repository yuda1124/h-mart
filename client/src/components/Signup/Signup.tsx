import React, { useEffect, useState } from 'react';
import { Input } from '../../components';
import { Button } from '../../components';
import { Checkbox } from '../../components';
import { validateCreateUser } from '../../validator';
import './Signup.scss';
interface SignupProps {
  requestSignup: (email: string, password: string, name: string) => void;
}
const Signup = ({ requestSignup }: SignupProps) => {
  const [userInfo, setInfo] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
    agreeTerm: false,
  } as Record<string, any>);
  const [inputError, setError] = useState({} as Record<string, any>);
  const changeInfo = (propName: string) => (value: any) => {
    setInfo({ ...userInfo, [propName]: value });
  };
  const getErrorMessage = (propName: string): string | null => {
    if (inputError[propName]) {
      return inputError[propName];
    }
    return null;
  };
  const applySignUp = () => {
    const inputError = validateCreateUser(userInfo);

    if (Object.keys(inputError).length > 0) {
      setError(inputError);
      return;
    }
    requestSignup(userInfo.email, userInfo.password, userInfo.name);
  };

  const { name, email, password, passwordCheck, agreeTerm } = userInfo;

  return (
    <div className="signup">
      <div className="form_signup">
        <h2>Create Account</h2>
        <div className="wrap_input">
          <Input
            placeholder="Name"
            type="text"
            onChange={changeInfo('name')}
            text={name}
            errorMessage={getErrorMessage('name')}
          />
          <Input
            placeholder="Email"
            type="text"
            onChange={changeInfo('email')}
            text={email}
            errorMessage={getErrorMessage('email')}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={changeInfo('password')}
            text={password}
            errorMessage={getErrorMessage('password')}
          />
          <Input
            placeholder="Password Check"
            type="password"
            onChange={changeInfo('passwordCheck')}
            text={passwordCheck}
            errorMessage={getErrorMessage('passwordCheck')}
          />
        </div>
        <div className="policy">
          <Checkbox
            onChange={changeInfo('agreeTerm')}
            agree={agreeTerm}
            errorMessage={getErrorMessage('agreeTerm')}
          >
            <span>I agree to the Terms and Privacy Policy.</span>
          </Checkbox>
        </div>
        <div className="wrap_signup_button">
          <Button text="Sign Up" type="filled" onClick={applySignUp} />
          <Button text="Sign In" type="filled" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
