import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const prodFeatStyle = {
  'gridColumnStart': '4',
  'gridRowStart': '6',
  'borderLeft': '1px solid #ddd',
  height: '100%',
  width: '100%',
}

const ProductFeat = (props) => {

  return (
    //<ProductDescStyle>
    <div style={prodFeatStyle}>
      <ul style={{listStyleType: 'none',}}>
      {props.features !== undefined &&
        props.features.map((feature, i) => {
          return <li key={feature + i}><FontAwesomeIcon icon={faCheck}/>&nbsp;{feature.value}</li>
        })
      }
      </ul>
    </div>
    //</ProductDescStyle>
  )
}

export default ProductFeat;