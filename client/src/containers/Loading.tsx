import React from 'react';
import { Spinner } from '../components';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
export const Loading = () => {
  const { loading } = useSelector((state: RootState) => state.app);
  console.log(loading);
  return loading ? <Spinner /> : null;
};
