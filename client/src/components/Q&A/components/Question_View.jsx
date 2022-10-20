import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddanAnswer from './Add_An_Answer.jsx';
import QuestionReport from './Question_Report.jsx'
import AnswersListView from './Answers_List_View.jsx'
import QuestionHelpfulness from './Question_Helpfulness.jsx';
import {QandAQuestionListView,QuestionBar,QuestionBarActionItem,rowFlex} from './Q&A_Styles.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const QuestionView = ({
  question,
  handleTrackingClick,
  ButtonStyle,
}) =>  {

  const handleRequestClick = (endpoint,method) => {
    let config = {
      url: `/qa/questions/${question.question_id}/${endpoint}`,
      method: method,
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


  return (
    <QandAQuestionListView>
      <QuestionBar>
        <div style={{fontWeight: 'bold', fontSize: 'medium'}}>
          Q: {question.question_body}
        </div>
        <FontAwesomeIcon icon="fa-regular fa-star" />
        <QuestionBarActionItem >
          <QuestionReport
            handleTrackingClick={handleTrackingClick}
            handleReportClick={handleReportClick}/>
          <AddanAnswer
            handleTrackingClick={handleTrackingClick}
            question_id={question.question_id}/>
          <QuestionHelpfulness
            handleTrackingClick={handleTrackingClick}
            handleHelpfulClick={handleHelpfulClick}
            question_helpfulness={question.question_helpfulness}
            />
        </QuestionBarActionItem>
      </QuestionBar>
      <div style={rowFlex}>
        <div style={{fontWeight: 'bold'}}>A: </div>
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