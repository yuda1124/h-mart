import React from 'react';
import './Palette.scss';

interface PaletteProps {
  colors: string[];
}

const Palette = ({ colors }: PaletteProps) => {
  const renderColors = () => {
    return colors.map((color, i) => {
      return (
        <div
          className="color"
          key={`${color}_${i}`}
          style={{
            backgroundColor: color,
            right: `${0.5 * i}em`,
            zIndex: colors.length - i,
          }}
        />
      );
    });
  };

  return <div className="wrap_palatte">{renderColors()}</div>;
};

export default Palette;
