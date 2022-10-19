import {useState, useEffect} from 'react';

const AnswerHelpfulness = ({handleTrackingClick,helpfulness,handleHelpfulClick}) =>  {

  const [helpfulCount, setHelpfulCount] = useState(helpfulness);

  return (
      <div
        style={{marginLeft:'10px'}}
        widget='QandA'
        element-name='Answer_Helpfulness'
        onClick={(e)=> {
          handleHelpfulClick();
          setHelpfulCount(helpfulCount+1);
          handleTrackingClick(e);
        }}> | Helpful? { 'Yes ('+ helpfulCount +')'}
      </div>
  )
}

export default AnswerHelpfulness;