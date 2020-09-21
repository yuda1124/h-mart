import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Logo.scss';

function Logo() {
  return (
    <div className="wrap_logo">
      <Link to="/">
        <button className="btn_logo">
          <img src={logo} alt={'logo'} className="img_logo" />
        </button>
      </Link>
    </div>
  );
}

export default Logo;
