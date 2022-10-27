import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const StyleSelectorStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
`;
const Checkmark = styled.div`
  color: #666;
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 12%;
  right: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;


const StyleSelectorItem = ({ photo, selected, handleClick, index, height }) => {
  const selectorItemStyle = css`
    height: 80%;
    aspect-ratio: 1/1;
    background-image: url(${photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: .5pt solid #ddd;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 10%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 0;
  `;

  return (
    <>
      <div css={selectorItemStyle} widget='Overview' element-name='StyleSelectorItem' onClick={(e) => handleClick(e, index)} />
      {selected &&
        <Checkmark>
          <FontAwesomeIcon icon={faCircleCheck} />
        </Checkmark>}
    </>
  )
}

export default StyleSelectorItem;