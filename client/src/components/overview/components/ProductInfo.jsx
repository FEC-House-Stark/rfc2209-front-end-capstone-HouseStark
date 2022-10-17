import React from 'react';

const ProductInfo = (props) =>  {

  return (
    <div widget='Overview' element-name='ProductInfo' onClick={props.handleClick}>Product Info</div>
  )
}

export default ProductInfo;