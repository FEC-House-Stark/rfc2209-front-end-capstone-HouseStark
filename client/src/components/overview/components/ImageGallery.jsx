import React from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
const { useState, useEffect } = React;


const ImageGalleryStyle = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 4;
`;
const ImageContent = styled.div`

`;
const Image = styled.div`
`;

const imageGalleryStyle = {
  'border': '1pt solid #eee',
  'borderRadius': '10px',
  'gridColumnStart': '2',
  'gridRowStart': '1',
  'gridRowEnd': '4',
  position: 'relative',
  height: '100%',
  width: '100%',
  'overflow': 'hidden',
  cursor: 'zoom-in',
  boxSizing: 'border-box'
}

const ImageGallery = (props) => {
  const [displayPhoto, setDisplayPhoto] = useState("");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const transition = 0.45;

  //if the style changes, make sure the current photoIndex is valid
  useEffect(() => {
    if (props.photos !== undefined) {
      if (photoIndex >= props.photos.length) {
        setPhotoIndex(props.photos.length - 1);
      }
    }
  }, [props.photos]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
      setTranslate(translate - props.image_width);
    }
    e.stopPropagation();
  }
  const handleRightClick = (e) => {
    e.preventDefault();
    if (photoIndex < props.photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
      setTranslate(translate + props.image_width);
    }
    e.stopPropagation();
  }
  const handleThumbnailClick = (e, index) => {
    e.preventDefault();
    setPhotoIndex(index);
    setTranslate((index * props.image_width) + 1);
    e.stopPropagation();
  }

  const handleImageClick = (e) => {
    e.preventDefault();
    console.log('Expanding!');
  };

return (
  <>
    {
      props.photos !== undefined &&
      <div widget='Overview' style={imageGalleryStyle} element-name='ImageGallery' onClick={(e) => {
        //props.handleClick(e);
        handleImageClick(e);
      }}>

        <div
          style={{
            transform: `translateX(-${translate}px)`,
            transition: `transform ease-out ${transition}s`,
            height: '100%',
            display: 'flex',
            width: `${(props.image_width * props.photos.length).toString()}px`
          }}>
          {props.photos.map((photo, i) => (
            <div key={photo + i} style={{
              backgroundImage: `url(${photo.url})`,
              height: `${props.image_height}px`,
              width: `${props.image_width}px`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} />
          ))}
        </div>
        <ArrowButton direction="left" handleClick={handleLeftClick} active={photoIndex > 0} height={props.image_height} />
        <ArrowButton direction="right" handleClick={handleRightClick} active={photoIndex < props.photos.length - 1} height={props.image_height} />
        <ThumbnailCarousel photos={props.photos} photoIndex={photoIndex} handleClick={handleThumbnailClick} height={props.image_height}/>
      </div>
    }
  </>
)
}

export default ImageGallery;