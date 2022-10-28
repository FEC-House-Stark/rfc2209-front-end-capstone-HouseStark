import {useState, useEffect} from 'react';

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
      <div className='qanda_button'
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
      //     className='qanda_button'
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