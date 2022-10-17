import React from 'react';
import styled from 'styled-components';

const prodFeatStyle = {
  'gridColumnStart': '3',
  'gridRowStart': '4',
  height: '100%',
  width: '100%'
}

const ProductFeat = (props) => {

  return (
    //<ProductDescStyle>
    <div style={prodFeatStyle}>
      Product Features
    </div>
    //</ProductDescStyle>
  )
}

export default ProductFeat;