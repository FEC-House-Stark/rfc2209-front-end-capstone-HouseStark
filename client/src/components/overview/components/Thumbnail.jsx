import React from 'react';
import styled from 'styled-components';
//import ArrowButton from './ArrowButton.jsx';
const { useState, useEffect } = React;

const Thumbnail = ({photoUrl, width}) => {

  return (
    <>
    {photoUrl &&
    <div key={photoUrl} style={{
      color: 'red',
      height: `${width}px`,
      width: `${width}px`,
      borderRadius: '10%',
      border: '1pt solid #eee',
      backgroundImage: `url(${photoUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}/>}
    </>
  )
}

export default Thumbnail;