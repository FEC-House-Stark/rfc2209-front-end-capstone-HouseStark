import {useState, useEffect} from 'react';
import {photoStyle} from './QandA_Styles.jsx';

const AnswerPhoto = ({photo, setIsOpen, setClickImg}) =>  {
  return (
    <img
      widget='QandA'
      element-name='Answer_Photo'
      style={photoStyle}
      src={photo.url}
      onClick={(e)=> {
        setIsOpen(true);
        setClickImg(photo.url);
      }}
    />
  )
}

export default AnswerPhoto;