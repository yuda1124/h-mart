import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  type: string;
  onClick: () => void;
}

function Button({ text, type, onClick }: ButtonProps) {
  const setButtonType = () => {
    switch (type) {
      case 'empty':
        return 'btn_empty';
      case 'filled':
        return 'btn_filled';
    }
  };
  return (
    <button className={`btn_base ${setButtonType()}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
