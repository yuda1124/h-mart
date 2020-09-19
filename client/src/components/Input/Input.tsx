import React, { useState } from 'react';
import './Input.scss';

interface InputProps {
  text?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
}

const Input = ({
  text = '',
  disabled = false,
  placeholder = '',
  onChange,
  type = 'text',
}: InputProps) => {
  return (
    <div className="wrap_input">
      <input
        value={text}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
