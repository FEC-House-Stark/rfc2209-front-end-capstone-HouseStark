import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerView from './Answer_View.jsx'
import styled from 'styled-components';
import {AnswersListStyle,moreAnswersButton} from './QandA_Styles.jsx';

const AnswersListView = ({
  question_id,
  answers,
  showAnswers,
  setShowAnswers,
  handleTrackingClick,
}) =>  {

  return (
    <AnswersListStyle>
      <div widget='QandA'
      element-name='Answers_List_View'>
        <div style={{width:'700px', fontFamily:'Times New Roman', fontSize:'smaller', color:'#686868'}}>
          { showAnswers.map((a) => {
            return <AnswerView
            key={a.answer_id}
            answer={a}
            question_id={question_id}
            handleTrackingClick={handleTrackingClick}
            />
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