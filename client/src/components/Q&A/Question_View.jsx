import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersListView from './Answers_List_View.jsx'
import AddanAnswer from './Add_An_Answer.jsx';
const QuestionView = ({question}) =>  {

  const columnFlex = {
    display: 'flex',
    flexDirection: 'column'
  }

  const rowFlex = {
    display: 'flex',
    flexDirection: 'row',
  }


  return (
    <div style={columnFlex}>
      <div style={{...rowFlex, justifyContent:'space-between'}}>
        <div>
          Q: {question.question_body}
        </div>
        <span style={rowFlex}>
          <div>Helpful? {'('+ question.question_helpfulness +')'}</div>
          <AddanAnswer/>
        </span>
      </div>
      <div style={rowFlex}>
        <div>A: </div>
        <div>
          <AnswersListView question_id={question.question_id}/>
        </div>
      </div>
    </div>
  )
}

export default QuestionView;