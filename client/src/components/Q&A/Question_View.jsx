import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswersListView from './Answers_List_View.jsx'
import AddanAnswer from './Add_An_Answer.jsx';
import QuestionHelpfulness from './Question_Helpfulness.jsx';
import QuestionReport from './Question_Report.jsx'
import styled from 'styled-components';


const QuestionView = ({question, handleTrackingClick}) =>  {

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


  const QandAQuestionListView = styled.div`
    display: grid;
    align-items: stretch;
    gap: 5px
  `;


  const QuestionBar = styled.div`
    display: grid;
    align-items: stretch;
    grid-template-columns: 60% 40% ;
    height: 20px;
  `
  const QuestionBarActionItem = styled.span`
    display: grid;
    grid-template-columns: 30% 30% 30% ;

  `

  return (
    <QandAQuestionListView>
      <QuestionBar>
        <div>
          Q: {question.question_body}
        </div>
        <QuestionBarActionItem >
          <QuestionHelpfulness
            handleTrackingClick={handleTrackingClick}
            handleHelpfulClick={handleHelpfulClick}
            question_helpfulness={question.question_helpfulness}
            />
          <AddanAnswer
            handleTrackingClick={handleTrackingClick}
            question_id={question.question_id}/>
          <QuestionReport
            handleTrackingClick={handleTrackingClick}
            handleReportClick={handleReportClick}/>
        </QuestionBarActionItem>
      </QuestionBar>
      <div style={rowFlex}>
        <div>A: </div>
        <div>
          <AnswersListView
            handleTrackingClick={handleTrackingClick}
            question_id={question.question_id}/>
        </div>
      </div>
    </QandAQuestionListView>
  )
}

export default QuestionView;