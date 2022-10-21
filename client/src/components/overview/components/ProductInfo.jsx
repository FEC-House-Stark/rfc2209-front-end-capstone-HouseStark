import React from 'react';
import styled from 'styled-components';

const ProductInfoStyle = styled.div`
  grid-column-start: 4;
`;

const prodInfoStyle = {
  'gridColumnStart': '4',
  height: '100%',
  width: '100%',
  position: 'relative',
}

const ProductInfo = (props) => {
 // console.log('Product Info', props.productInfo);

  return (
    //<ProductInfoStyle widget="Overview">
    <div style={prodInfoStyle} widget='Overview' element-name='ProductInfo' onClick={props.handleClick}>
      <div>{props.avgRating} <span className="num-reviews">({props.numReviews})</span></div>
      <h3 className="product-category">{props.productInfo.category}</h3>
      <h1 className="product-name">{props.productInfo.name}</h1>
      <h4 className="product-price">${props.style.original_price}</h4>
    </div>
    //</ProductInfoStyle>
  )
}

export default ProductInfo;