import React from 'react';
import styled from 'styled-components';
const {useState, useEffect} = React;


const ImageGalleryStyle = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 4;
`;
const Image = styled.img`
  width: auto;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const imageGalleryStyle = {
  'gridColumnStart': '2',
  'gridRowStart': '1',
  'gridRowEnd': '4',
  height: '100%',
  width: '100%',
  display: 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'overflow': 'hidden'
}

const ImageGallery = (props) =>  {
  const [displayPhoto, setDisplayPhoto] = useState("");

  useEffect(() => {
    if (props.photos !== undefined) {
      setDisplayPhoto(props.photos[0].url);
    }
  }, [props.photos])
  return (
    //<ImageGalleryStyle>
      <div widget='Overview' style={imageGalleryStyle} element-name='ImageGallery' onClick={(e)=> {
        console.log(`ImageGalleryClick | currentTarget: ${e.currentTarget.getAttribute('widget')}
        target:`,e.target);
        props.handleClick(e);
      }}>
        <Image src={displayPhoto}/>
      </div>
   // </ImageGalleryStyle>
  )
}

export default ImageGallery;