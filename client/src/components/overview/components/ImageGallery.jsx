import React from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import ZoomView from './ZoomView.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons'
const { useState, useEffect } = React;

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
  const [photoIndex, setPhotoIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [imageMode, setImageMode] = useState(MODES.DEFAULT);
  const [expandedWidth, setExpandedWidth] = useState(0);
  const [transition, setTransition] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    updateWidth();
  }, [])

  const imageGalleryStyle = {
    'border': '1pt solid #eee',
    'backgroundColor': 'white',
    'borderRadius': '10px',
    'gridColumnStart': '2',
    'gridRowStart': '1',
    'gridRowEnd': `${imageMode !== MODES.DEFAULT ? '5' : '4'}`,
    position: 'relative',
    height: `${props.image_height}`,
    width: `${imageMode !== MODES.DEFAULT ? `${expandedWidth}px` : '100%'}`,
    'overflow': 'hidden',
    cursor: `${cursors[imageMode]}`,
    boxSizing: 'border-box',
    zIndex: `${imageMode === MODES.ZOOM  || props.openModal ? '': '1'}`
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, [])

  const updateWidth = () => {
    setExpandedWidth(props.getBodyWidth() - 40);
  }

  useEffect(() => {
    if (imageMode !== MODES.DEFAULT) {
      setTranslate(photoIndex * expandedWidth);
    }
  }, [expandedWidth])

  useEffect(() => {
    if (props.photos !== undefined) {
      if (photoIndex >= props.photos.length) {
        setPhotoIndex(props.photos.length - 1);
      }
    }
  }, [props.photos]);

  useEffect(() => {
    setImageMode(MODES.DEFAULT);
    setPhotoIndex(0);
    setTranslate(0);
  }, [props.product_id]);

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
    return imageMode !== MODES.DEFAULT ? expandedWidth : props.image_width;
  }

  const handleImageClick = (e) => {
    e.preventDefault();
    if (imageMode === MODES.DEFAULT) {
      props.setThumbnailRow(true);
      setTranslate(photoIndex * expandedWidth);
      setImageMode(MODES.EXPANDED);
    } else if (imageMode === MODES.EXPANDED) {
      setModalOpen(true);
      setImageMode(MODES.ZOOM);
    } else if (imageMode === MODES.ZOOM) {
      setImageMode(MODES.EXPANDED);
    }
  };

  const handleMinimizeClick = (e) => {
    e.preventDefault();
    setImageMode(MODES.DEFAULT);
    setTranslate(photoIndex * props.image_width);
    props.setThumbnailRow(false);
    e.stopPropagation();
  };

  const handleEnter = (e) => {
    e.preventDefault();
    setTransition(0.45);
  };
  const handleLeave = (e) => {
    e.preventDefault();
    setTransition(0);
  };

  const toggleZoomModal = (e) => {
    e.preventDefault();
    setImageMode(MODES.EXPANDED);
    setModalOpen(false);
  }

  return (
    <>
      {
        props.photos !== undefined &&
        <>
        <div widget='Overview' style={imageGalleryStyle} element-name='ImageGallery' onClick={(e) => {
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
          <ArrowButton direction="left" handleClick={handleLeftClick} active={photoIndex > 0} height={props.image_height} handleEnter={handleEnter} handleLeave={handleLeave} expanded={imageMode} />
          <ArrowButton direction="right" handleClick={handleRightClick} active={photoIndex < props.photos.length - 1} height={props.image_height} handleEnter={handleEnter} handleLeave={handleLeave} />
          {imageMode === MODES.DEFAULT && <ThumbnailCarousel photos={props.photos} photoIndex={photoIndex} handleClick={handleThumbnailClick} height={props.image_height} expanded={false} />}
          {imageMode !== MODES.DEFAULT && <ThumbnailCarousel photos={props.photos} photoIndex={photoIndex} handleClick={handleThumbnailClick} height={props.image_height} expanded={true} />}
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
        <div  style={{zIndex: '100'}}>
          <ZoomView photo={props.photos[photoIndex].url} toggleZoomModal={toggleZoomModal} modalOpen={modalOpen} />
          </div>
          </>
      }
    </>
  )
}

export default ImageGallery;