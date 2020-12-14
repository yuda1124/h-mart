import React, { ReactElement } from 'react';
import './Shadow.scss';

interface ShadowProps {
  children: ReactElement;
}

const Shadow = ({ children }: ShadowProps): ReactElement => {
  return <div className="wrap_shadow">{children}</div>;
};

export default Shadow;
