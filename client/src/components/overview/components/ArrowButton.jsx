import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
const { useEffect, useState } = React;

const button_height = 25;
const button_margin = 0;
const sideOffset = {
  'right': 'right: 25px;',
  'left': 'left: 75px;',
  'up': '',//'left 50px;',
  'down': '',//'left 50px;',
}

const arrowSymbols = {
  'right': faArrowRight,
  'left': faArrowLeft,
  'up': faChevronUp,
  'down': faChevronDown,
}

const ArrowButton = ({handleClick, direction, active, height, carousel_height }) =>  {
  const position = {
    'right': 'position: absolute;',
    'left': 'position: absolute;',
    'up': `position: absolute;
    top: ${height/2-carousel_height/2 - button_height - button_margin}px;`,
    'down': `position: absolute;
    top: ${height/2+carousel_height/2 + button_margin}px;`,
  }
  const topOffset = {
    'right': `top: ${(height - button_height)/2}px;`,
    'left': `top: ${(height - button_height)/2}px;`,
    'up': ``,
    'down': ``,
  }
  return (
    <div
      onClick={handleClick}
      css={css`
      ${active ? `display: flex;` : `display: none;`}
      ${position[direction]}
      ${topOffset[direction]}
      ${sideOffset[direction]}
      height: ${button_height}px;
      color: #666;
      background: white;
      width: 25px;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      `}
    >
      <FontAwesomeIcon icon={arrowSymbols[direction]}/>
    </div>
  )
}

export default ArrowButton;