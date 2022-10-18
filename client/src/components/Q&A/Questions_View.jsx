import {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionView from './Question_View.jsx';
import AddaQuestion from './Add_A_Question.jsx';
import styled from 'styled-components';

const QuestionsView = ({questions,setQuestions,filter,handleTrackingClick,product_id}) =>  {

  const [showQuestion, setShowQuestions] = useState([])
  const [moreQuestions, setmoreQuestions] = useState(false);

  useEffect(() => {
    setShowQuestions(filter.slice(0,2));
  },[filter]);

  const handleMoreQuestion = () => {
    setShowQuestions(questions);
    setmoreQuestions(true);
  }

  const rowFlex = {
    display: 'flex',
    flexDirection: 'row'
  }

  const QandASearchView = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: 100%;
  grid-template-rows: 90% 10%;
  gap: 10px
  `;

  return (
    <QandASearchView>
      <div>
        {
          showQuestion.map((q) => {
            return <QuestionView
            key={q.question_id}
            product_id={product_id}
            question={q}
            handleTrackingClick={handleTrackingClick}/>
          })
        }
    </div>
    <span style={rowFlex}>
      <div>
      {
        !moreQuestions
        ?
        <button
        widget='QandA'
        element-name='More_Questions'
        disabled={moreQuestions} onClick={(e) => {
          e.preventDefault();
          handleMoreQuestion();
          handleTrackingClick(e);
        }}>More Answered Questions</button>
        : null
      }
      </div>
       <AddaQuestion
        questions={questions}
        setQuestions={setQuestions}
        product_id={product_id}
        handleTrackingClick={handleTrackingClick}/>
    </span>
  </QandASearchView>
  )
}

export default QuestionsView;