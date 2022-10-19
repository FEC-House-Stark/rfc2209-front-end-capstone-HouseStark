import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail.jsx';
import ArrowButton from './ArrowButton.jsx';
//import ArrowButton from './ArrowButton.jsx';
const { useState, useEffect } = React;

const ThumbnailCarousel = ({ photos, photoIndex, handleClick, height }) => {
  const gallery_height = height;
  const carousel_height = 350;
  const n_max_thumbnails = 4;
  const min_thumbnail_index = n_max_thumbnails - 1;
  let carousel_spacing = carousel_height / n_max_thumbnails;
  const thumbnail_width = .8 * carousel_spacing;
  const transition = 0.3;
  const thumbnailCarouselStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: `${carousel_height}px`,
    width: `${carousel_spacing}px`,
    'overflow': 'hidden',
    position: 'absolute',
    top: `${height/2 - carousel_height/2}px`
  }
  const [translate, setTranslate] = useState(0);
  const [thumbnailIndex, setThumbnailIndex] = useState(min_thumbnail_index);
  useEffect(() => {
    if (photoIndex > thumbnailIndex) {
      setTranslate((photoIndex - min_thumbnail_index) * carousel_spacing);
      setThumbnailIndex(photoIndex);
    } else if ((thumbnailIndex - photoIndex) > min_thumbnail_index) {
      setTranslate(photoIndex * carousel_spacing);
      setThumbnailIndex(photoIndex + min_thumbnail_index);
    }
  }, [photoIndex])

  const handleUpClick = () => {
    if (thumbnailIndex > n_max_thumbnails - 1) {
      setTranslate(Math.ceil(translate - carousel_spacing));
      setThumbnailIndex(thumbnailIndex - 1);
    }
  }
  const handleDownClick = () => {
    if (thumbnailIndex < photos.length - 1) {
      setTranslate(translate + carousel_spacing);
      setThumbnailIndex(thumbnailIndex + 1);
    }
  }

  return (
    <>
      {
        photos !== undefined &&
        <div style={{
          position: 'absolute',
          top: `${(450 - gallery_height) / 2}px`,
          left: '5px',
          display: 'flex',
          flexShrink: '0',
          flexDirection: 'column',
          alignItems: 'center',
          height: `${gallery_height}px`,
          width: `${carousel_spacing}px`,
        }}>
          <ArrowButton direction="up" handleClick={handleUpClick} active={thumbnailIndex > n_max_thumbnails - 1} height={height} carousel_height={carousel_height} />
          <div style={thumbnailCarouselStyle}>
            {photos.map((photo, i) => (
              <div key={photo + i} style={{
                height: `${carousel_spacing}px`,
                width: `${carousel_spacing}px`,
                transform: `translateY(-${translate}px)`,
                transition: `transform ease-out ${transition}s`,
                flexShrink: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Thumbnail photoUrl={photo.thumbnail_url} i={i} width={thumbnail_width} selected={i === photoIndex} handleClick={handleClick} />
              </div>
            ))}
          </div>
          <ArrowButton direction="down" handleClick={handleDownClick} active={thumbnailIndex < photos.length - 1} height={height} carousel_height={carousel_height} />
        </div>
      }
    </>
  )
}

export default ThumbnailCarousel;