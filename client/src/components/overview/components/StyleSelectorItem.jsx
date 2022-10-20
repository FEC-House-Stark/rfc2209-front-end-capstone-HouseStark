import React from 'react';
import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const StyleSelectorStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
`;


const StyleSelectorItem = ({photo, selected, handleClick, index}) => {
  const selectorItemStyle = css`
    width: 80%;
    height: 80%;
    background-image: url(${photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: '.5pt solid #eee';
    border-radius: 50%;
  `;

  return (
    <>
    {selected && <FontAwesomeIcon style={{
      position: 'relative',
      top: '1%',
      left: '30%',
    }}icon={faCircleCheck}/>}
    <div css={selectorItemStyle} widget='Overview' element-name='StyleSelectorItem' onClick={(e) => handleClick(e, index)}/>
    </>
  )
}

export default StyleSelectorItem;