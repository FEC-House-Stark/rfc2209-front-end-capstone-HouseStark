import React from 'react';
import styled from 'styled-components';

const ProductInfoStyle = styled.div`
  grid-column-start: 3;
`;

const prodInfoStyle = {
  'gridColumnStart': '3',
  height: '100%',
  width: '100%'
}

const ProductInfo = (props) => {
  console.log('Product Info', props.productInfo);

  return (
    //<ProductInfoStyle widget="Overview">
    <div style={prodInfoStyle} widget='Overview' element-name='ProductInfo' onClick={props.handleClick}>
      <div>{props.avgRating} ({props.numReviews})</div>
      <h3>{props.productInfo.category}</h3>
      <h1>{props.productInfo.name}</h1>
      <h4>${props.style.original_price}</h4>
    </div>
    //</ProductInfoStyle>
  )
}

export default ProductInfo;