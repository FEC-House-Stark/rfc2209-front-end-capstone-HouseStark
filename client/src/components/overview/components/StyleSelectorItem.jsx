import React from 'react';
import styled from 'styled-components';

const StyleSelectorStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
`;


const StyleSelectorItem = ({photo, selected, handleClick, index}) => {
  const selectorStyle = {
    width: '50px',
    height: '50px',
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <div style={selectorStyle} widget='Overview' element-name='StyleSelectorItem' onClick={(e) => handleClick(e, index)}/>
  )
}

export default StyleSelectorItem;