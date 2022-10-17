import React from 'react';
import styled from 'styled-components';
const StyleSelectorStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
`;

const selectorStyle = {
  'gridColumnStart': '3',
  'gridRowStart': '2',
  height: '100%',
  width: '100%'
}

const StyleSelector = (props) =>  {

  return (
    //<StyleSelectorStyle>
      <div style={selectorStyle} widget='Overview' element-name='StyleSelector' onClick={props.handleClick}>StyleSelector</div>
    //  </StyleSelectorStyle>
  )
}

export default StyleSelector;