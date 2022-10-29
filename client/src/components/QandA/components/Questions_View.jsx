import {useState, useEffect} from 'react';
import QuestionView from './Question_View.jsx';
import AddaQuestion from './Add_A_Question.jsx';
import MoreQuestionsButton from './More_Questions.jsx';
import styled from 'styled-components';
import {QandASearchView,QandAQuestionActions} from './QandA_Styles.jsx';


const QuestionsView = ({
  productInfo,
  product_id,
  questions,
  filter,
  highlight,
  setQuestions,
  getQuestionRequest,
  handleTrackingClick,
}) =>  {

  const [showQuestion, setShowQuestions] = useState([])
  const [moreQuestions, setmoreQuestions] = useState(false);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    if(!moreQuestions) {
      setShowQuestions(filter.slice(0,2));
    } else {
      setShowQuestions(filter);
    }
  },[filter]);

  const handleMoreQuestion = () => {
    setShowQuestions(questions);
    setmoreQuestions(true);
  }


  return (
    <QandASearchView>
      <div widget='QandA'
        element-name='Questions_View'>
        <div>
          { questions.length
            ?showQuestion.map((q) => {
              return <QuestionView
              key={q.question_id}
              question={q}
              productInfo={productInfo}
              product_id={product_id}
              highlight={highlight}
              handleTrackingClick={handleTrackingClick}
              />
            })
            :null
          }
      </div>
      <QandAQuestionActions>
        {
          questions.length > 2
            ? <MoreQuestionsButton
              moreQuestions={moreQuestions}
              handleMoreQuestion={handleMoreQuestion}
              // handleLessQuestion={handleLessQuestion}
              handleTrackingClick={handleTrackingClick}/>
            :null
        }
        <AddaQuestion
          productInfo={productInfo}
          product_id={product_id}
          setQuestions={setQuestions}
          getQuestionRequest={getQuestionRequest}
          handleTrackingClick={handleTrackingClick}
          />
      </QandAQuestionActions>
      </div>

  </QandASearchView>
  )
}

export default QuestionsView;