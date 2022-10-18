import React from 'react';
import styled from 'styled-components';

const prodFeatStyle = {
  'borderLeft': '1px solid gray',
  'gridColumnStart': '4',
  'gridRowStart': '4',
  height: '100%',
  width: '100%'
}

const ProductFeat = (props) => {

  return (
    //<ProductDescStyle>
    <div style={prodFeatStyle}>
      <ul>
      {props.features !== undefined &&
        props.features.map((feature, i) => {
          return <li key={feature + i}>{feature.value}</li>
        })
      }
      </ul>
    </div>
    //</ProductDescStyle>
  )
}

export default ProductFeat;