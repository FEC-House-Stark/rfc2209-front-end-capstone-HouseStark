import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const { useEffect, useState } = React;

const button_height = 25;
const button_margin = 0;

const arrowSymbols = {
  'right': faArrowRight,
  'left': faArrowLeft,
  'up': faChevronUp,
  'down': faChevronDown,
}

const ArrowButton = ({handleClick, direction, active, height, carousel_height, handleEnter, handleLeave, expanded }) =>  {
  const position = {
    'right': `position: absolute;
    right: 25px;
    top: ${(height - button_height)/2}px;`,
    'left': `position: absolute;
    left: ${expanded ? '25px' : '75px'};
    top: ${(height - button_height)/2}px;`,
    'up': `position: absolute;
    top: ${height/2-carousel_height/2 - button_height - button_margin}px;`,
    'down': `position: absolute;
    top: ${height/2+carousel_height/2 + button_margin}px;`,
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      css={css`
      ${active ? `display: flex;` : `display: none;`}
      ${position[direction]}
      height: ${button_height}px;
      color: #666;
      background: rgba(255, 255, 255, .6);
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