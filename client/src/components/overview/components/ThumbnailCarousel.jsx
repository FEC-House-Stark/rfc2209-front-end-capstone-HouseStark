import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail.jsx';
import ArrowButton from './ArrowButton.jsx';
const { useState, useEffect } = React;

const n_max_thumbnails = 7;
const transition = 0.3;
const min_thumbnail_index = n_max_thumbnails - 1;

const ThumbnailCarousel = ({ photos, photoIndex, handleClick, height, expanded }) => {
  /* styles */
  const gallery_height = expanded ? 200:height;
  const carousel_height = gallery_height * .85;
  const carousel_spacing = carousel_height / n_max_thumbnails;
  const thumbnail_width = .75 * carousel_spacing;
  const thumbnailCarouselStyle = {
    display: 'flex',
    flexDirection: `${expanded ? 'row': 'column'}`,
    height: `${expanded ? `${carousel_spacing}px`:`${carousel_height}px`}`,
    width: `${expanded ? `${carousel_height}px`:`${carousel_spacing}px`}`,
    //width: `${carousel_spacing}px`,
    'overflow': 'hidden',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    margin: 'auto 0',
  }

  /* states */
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

  const handleUpClick = (e) => {
    if (thumbnailIndex > n_max_thumbnails - 1) {
      setTranslate(Math.ceil(translate - carousel_spacing));
      setThumbnailIndex(thumbnailIndex - 1);
    }
    e.stopPropagation();
  }
  const handleDownClick = (e) => {
    if (thumbnailIndex < photos.length - 1) {
      setTranslate(translate + carousel_spacing);
      setThumbnailIndex(thumbnailIndex + 1);
    }
    e.stopPropagation();
  }

  return (
    <>
      {
        photos !== undefined &&
        <div style={{
          position: 'absolute',
          top: `${expanded ? '': '0'}`,
          bottom: `${expanded ? '10px': '0'}`,
          margin: `${expanded ? '0 auto': 'auto 0'}`,
          left: `${expanded ? '0': '10px'}`,
          right: `${expanded ? '0': ''}`,
          display: 'flex',
          flexShrink: '0',
          flexDirection: 'column',
          alignItems: 'center',
          height: `${expanded ? `${carousel_spacing}px`:`${gallery_height}px`}`,
          width: `${expanded ? `${carousel_height}px`:`${carousel_spacing}px`}`,
        }}>
          <ArrowButton direction={expanded ? 'leftThumb':'up'} handleClick={handleUpClick} active={thumbnailIndex > n_max_thumbnails - 1} height={height} carousel_height={carousel_height}/>
          <div style={thumbnailCarouselStyle}>
            {photos.map((photo, i) => (
              <div key={photo + i} style={{
                height: `${carousel_spacing}px`,
                width: `${carousel_spacing}px`,
                transform: `${expanded ? `translateX(-${translate}px)`:`translateY(-${translate}px)`}`,
                transition: `transform ease-out ${transition}s`,
                flexShrink: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Thumbnail photoUrl={photo.thumbnail_url} i={i} width={thumbnail_width} selected={i === photoIndex} handleClick={handleClick} expanded={expanded}/>
              </div>
            ))}
          </div>
          <ArrowButton direction={expanded ? 'rightThumb': 'down'} handleClick={handleDownClick} active={(photos.length > n_max_thumbnails) && (thumbnailIndex < photos.length - 1)} height={height} carousel_height={carousel_height} />
        </div>
      }
    </>
  )
}

export default ThumbnailCarousel;