import {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionsView from './Questions_View.jsx';
import QuestionSearchBar from './Question_Search_Bar.jsx';

const QandA = ({product_id}) =>  {

  const [questions,setQuestions] = useState([]);
  const [filter, setFilter] = useState([]);

  let config = {
    headers: {
      'Authorization': process.env.TOKEN,
    },
    params: { product_id },
  }

  useEffect (() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions',config)
    .then((result) => {
      setQuestions(result.data.results);
      setFilter(result.data.results);
    })
  },[]);

  const divStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <div style={divStyle} >
      <h4>QUESTION {'&'} ANSWERS</h4>
      <QuestionSearchBar
        questions={questions}
        setFilter={setFilter}/>
      <QuestionsView
        questions={questions}
        filter={filter} />
  </div>
  )
}

export default QandA;