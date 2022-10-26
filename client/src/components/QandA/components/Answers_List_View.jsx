import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerView from './Answer_View.jsx'
import styled from 'styled-components';
import {AnswersListStyle,moreAnswersButton} from './QandA_Styles.jsx';

const AnswersListView = ({
  question_id,
  handleTrackingClick,
}) =>  {

  const [answers, setAnswers] = useState ([]);
  const [showAnswers, setShowAnswers] = useState([])

  const config = {
    params: {
      page: 1,
      count: 100
    },
  }

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

  useEffect (() => {
    axios.get(`/qa/questions/${question_id}/answers`,config)
    .then((result)=> {
      return result.data;
    })
    .then((data) => {
      SortAnswersBySeller(data.results);
      setAnswers(data.results);
      setShowAnswers(data.results.slice(0,2));
    })
  },[])


  return (
    <AnswersListStyle>
      <div widget='QandA'
      element-name='Answers_List_View'>
        <div style={{width:'700px', fontFamily:'Times New Roman', fontSize:'smaller', color:'#686868'}}>
          { showAnswers.map((a) => {
            return <AnswerView
            key={a.answer_id}
            answer={a}
            handleTrackingClick={handleTrackingClick}/>
          })}
        </div>
        <div>
          { showAnswers.length < answers.length
            ?
            <div
            style={moreAnswersButton}
            widget='QandA'
            element-name='More_Answers'
            onClick={(e) => {
              e.preventDefault();
              setShowAnswers(answers);
              handleTrackingClick(e);
            }}>LOAD MORE ANSWERS</div>
            :
            <div
            style={moreAnswersButton}
            widget='QandA'
            element-name='Less_Answers'
            onClick={(e) => {
              e.preventDefault();
              setShowAnswers(answers.slice(0,2));
              handleTrackingClick(e);
            }}>{answers.length>2? 'COLLAPSE ANSWERS' : null}</div>
          }
        </div>
      </div>

    </AnswersListStyle>
  )
}

export default AnswersListView;