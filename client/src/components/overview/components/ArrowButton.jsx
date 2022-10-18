import React from 'react';
import styled from 'styled-components';
const { useEffect, useState } = React;

const ArrowButton = ({handleClick, direction, index}) =>  {
  return (
    <div
      onClick={handleClick}
      css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 25px;
      color: white;
      width: 25px;
      justify-content: center;
      background: #666;
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