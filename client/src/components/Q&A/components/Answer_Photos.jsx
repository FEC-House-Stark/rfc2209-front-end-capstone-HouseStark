import {useState, useEffect} from 'react';
import {photoStyle} from './Q&A_Styles.jsx';

const AnswerPhotos = ({photos}) =>  {

  return (
    <div>
      {photos.map((p) => {
        return <img
          key={p.id}
          style={photoStyle}
          src={p.url}
        />
      })}
    </div>
  )
}

export default AnswerPhotos;