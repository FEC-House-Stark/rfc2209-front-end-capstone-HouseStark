import {useState, useEffect} from 'react';

const AnswerPhoto = ({photo, setIsOpen, setClickImg}) =>  {
  return (
    <img
      className='answer-photos'
      widget='QandA'
      element-name='Answer_Photo'
      src={photo.url}
      onClick={(e)=> {
        setIsOpen(true);
        setClickImg(photo.url);
      }}
    />
  )
}

export default AnswerPhoto;