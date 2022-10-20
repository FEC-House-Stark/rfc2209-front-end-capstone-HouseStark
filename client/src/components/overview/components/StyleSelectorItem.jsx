import React from 'react';
import styled from 'styled-components';

const StyleSelectorStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
`;


const StyleSelectorItem = ({photo, selected, handleClick, index}) => {
  const selectorItemStyle = css`
    width: 50px;
    height: 50px;
    background-image: url(${photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: ${selected && '1pt solid red'};
  `

  return (
    <div css={selectorItemStyle} widget='Overview' element-name='StyleSelectorItem' onClick={(e) => handleClick(e, index)}/>
  )
}

export default StyleSelectorItem;