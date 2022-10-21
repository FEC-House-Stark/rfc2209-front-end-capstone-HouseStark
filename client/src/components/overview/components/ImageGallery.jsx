import React from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons'
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


const MODES = {
  DEFAULT: 0,
  EXPANDED: 1,
  ZOOM: 2
}

const cursors = [];
cursors[MODES.DEFAULT] = 'url("https://w7.pngwing.com/pngs/889/644/png-transparent-computer-icons-magnifying-glass-magnifier-symbol-magnifying-glass.png"), zoom-in';
cursors[MODES.EXPANDED] = 'crosshair';
cursors[MODES.ZOOM] = 'zoom-out';

const ImageGallery = (props) => {
  const [displayPhoto, setDisplayPhoto] = useState("");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [imageMode, setImageMode] = useState(MODES.DEFAULT);
  const [expandedWidth, setExpandedWidth] = useState(0);
  const transition = 0.45;

  useEffect(() => {
    updateWidth();
  }, [])

  const imageGalleryStyle = {
    'border': '1pt solid #eee',
    'backgroundColor': 'white',
    'borderRadius': '10px',
    'gridColumnStart': '2',
    'gridRowStart': '1',
    'gridRowEnd': '4',
    position: 'relative',
    height: '100%',
    width:   `${imageMode === MODES.EXPANDED ? `${expandedWidth}px` : '100%'}`,
    'transition': 'width ease-out 0s',
    'overflow': 'hidden',
    cursor: `${cursors[imageMode]}`,
    boxSizing: 'border-box',
    zIndex: '13'
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);
  const updateWidth = () => {
    setExpandedWidth(props.getBodyWidth() - 40);
    console.log('updating expanded:', expandedWidth);
  }

  useEffect(()=> {
    setTranslate(photoIndex * expandedWidth);
  }, [expandedWidth])



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
      setTranslate(translate - getImageWidth());
    }
    e.stopPropagation();
  }
  const handleRightClick = (e) => {
    e.preventDefault();
    if (photoIndex < props.photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
      setTranslate(translate + getImageWidth());
    }
    e.stopPropagation();
  }
  const handleThumbnailClick = (e, index) => {
    e.preventDefault();
    setPhotoIndex(index);
    setTranslate((index * getImageWidth()) + 1);
    e.stopPropagation();
  }

  const getImageWidth = () => {
    return MODES.DEFAULT !== imageMode ? expandedWidth : props.image_width;
  }

  const handleImageClick = (e) => {
    e.preventDefault();
    if (imageMode === MODES.DEFAULT) {
      console.log('Default > Expanded');
      setImageMode(MODES.EXPANDED);
      setTranslate(photoIndex * expandedWidth);
    } else if (imageMode === MODES.EXPANDED) {
      console.log('Expanded > Zoom');
     // setImageMode(MODES.ZOOM);
    } else if (imageMode === MODES.ZOOM) {
      console.log('Zoom > Expanded');
      setImageMode(MODES.EXPANDED);
    }
  };

  const handleMinimizeClick = (e) => {
    e.preventDefault();
    console.log('Expanded/Zoom > Default')
    setImageMode(MODES.DEFAULT);
    setTranslate(photoIndex * props.image_width);
    e.stopPropagation();
  }

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
              width: `${MODES.DEFAULT !== imageMode ?
                (expandedWidth * props.photos.length).toString()
                :
                (props.image_width * props.photos.length).toString()}px`
            }}>
            {props.photos.map((photo, i) => (
              <div key={photo + i} style={{
                backgroundImage: `url(${photo.url})`,
                height: `${props.image_height}px`,
                width: `${getImageWidth()}px`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }} />
            ))}
          </div>
          <ArrowButton direction="left" handleClick={handleLeftClick} active={photoIndex > 0} height={props.image_height} />
          <ArrowButton direction="right" handleClick={handleRightClick} active={photoIndex < props.photos.length - 1} height={props.image_height} />
          <ThumbnailCarousel photos={props.photos} photoIndex={photoIndex} handleClick={handleThumbnailClick} height={props.image_height} />
          {imageMode !== MODES.DEFAULT &&
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
              color: '#666',
              backgroundColor: 'white',
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={handleMinimizeClick}
            >
              <FontAwesomeIcon icon={faCompress} />
            </div>
          }
        </div>
      }
    </>
  )
}

export default ImageGallery;