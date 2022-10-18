import {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionsView from './Questions_View.jsx';
import QuestionSearchBar from './Question_Search_Bar.jsx';

const QandA = ({product_id,handleClick}) =>  {

  const [questions,setQuestions] = useState([]);
  const [filter, setFilter] = useState([]);

  let config = {
    headers: {
      'Authorization': process.env.TOKEN,
    },
    params: { product_id, page: 1, count: 20 },
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
        setFilter={setFilter}
        handleTrackingClick={handleClick}/>
      <QuestionsView
        product_id={product_id}
        questions={questions}
        setQuestions={setQuestions}
        filter={filter}
        handleTrackingClick={handleClick} />
  </div>
  )
}

export default QandA;