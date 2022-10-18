import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersListView from './Answers_List_View.jsx'
import AddanAnswer from './Add_An_Answer.jsx';
import QuestionHelpfulness from './Question_Helpfulness.jsx';
import QuestionReport from './Question_Report.jsx'


const QuestionView = ({question, handleTrackingClick}) =>  {

  const columnFlex = {
    display: 'flex',
    flexDirection: 'column'
  }

  const rowFlex = {
    display: 'flex',
    flexDirection: 'row',
  }



  const handleRequestClick = (endpoint,method,data={}) => {
    let config = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question.question_id}/${endpoint}`,
      method: method,
      headers: {
        'Authorization': process.env.TOKEN,
      },
      data : data
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
    handleRequestClick('helpful','put');
  }

  const handleReportClick = () => {
    handleRequestClick('report','put');
  }

  // console.log(question);

  return (
    <div style={columnFlex}>
      <div style={{...rowFlex, justifyContent:'space-between'}}>
        <div>
          Q: {question.question_body}
        </div>
        <span style={rowFlex}>
          <QuestionHelpfulness
            handleTrackingClick={handleTrackingClick}
            handleHelpfulClick={handleHelpfulClick}
            question_helpfulness={question.question_helpfulness}
            rowFlex={rowFlex}/>
          <AddanAnswer
            handleTrackingClick={handleTrackingClick}
            question_id={question.question_id}/>
          <QuestionReport
            handleTrackingClick={handleTrackingClick}
            handleReportClick={handleReportClick}/>
        </span>
      </div>
      <div style={rowFlex}>
        <div>A: </div>
        <div>
          <AnswersListView
            handleTrackingClick={handleTrackingClick}
            question_id={question.question_id}/>
        </div>
      </div>
    </div>
  )
}

export default QuestionView;