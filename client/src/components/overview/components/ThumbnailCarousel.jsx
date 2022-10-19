import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail.jsx';
//import ArrowButton from './ArrowButton.jsx';
const { useState, useEffect } = React;

const carousel_height = 350;
const n_max_thumbnails = 7;
let carousel_spacing = carousel_height/n_max_thumbnails;
const thumbnail_width = .8*carousel_spacing;
const thumbnailCarouselStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: `${(400-carousel_height)/2}px`,
  left: '5px',
  height: `${carousel_height}px`,
  width: `${carousel_spacing}px`,
  'overflow': 'hidden'
}

const ThumbnailCarousel = ({photos, photoIndex, handleClick}) => {

  return (
    <>
      {
        photos !== undefined &&
        <div style={thumbnailCarouselStyle}>
          {photos.map((photo, i) => (
            <div key={photo + i} style={{
              height: `${carousel_spacing}px`,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Thumbnail photoUrl={photo.thumbnail_url} i={i} width={thumbnail_width} selected={i===photoIndex} handleClick={handleClick}/>
              </div>
          ))}
        </div>
      }
    </>
  )
}

export default ThumbnailCarousel;