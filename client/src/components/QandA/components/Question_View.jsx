import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddanAnswer from './Add_An_Answer.jsx';
import QuestionReport from './Question_Report.jsx'
import AnswersListView from './Answers_List_View.jsx'
import QuestionHelpfulness from './Question_Helpfulness.jsx';
import {QandAQuestionListView,QuestionBar,QuestionBarActionItem,rowFlex} from './QandA_Styles.jsx';


const QuestionView = ({
  productInfo,
  question,
  highlight,
  handleTrackingClick,
}) =>  {

  const [answers, setAnswers] = useState ([]);
  const [showAnswers, setShowAnswers] = useState([])

  const getAnswersRequest = () => {

    const SortAnswersBySeller = (answers) => {
      var sellerPoint = 0;
      var answerPoint = 0;
      answers.forEach((a) => {
        var isSeller = (a.answerer_name.toLowerCase() === 'seller');
        if(isSeller) {
          [answers[sellerPoint],answers[answerPoint]] = [answers[answerPoint],answers[sellerPoint]];
          sellerPoint++;
        }
        answerPoint++;
      })
    }

    let config = {
      params: {
        page: 1,
        count: 500
      },
    }

    axios.get(`/qa/questions/${question.question_id}/answers`,config)
    .then((result)=> {
      return result.data;
    })
    .then((data) => {
      SortAnswersBySeller(data.results);
      setAnswers(data.results);
    })
  }

  useEffect (() => {
    getAnswersRequest();
  },[])

  useEffect(() => {
    if(!showAnswers.length) {
      setShowAnswers(answers.slice(0,2));
    } else {
      setShowAnswers(answers);
    }
  },[answers])


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

  const getHighlightedText = (text, higlight) => {
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b style={{backgroundColor: "#FFFF00"}}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }


  return (
    <QandAQuestionListView>
      <div widget='QandA'
        element-name='Question_View'>
        <QuestionBar>
          <div style={{fontWeight: 'bold', fontSize: 'medium'}}>
            Q: {getHighlightedText(question.question_body, highlight)}
          </div>
          <QuestionBarActionItem >
            <QuestionReport
              handleTrackingClick={handleTrackingClick}
              handleReportClick={handleReportClick}/>
            <AddanAnswer
              productInfo={productInfo}
              question_id={question.question_id}
              question_body={question.question_body}
              setAnswers={setAnswers}
              getAnswersRequest={getAnswersRequest}
              handleTrackingClick={handleTrackingClick}
              />
            <QuestionHelpfulness
              handleTrackingClick={handleTrackingClick}
              handleHelpfulClick={handleHelpfulClick}
              question_helpfulness={question.question_helpfulness}
              />
          </QuestionBarActionItem>
        </QuestionBar>
        <div style={rowFlex}>
          <div style={{fontWeight: 'bold', paddingRight:'5px'}}>A: </div>
          <div>
            <AnswersListView
              question_id={question.question_id}
              answers={answers}
              showAnswers={showAnswers}
              setShowAnswers={setShowAnswers}
              handleTrackingClick={handleTrackingClick}
              />
          </div>
        </div>
      </div>

    </QandAQuestionListView>
  )
}

export default QuestionView;