import {useState, useEffect} from 'react';

const AnswerPhotos = ({photos}) =>  {


  //console.log(photos);
  return (
    <div>
      {photos.map((p) => {
        //console.log(p);
        return <img
          key={p.id}
          style={{border:'1px solid black', minHeight:'100px', minWidth:'100px', maxHeight: '100px', marginLeft:'20px'}}
          src={p.url}
          alt="photo"
        />
      })}
    </div>
  )
}

export default AnswerPhotos;