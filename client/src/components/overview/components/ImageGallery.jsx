import React from 'react';
import styled from 'styled-components';


const ImageGalleryStyle = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 4;
`;
const imageGalleryStyle = {
  'grid-column-start': '2',
  'grid-row-start': '1',
  'grid-row-end': '4',
  height: '100%',
  width: '100%'
}

const ImageGallery = (props) =>  {

  return (
    //<ImageGalleryStyle>
      <div widget='Overview' style={imageGalleryStyle} element-name='ImageGallery' onClick={props.handleClick}>ImageGallery</div>
   // </ImageGalleryStyle>
  )
}

export default ImageGallery;