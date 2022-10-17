import React from 'react';
import styled from 'styled-components';

const ProductDescStyle = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
`;

const prodDescStyle = {
  'grid-column-start': '2',
  'grid-column-end': '4',
  'grid-row-start': '4',
  height: '100%',
  width: '100%'
}

const ProductDesc = (props) =>  {

  return (
    //<ProductDescStyle>
      <div style={prodDescStyle} widget='Overview' element-name='Product Description' onClick={props.handleClick}>Product Desc</div>
      //</ProductDescStyle>
  )
}

export default ProductDesc;