import {useState, useEffect} from 'react';

const AnswerHelpfulness = ({handleTrackingClick,helpfulness,handleHelpfulClick}) =>  {

  const [helpfulCount, setHelpfulCount] = useState(helpfulness);
  const [vote, setVote] = useState(false);

  return (
      <div
        style={{marginLeft:'10px', cursor:'pointer'}}
        widget='QandA'
        element-name='Answer_Helpfulness'
        onClick={(e)=> {
          if(!vote) {
            handleHelpfulClick();
            setHelpfulCount(helpfulCount+1);
            handleTrackingClick(e);
            setVote(true);
          } else {
            handleTrackingClick(e);
          }
        }}> Helpful? { 'Yes ('+ helpfulCount +')'}
      </div>
  )
}

export default AnswerHelpfulness;