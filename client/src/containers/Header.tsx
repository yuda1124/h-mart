import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { Header as HeaderComponent } from '../components';
import { signinByJwtThunk, logoutThunk } from '../modules/auth';

export const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signinByJwtThunk());
  }, []);
  const requestLogout = () => {
    dispatch(logoutThunk());
  };
  const user = useSelector((state: RootState) => state.auth.user);
  return <HeaderComponent user={user} requestLogout={requestLogout} />;
};
