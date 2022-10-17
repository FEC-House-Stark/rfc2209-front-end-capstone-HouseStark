import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersListView from './Answers_List_View.jsx'
import AddanAnswer from './Add_An_Answer.jsx';
import QuestionHelpfulness from './Question_Helpfulness.jsx';
import QuestionReport from './Question_Report.jsx'


const QuestionView = ({question, handleClick}) =>  {

  const columnFlex = {
    display: 'flex',
    flexDirection: 'column'
  }

  const rowFlex = {
    display: 'flex',
    flexDirection: 'row',
  }



  const handleHelpfulReportClick = (endpoint) => {
    let config = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question.question_id}/${endpoint}`,
      method: 'put',
      headers: {
        'Authorization': process.env.TOKEN,
      },
    }
    axios(config)
    .then((result)=> {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleHelpfulClick = () => {
    handleHelpfulReportClick('helpful');
  }

  const handleReportClick = () => {
    handleHelpfulReportClick('report');
  }

  console.log(question);

  return (
    <div style={columnFlex}>
      <div style={{...rowFlex, justifyContent:'space-between'}}>
        <div>
          Q: {question.question_body}
        </div>
        <span style={rowFlex}>
          <QuestionHelpfulness
            handleHelpfulClick={handleHelpfulClick}
            question_helpfulness={question.question_helpfulness}
            rowFlex={rowFlex}/>
          <AddanAnswer
            handleClick={handleClick}/>
          <QuestionReport
            handleReportClick={handleReportClick}/>
        </span>
      </div>
      <div style={rowFlex}>
        <div>A: </div>
        <div>
          <AnswersListView
            question_id={question.question_id}
            handleClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}

export default QuestionView;