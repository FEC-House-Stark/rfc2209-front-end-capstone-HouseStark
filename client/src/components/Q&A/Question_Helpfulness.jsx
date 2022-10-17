import {useState, useEffect} from 'react';

const QuestionHelpfulness = ({handleHelpfulClick,question_helpfulness,rowFlex}) =>  {

  const [helpfulCount, setHelpfulCount] = useState(question_helpfulness);


  return (
    <div style={rowFlex}>Helpful?
      <div
        style={{marginLeft:'5px'}}
        widget='QandA'
        element-name='Question_Helpfulness'
        onClick={(e)=> {
          handleHelpfulClick();
          setHelpfulCount(helpfulCount+1);
        }}>
        { 'Yes ('+ helpfulCount +')'}
      </div>
    </div>
  )
}

export default QuestionHelpfulness;