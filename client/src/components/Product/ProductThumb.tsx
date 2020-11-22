import React from 'react';
import { Round } from '..';
import Palatte from './Palette';
import './ProductThumb.scss';

interface ProductThumbProps {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  installment: number;
  colors: string[];
}

const ProductThumb = ({
  id,
  name,
  imgUrl,
  installment,
  colors,
}: ProductThumbProps) => {
  return (
    <div className="wrap_product_thumb">
      <div className="wrap_img">
        <img className="img_product_thumb" src={imgUrl} alt={name} />
        <div className="info_palatte">
          <Palatte colors={colors} />
        </div>
        <div className="btn_dip">
          <Round onClick={() => {}} type="add" />
        </div>
      </div>
      <div className="info_product">
        <p className="price">{`$${installment}`}</p>
        <h4 className="name_product">{name}</h4>
      </div>
    </div>
  );
};

export default ProductThumb;
