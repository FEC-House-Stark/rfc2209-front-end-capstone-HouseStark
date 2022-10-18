import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerPhotos from './Answer_Photos.jsx'
import Moment from 'react-moment';

const AnswerView = ({answer}) =>  {

  const answerStyle = {
    display: 'flex',
    flexDirection: 'row',
  }

  const childGap = {
    marginLeft:'15px',
  }

  console.log(answer);

  return (
    <div>
      <div>
        {answer.body}
      </div>
      <AnswerPhotos photos={answer.photos}/>
      <div style={answerStyle}>
        <div>By {answer.answerer_name}</div>
        <Moment style={childGap} format="MMMM,DD,YYYY">{answer.date}</Moment>
        <div style={childGap}>Helpful? Yes{'('+answer.helpfulness+')'}</div>
      </div>
    </div>
  )
}

export default AnswerView;