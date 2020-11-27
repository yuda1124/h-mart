import React from 'react';
import { MenuBar } from '..';
import { Logo } from '..';
import { Button } from '..';
import { Link } from 'react-router-dom';
import { AuthState } from '../../modules/auth';
import './Header.scss';

interface HeaderProps extends AuthState {
  requestLogout: () => void;
}

const Header = ({ user, requestLogout }: HeaderProps) => {
  const renderAuthButtons = () => {
    return (
      <div className="wrap_sign_button">
        <Link to="signup" className="link_page">
          <Button type="empty" onClick={() => {}} text="Sign up" />
        </Link>
        <Link to="signin" className="link_page">
          <Button type="empty" onClick={() => {}} text="Sign in" />
        </Link>
      </div>
    );
  };
  const renderProfile = () => {
    return (
      <div>
        <span>{user?.name}</span>
        <Button
          type="empty"
          onClick={() => {
            requestLogout();
          }}
          text="Logout"
        />
      </div>
    );
  };
  return (
    <header className="header">
      <Logo />
      <MenuBar />
      {user ? renderProfile() : renderAuthButtons()}
    </header>
  );
};

export default Header;
