import {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionView from './Question_View.jsx';
import AddaQuestion from './Add_A_Question.jsx';

const QuestionsView = ({questions,filter}) =>  {

  const [showQuestion, setShowQuestions] = useState([])
  const [moreAnswers, setMoreAnswers] = useState(false);

  useEffect(() => {
    setShowQuestions(filter.slice(0,2));
  },[filter]);

  const handleMoreQuestion = () => {
    setShowQuestions(questions);
    setMoreAnswers(true);
  }

  const rowFlex = {
    display: 'flex',
    flexDirection: 'row'
  }

  return (
    <div>
      <div>
        {
          showQuestion.map((q) => {
            return <QuestionView key={q.question_id} question={q}/>
          })
        }
    </div>
    <span style={rowFlex}>
      <div>
      {
        !moreAnswers
        ?
        <button disabled={moreAnswers} onClick={(e) => {
          e.preventDefault();
          handleMoreQuestion();
        }}>More Answered Questions</button>
        : null
      }
      </div>
       <AddaQuestion/>
    </span>
  </div>
  )
}

export default QuestionsView;