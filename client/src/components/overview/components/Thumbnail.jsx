import React from 'react';
import styled from 'styled-components';
//import ArrowButton from './ArrowButton.jsx';
const { useState, useEffect } = React;

const selected_expand = 1.15;

const Thumbnail = ({ photoUrl, width, i, selected, handleClick }) => {

  return (
    <>
      {photoUrl &&
      <div key={i}
        onClick={e => handleClick(e, i)}
        css={css`
        height: ${selected ? width * selected_expand : width}px;
        width: ${selected ? width * selected_expand : width}px;
        border-radius: 10%;
        ${selected ? `border: 2pt solid #ddd;` : `border: 0.5pt solid #eee;`}
        background-image: url(${photoUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      `}/>
    }
    </>
  );
}

export default Thumbnail;