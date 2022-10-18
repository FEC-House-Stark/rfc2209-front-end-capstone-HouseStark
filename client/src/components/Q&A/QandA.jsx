import {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionsView from './Questions_View.jsx';
import QuestionSearchBar from './Question_Search_Bar.jsx';
import styled from 'styled-components';

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


  const QandAOverViewStyle = styled.div`
    border-bottom: 1pt solid #666;
    display: grid;
    grid-template-rows:5ch 5ch / auto auto;
    padding: 10px 10px;
    gap: 10px;
    font-family: serif;
`;

  const QandAHeader = styled.div`
    display: grid;
    align-items: flex-start;
    text-align: left;
    `;

  return (
    <QandAOverViewStyle >
      <QandAHeader>QUESTION {'&'} ANSWERS</QandAHeader>
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
  </QandAOverViewStyle>
  )
}

export default QandA;