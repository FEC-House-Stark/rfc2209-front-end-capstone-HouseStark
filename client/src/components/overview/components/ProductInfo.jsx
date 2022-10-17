import React from 'react';
import styled from 'styled-components';

const ProductInfoStyle = styled.div`
  grid-column-start: 3;
`;

const prodInfoStyle = {
  'grid-column-start': '3',
  height: '100%',
  width: '100%'
}

const ProductInfo = (props) =>  {
  console.log('Product Info', props.productInfo);

  return (
    //<ProductInfoStyle>
    <div style={prodInfoStyle} widget='Overview' element-name='ProductInfo' onClick={props.handleClick}>
      ProdInfo
      </div>
      //</ProductInfoStyle>
  )
}

export default ProductInfo;