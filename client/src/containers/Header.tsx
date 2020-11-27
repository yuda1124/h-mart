import React, { useEffect } from 'react';
import { RootState } from '../modules';
import { Header as HeaderComponent } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { signinByJwtThunk } from '../modules/auth';

export const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signinByJwtThunk());
  }, []);
  const user = useSelector((state: RootState) => state.auth.user);
  return <HeaderComponent user={user} />;
};
