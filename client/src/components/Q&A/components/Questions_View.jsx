import {useState, useEffect} from 'react';
import QuestionView from './Question_View.jsx';
import AddaQuestion from './Add_A_Question.jsx';
import MoreQuestionsButton from './More_Questions.jsx';
import styled from 'styled-components';
import {QandASearchView,QandAQuestionActions} from './Q&A_Styles.jsx';


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
  const [count, setCount] = useState(0);

  useEffect(() => {
    setShowQuestions(filter.slice(0,2));
    setCount(2);
  },[filter]);

  const handleMoreQuestion = () => {
    if(count+2 >= questions.length) {
      setmoreQuestions(true);
    }
    setShowQuestions(questions.slice(0,count+2));
    setCount(count+2);
  }

  const handleLessQuestion = () => {
    setShowQuestions(questions.slice(0,2));
    setCount(2);
    setmoreQuestions(false);
  }


  return (
    <QandASearchView>
      <div>
        { questions.length
          ?showQuestion.map((q) => {
            return <QuestionView
            key={q.question_id}
            product_id={product_id}
            question={q}
            highlight={highlight}
            handleTrackingClick={handleTrackingClick}
            />
          })
          :null
        }
    </div>
    <QandAQuestionActions>
      {
        questions.length
          ? <MoreQuestionsButton
            moreQuestions={moreQuestions}
            handleMoreQuestion={handleMoreQuestion}
            handleLessQuestion={handleLessQuestion}
            handleTrackingClick={handleTrackingClick}/>
          :null
      }
       <AddaQuestion
        product_id={product_id}
        handleTrackingClick={handleTrackingClick}
        />
    </QandAQuestionActions>
  </QandASearchView>
  )
}

export default QuestionsView;