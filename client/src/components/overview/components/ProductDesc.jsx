import React from 'react';
import styled from 'styled-components';

const prodDescStyle = {
  'gridColumnStart': '2',
  'gridRowStart': '6',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}

const ProductDesc = (props) => {

  return (
    <div style={prodDescStyle}>
      <div style={{width: '85%'}}>
        <h3 id='product-desc' widget='Overview' element-name='Product Slogan' onClick={props.handleClick}>{props.productInfo.slogan}</h3>
        <p widget='Overview' element-name='Product Description' onClick={props.handleClick}>{props.productInfo.slogan}>{props.productInfo.description}</p>
      </div>
    </div>
  )
}

export default ProductDesc;