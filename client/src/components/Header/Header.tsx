import React from 'react';
import { MenuBar } from '..';
import { Logo } from '..';
import { Button } from '..';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <MenuBar />
      <div className="wrap_sign_button">
        <Link to="signup" className="link_page">
          <Button type="empty" onClick={() => {}} text="Sign up" />
        </Link>
        <Link to="signin" className="link_page">
          <Button type="empty" onClick={() => {}} text="Sign in" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
