import {useState, useEffect} from 'react';
import {photoStyle} from './Q&A_Styles.jsx';

const AnswerPhoto = ({photo, setIsOpen, setClickImg}) =>  {

  return (
        <img
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