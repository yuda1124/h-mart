import React from 'react';
import logo from './logo.png';
import './Logo.scss';

function Logo() {
  return (
    <div className="wrap_logo">
      <button className="btn_logo">
        <img src={logo} alt={'logo'} className="img_logo" />
      </button>
    </div>
  );
}

export default Logo;
