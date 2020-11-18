import React from 'react';
import './Menu.scss';

interface MenuProps {
  id: number;
  name: string;
}

const Menu = ({ id, name }: MenuProps) => {
  return (
    <div className={`wrap_menu ${id === 1 ? 'current' : ''}`}>
      <button
        id={`menu_${id}`}
        className="btn_menu"
        onClick={() => alert('hi')}
      >
        <span className="name_menu">{name}</span>
      </button>
    </div>
  );
};

export default Menu;
