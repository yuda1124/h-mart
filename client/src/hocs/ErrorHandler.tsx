import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Page404 } from '../pages';
interface ErrorHandlerProps {
  children: ReactElement;
}

export const ErrorHandler = ({ children }: ErrorHandlerProps): ReactElement => {
  const location = useLocation();
  const state: any = location.state;
  if (state && state.errorStatueCode) {
    switch (state.errorStatueCode) {
      case 404:
        return <Page404 />;
    }
  }
  return children;
};
