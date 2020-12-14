import React from 'react';
import { Shadow } from '..';
import './Spinner.scss';

const Spinner = () => {
  return (
    <Shadow>
      <div className="wrap_spinner">
        <div className="wrap_square">
          <div className="square_1"></div>
          <div className="square_2"></div>
          <div className="square_3"></div>
        </div>
        <p>LOADING~</p>
      </div>
    </Shadow>
  );
};

export default Spinner;
