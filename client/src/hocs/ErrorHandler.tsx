import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Page404 } from '../pages';
interface ErrorHandlerProps {
  children: React.ReactElement;
}

export const ErrorHandler = ({
  children,
}: ErrorHandlerProps): React.ReactElement => {
  const location = useLocation();
  const state: any = location.state;
  console.log(location);
  if (state && state.errorStatueCode) {
    switch (state.errorStatueCode) {
      case 404:
        return <Page404 />;
    }
  }
  return children;
};
