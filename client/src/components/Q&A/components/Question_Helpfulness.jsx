import {useState, useEffect} from 'react';

const QuestionHelpfulness = ({handleTrackingClick, handleHelpfulClick,question_helpfulness}) =>  {

  const [helpfulCount, setHelpfulCount] = useState(question_helpfulness);


  return (
      <div
        widget='QandA'
        element-name='Question_Helpfulness'
        onClick={(e)=> {
          handleHelpfulClick();
          setHelpfulCount(helpfulCount+1);
          handleTrackingClick(e);
        }}>
        Helpful? { ' Yes ('+ helpfulCount +')'}
      </div>
  )
}

export default QuestionHelpfulness;