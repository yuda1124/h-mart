import React from 'react';
import { RootState } from '../modules';
import { Header as HeaderComponent } from '../components';
import { useSelector } from 'react-redux';

export const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return <HeaderComponent user={user} />;
};
