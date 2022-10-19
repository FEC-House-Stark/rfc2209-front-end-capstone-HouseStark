import React from 'react';
import styled from 'styled-components';
//import ArrowButton from './ArrowButton.jsx';
const { useState, useEffect } = React;

const Thumbnail = ({ photoUrl, width, selected }) => {

  return (
    <>
      {photoUrl &&
      <div key={photoUrl} css={css`
        height: ${width}px;
        width: ${width}px;
        border-radius: 10%;
        ${selected ? `border: 2pt solid #EAE0CC;` : `border: 1pt solid #eee;`}
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