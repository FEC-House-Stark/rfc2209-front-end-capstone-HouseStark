import React from 'react';
import styled from 'styled-components';

const ProductDescStyle = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
`;

const prodDescStyle = {
  'gridColumnStart': '2',
  'gridRowStart': '4',
  height: '100%',
  width: '100%'
}

const ProductDesc = (props) => {

  return (
    //<ProductDescStyle>
    <div style={prodDescStyle}>
      <h2 widget='Overview' element-name='Product Slogan' onClick={props.handleClick}>{props.productInfo.slogan}</h2>
      <p widget='Overview' element-name='Product Description' onClick={props.handleClick}>{props.productInfo.slogan}>{props.productInfo.description}</p>
    </div>
    //</ProductDescStyle>
  )
}

export default ProductDesc;