import React from 'react';
import './Input.scss';

interface InputProps {
  text?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
  errorMessage?: string | null;
}

const Input = ({
  text = '',
  disabled = false,
  placeholder = '',
  onChange,
  type = 'text',
  errorMessage,
}: InputProps) => {
  const renderErrorMessage = () => {
    return <p className="on_error">{errorMessage}</p>;
  };
  return (
    <div className="wrap_input">
      <input
        value={text}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {errorMessage && renderErrorMessage()}
    </div>
  );
};

export default Input;
