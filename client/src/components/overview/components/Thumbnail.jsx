import React from 'react';
import styled from 'styled-components';
//import ArrowButton from './ArrowButton.jsx';
const { useState, useEffect } = React;

const Thumbnail = ({ photoUrl, width, i, selected, handleClick }) => {

  return (
    <>
      {photoUrl &&
      <div key={i}
        onClick={e => handleClick(e, i)}
        css={css`
        height: ${width}px;
        width: ${width}px;
        border-radius: 10%;
        ${selected ? `border: 2.5pt solid #666;` : `border: 0.5pt solid #eee;`}
        background-image: url(${photoUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}/>
    }
    </>
  );
}

export default Thumbnail;