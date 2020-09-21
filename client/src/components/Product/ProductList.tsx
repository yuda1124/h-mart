import React from 'react';
import './ProductList.scss';
import ProductTHumb from './ProductThumb';

interface ProductThumbProps {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  installment: number;
  colors: string[];
}

interface ProductListProps {
  products: ProductThumbProps[];
}

const ProductList = ({ products }: ProductListProps) => {
  const renderProductThumb = () => {
    return products?.map((product, i) => {
      return <ProductTHumb {...product} key={`product_${product.id}_${i}`} />;
    });
  };

  return <div className="wrap_productlist">{renderProductThumb()}</div>;
};

ProductList.defaultProps = {
  products: [
    {
      id: 0,
      name: '강아지',
      imgUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      installment: 0,
      colors: ['red'],
    },
    {
      id: 0,
      name: '강아지',
      imgUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      installment: 0,
      colors: ['red', 'black', 'pink'],
    },
    {
      id: 0,
      name: '강아지',
      imgUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      installment: 0,
      colors: ['red', 'gray', 'orange'],
    },
    {
      id: 0,
      name: '강아지',
      imgUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      installment: 0,
      colors: ['red'],
    },
    {
      id: 0,
      name: '강아지',
      imgUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      installment: 0,
      colors: ['red'],
    },
    {
      id: 0,
      name: '강아지',
      imgUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      installment: 0,
      colors: ['red'],
    },
  ],
};

export default ProductList;
