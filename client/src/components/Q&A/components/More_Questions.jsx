import {useState, useEffect} from 'react';
import {buttonStyle} from './Q&A_Styles.jsx';

const MoreQuestionsButton = ({
  handleMoreQuestion,
  handleLessQuestion,
  handleTrackingClick,
  moreQuestions,
}) =>  {


  return (
    <div>
    {
      !moreQuestions
      ?
      <div
      style={buttonStyle}
      widget='QandA'
      element-name='More_Questions'
      onClick={(e) => {
        console.log(e);
        e.preventDefault();
        handleTrackingClick(e);
        handleMoreQuestion();
      }}>More Answered Questions
      </div>
      : null
      // <div
      //     style={buttonStyle}
      //     widget='QandA'
      //     element-name='Less_Questions'
      //     onClick={(e) => {
      //       e.preventDefault();
      //       handleLessQuestion();
      //       handleTrackingClick(e);
      //     }}>Show Less Questions
      // </div>
    }
    </div>
  )
}

export default MoreQuestionsButton;