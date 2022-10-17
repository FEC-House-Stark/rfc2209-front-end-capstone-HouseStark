import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerView from './Answer_View.jsx'

const AnswersListView = ({question_id}) =>  {

  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}`

  const [answers, setAnswers] = useState ([]);

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
    })
  },[])

  return (
    <div style={{width:'700px'}}>
      { answers.map((a) => {
        return <AnswerView key={a.answer_id} answer={a}/>
      })}
    </div>
  )
}

export default AnswersListView;