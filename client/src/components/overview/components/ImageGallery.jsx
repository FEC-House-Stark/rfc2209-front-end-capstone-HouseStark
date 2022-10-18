import React from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton.jsx';
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
  'gridColumnStart': '2',
  'gridRowStart': '1',
  'gridRowEnd': '4',
  position: 'relative',
  height: '100%',
  width: '100%',
  'overflow': 'hidden'
}

const ImageGallery = (props) => {
  const [displayPhoto, setDisplayPhoto] = useState("");
  const [photoUrls, setPhotoUrls] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0.45);

  useEffect(() => {
    if (props.photos !== undefined) {
      setDisplayPhoto(props.photos[0].url);
      let urls = props.photos.map((photo) => (
        photo.url
      ))
      setPhotoUrls(urls);
    }
  }, [props.photos])
  return (
    <div widget='Overview' style={imageGalleryStyle} element-name='ImageGallery' onClick={(e) => {
      //  console.log(`ImageGalleryClick | currentTarget: ${e.currentTarget.getAttribute('widget')}
      // target:`,e.target);
   //   props.handleClick(e);
    }}>
      {
        props.photos !== undefined &&
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
      }
      <ArrowButton direction="left" index={photoIndex}/>
      <ArrowButton direction="right" index={photoIndex}/>
    </div>
  )
}

export default ImageGallery;