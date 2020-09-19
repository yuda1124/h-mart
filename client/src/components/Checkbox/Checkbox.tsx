import React, { ReactNode } from 'react';
import check from './check.png';
import './Checkbox.scss';

interface CheckboxProps {
  children: ReactNode;
  agree: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ children, onChange, agree }: CheckboxProps) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="blind"
        onChange={() => {
          onChange(!agree);
        }}
      />
      <div className={`wrap_checkbox ${agree && 'checked'}`}>
        {agree && <img src={check} alt={'check'} className="img_check" />}
      </div>
      {children}
    </label>
  );
};

export default Checkbox;
