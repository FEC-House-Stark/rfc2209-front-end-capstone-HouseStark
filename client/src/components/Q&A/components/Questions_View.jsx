import {useState, useEffect} from 'react';
import QuestionView from './Question_View.jsx';
import AddaQuestion from './Add_A_Question.jsx';
import MoreQuestionsButton from './More_Questions.jsx';
import styled from 'styled-components';
import {QandASearchView,QandAQuestionActions} from './Q&A_Styles.jsx';


const QuestionsView = ({
  productInfo,
  questions,
  setQuestions,
  filter,
  handleTrackingClick,
  product_id,
  highlight,
}) =>  {

  const [showQuestion, setShowQuestions] = useState([])
  const [moreQuestions, setmoreQuestions] = useState(false);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    setShowQuestions(filter.slice(0,2));
    // setCount(2);
  },[filter]);

  const handleMoreQuestion = () => {
  // Add 2 questions per click;
    // if(count+2 >= questions.length) {
    //   setmoreQuestions(true);
    // }
    // setShowQuestions(questions.slice(0,count+2));
    // setCount(count+2);

  // show add questions all at once;
    setShowQuestions(questions);
    setmoreQuestions(true);
  }

  // const handleLessQuestion = () => {
  //   setShowQuestions(questions.slice(0,2));
  //   setCount(2);
  //   setmoreQuestions(false);
  // }



  return (
    <QandASearchView>
      <div widget='QandA'
        element-name='Questions_View'>
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
              // handleLessQuestion={handleLessQuestion}
              handleTrackingClick={handleTrackingClick}/>
            :null
        }
        <AddaQuestion
          productInfo={productInfo}
          product_id={product_id}
          handleTrackingClick={handleTrackingClick}
          />
      </QandAQuestionActions>
      </div>

  </QandASearchView>
  )
}

export default QuestionsView;