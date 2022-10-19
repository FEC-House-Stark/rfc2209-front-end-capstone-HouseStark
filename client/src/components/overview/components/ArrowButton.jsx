import React from 'react';
import styled from 'styled-components';
const { useEffect, useState } = React;

const button_height = 25;
const button_margin = 5;
const sideOffset = {
  'right': 'right: 25px;',
  'left': 'left: 100px;',
  'up': '',//'left 50px;',
  'down': '',//'left 50px;',
}

const arrowSymbols = {
  'right': '→',
  'left': '←',
  'up': '↑',
  'down': '↓',
}

const ArrowButton = ({handleClick, direction, active, height, carousel_height}) =>  {
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
      color: white;
      background: #ccc;
      border: .25pt solid #eee;
      width: 25px;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      `}
    >
      {arrowSymbols[direction]}
    </div>
  )
}

export default ArrowButton;