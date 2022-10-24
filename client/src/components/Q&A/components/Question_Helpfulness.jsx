import {useState, useEffect} from 'react';

const QuestionHelpfulness = ({
  handleTrackingClick,
  handleHelpfulClick,
  question_helpfulness
}) =>  {

  const [helpfulCount, setHelpfulCount] = useState(question_helpfulness);
  const [vote, setVote] = useState(false);

  return (
      <div
        style={{cursor:'pointer'}}
        widget='QandA'
        element-name='Question_Helpfulness'
        onClick={(e)=> {
          if(!vote) {
            handleHelpfulClick();
            setHelpfulCount(helpfulCount+1);
            handleTrackingClick(e);
            setVote(true);
          } else {
            handleTrackingClick(e);
          }
        }}>
        Helpful? { ' Yes ('+ helpfulCount +')'}
      </div>
  )
}

export default QuestionHelpfulness;