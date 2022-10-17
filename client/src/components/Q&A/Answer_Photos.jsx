import {useState, useEffect} from 'react';

const AnswerPhotos = ({photos}) =>  {

  const answerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

  }
  return (
    <div>
      {photos.map((p) => {
        <img src={p.url}/>
      })}
    </div>
  )
}

export default AnswerPhotos;