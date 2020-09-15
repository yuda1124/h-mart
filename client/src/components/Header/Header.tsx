import React from 'react';
import MenuBar from '../MenuBar';
import Logo from '../Logo';
import Button from '../Button';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Logo />
      <MenuBar />
      <div className="wrap_sign_button">
        <Button type="empty" onClick={() => {}} text="Sign in" />
        <Button type="empty" onClick={() => {}} text="Sign up" />
      </div>
    </header>
  );
}

export default Header;
