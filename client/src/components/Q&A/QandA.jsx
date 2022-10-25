import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QuestionsView from './components/Questions_View.jsx';
import QuestionSearchBar from './components/Question_Search_Bar.jsx';
import {QandAOverViewStyle,QandAHeader} from './components/Q&A_Styles.jsx';

const QandA = ({product_id,handleClick, productInfo}) =>  {

  const [questions,setQuestions] = useState([]);
  const [filter, setFilter] = useState([]);
  const [render, setRender] = useState(false);
  const [highlight, setHighlight] = useState('');

  // const compareAnswerLength = (a,b) => {
  //   return
  // }
  let config = {
    params: { product_id, page: 1, count: 20 },
  }

  useEffect (() => {
    axios.get('/qa/questions',config)
    .then((result) => {
      const questions = result.data.results;
      setQuestions(questions);
      setFilter(questions);
    })
  },[product_id]);

  return (
    <QandAOverViewStyle >
      <QandAHeader>QUESTION {'&'} ANSWERS</QandAHeader>
      {
        questions.length
        ? <QuestionSearchBar
          questions={questions}
          setFilter={setFilter}
          setHighlight={setHighlight}
          handleTrackingClick={handleClick}
          />
        : null
      }
      <QuestionsView
        productInfo={productInfo}
        product_id={product_id}
        questions={questions}
        setQuestions={setQuestions}
        filter={filter}
        highlight={highlight}
        handleTrackingClick={handleClick}/>
  </QandAOverViewStyle>
  )
}

export default QandA;