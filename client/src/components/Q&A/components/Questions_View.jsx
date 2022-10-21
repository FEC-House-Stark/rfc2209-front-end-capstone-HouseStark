import {useState, useEffect} from 'react';
import QuestionView from './Question_View.jsx';
import AddaQuestion from './Add_A_Question.jsx';
import MoreQuestionsButton from './More_Questions.jsx';
import styled from 'styled-components';
import {QandASearchView,QandAQuestionActions,buttonStyle} from './Q&A_Styles.jsx';


const QuestionsView = ({
  questions,
  setQuestions,
  filter,
  handleTrackingClick,
  product_id,
  highlight,
}) =>  {

  const [showQuestion, setShowQuestions] = useState([])
  const [moreQuestions, setmoreQuestions] = useState(false);

  useEffect(() => {
    setShowQuestions(filter.slice(0,4));
  },[filter]);

  const handleMoreQuestion = () => {
    setShowQuestions(questions);
    setmoreQuestions(true);
  }

  const handleLessQuestion = () => {
    setShowQuestions(questions.slice(0,2));
    setmoreQuestions(false);
  }


  return (
    <QandASearchView>
      <div>
        {
          showQuestion.map((q) => {
            return <QuestionView
            key={q.question_id}
            product_id={product_id}
            question={q}
            highlight={highlight}
            handleTrackingClick={handleTrackingClick}
            />
          })
        }
    </div>
    <QandAQuestionActions>
      <MoreQuestionsButton
        moreQuestions={moreQuestions}
        handleMoreQuestion={handleMoreQuestion}
        handleLessQuestion={handleLessQuestion}
        handleTrackingClick={handleTrackingClick}
        buttonStyle={buttonStyle}/>
       <AddaQuestion
        product_id={product_id}
        handleTrackingClick={handleTrackingClick}
        buttonStyle={buttonStyle}/>
    </QandAQuestionActions>
  </QandASearchView>
  )
}

export default QuestionsView;