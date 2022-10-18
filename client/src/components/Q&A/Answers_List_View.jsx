import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerView from './Answer_View.jsx'

const AnswersListView = ({question_id,handleTrackingClick}) =>  {

  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}`

  const [answers, setAnswers] = useState ([]);
  const [showAnswers, setShowAnswers] = useState([])
  const [moreAnswers, setMoreAnswers] = useState(false);

  const config = {
    url: `${url}/answers`,
    method: 'get',
    headers: {
      'Authorization': process.env.TOKEN,
    },
    params: {
      page: 1,
      count: 5
    },
  }

  useEffect (() => {
    axios(config)
    .then((result)=> {
      return result.data;
    })
    .then((data) => {
      setAnswers(data.results);
      setShowAnswers(data.results.slice(0,2));
    })
  },[])

  return (
    <div>
      <div style={{width:'700px'}}>
        { showAnswers.map((a) => {
          return <AnswerView
          key={a.answer_id}
          answer={a}
          handleTrackingClick={handleTrackingClick}/>
        })}
      </div>
      <div>
        {
          !moreAnswers && answers.length>2
          ?
          <button
          widget='QandA'
          element-name='More_Answers'
          onClick={(e) => {
            e.preventDefault();
            setShowAnswers(answers);
            setMoreAnswers(!moreAnswers);
            handleTrackingClick(e);
          }}>LOAD MORE ANSWERS</button>
          : null
        }
      </div>
    </div>
  )
}

export default AnswersListView;