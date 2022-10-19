import React from 'react';
import styled from 'styled-components';
const { useEffect, useState } = React;

const ArrowButton = ({handleClick, direction, active, height}) =>  {
  return (
    <div
      onClick={handleClick}
      css={css`
      display: flex;
      position: absolute;
      top: ${(height - 25)/2}px;
      ${direction === 'right' ? `right: 25px` : `left: 75px`};
      height: 25px;
      ${active ?
        `color: white;
      background: #ccc;` :
      `color: #bbb;
      background: #999;`}
      border: 1pt solid #eee;
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