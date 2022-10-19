import React from 'react';
import styled from 'styled-components';
const { useEffect, useState } = React;

const ArrowButton = ({handleClick, direction, active, height}) =>  {
  return (
    <div
      onClick={handleClick}
      css={css`
      ${active ? `display: flex;` : `display: none;`}
      position: absolute;
      top: ${(height - 25)/2}px;
      ${direction === 'right' ? `right: 25px` : `left: 75px`};
      height: 25px;
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
      {direction === 'left' ? <span>&#8592;</span> : <span>&#8594;</span>}
    </div>
  )
}

export default ArrowButton;