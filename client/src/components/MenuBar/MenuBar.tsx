import React from 'react';
import Menu from './Menu';
import './MenuBar.scss';

interface MenuBarProps {
  menuInfo: MenuProps[];
}

interface MenuProps {
  id: number;
  name: string;
}

const MenuBar = ({ menuInfo }: MenuBarProps) => {
  const renderMenus = () => {
    return menuInfo.map((info: MenuProps, i) => {
      return <Menu {...info} key={`menu_${i}`} />;
    });
  };

  return <div className="wrap_menubar">{renderMenus()}</div>;
};

MenuBar.defaultProps = {
  menuInfo: [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Project' },
    { id: 3, name: 'Sell' },
    { id: 4, name: 'Contact' },
  ],
};

export default MenuBar;
