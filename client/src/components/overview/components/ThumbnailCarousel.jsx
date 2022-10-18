import React from 'react';
import styled from 'styled-components';
//import ArrowButton from './ArrowButton.jsx';
const { useState, useEffect } = React;

const thumbnailCarouselStyle = {
  display: 'flex',
  position: 'absolute',
  top: '10%',
  left: '5px',
 // position: 'relative',
  height: '300px',
  width: '75px',
  border: '1pt solid red',
  'overflow': 'hidden'
}

const ThumbnailCarousel = (thumbnails) => {

  return (
    <>
      {
        thumbnails !== undefined &&
        <div style={thumbnailCarouselStyle}>
          test
        </div>
      }
    </>
  )
}

export default ThumbnailCarousel;