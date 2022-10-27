import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QuestionsView from './components/Questions_View.jsx';
import QuestionSearchBar from './components/Question_Search_Bar.jsx';
import {QandAOverViewStyle,QandAHeader} from './components/QandA_Styles.jsx';

const QandA = ({
  productInfo,
  product_id,
  handleClick,
}) =>  {

  const [questions,setQuestions] = useState([]);
  const [filter, setFilter] = useState([]);
  const [highlight, setHighlight] = useState('');

  const getQuestionRequest = () => {
    let config = {
      params: { product_id, page: 1, count: 20 },
    }
    axios.get('/qa/questions',config)
    .then((result) => {
      const questions = result.data.results;
      setQuestions(questions);
    })
  }

  useEffect (() => {
    getQuestionRequest();
  },[product_id]);

  useEffect(()=> {
    setFilter(questions);
  },[questions]);

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
        filter={filter}
        highlight={highlight}
        setQuestions={setQuestions}
        getQuestionRequest={getQuestionRequest}
        handleTrackingClick={handleClick}
        />
  </QandAOverViewStyle>
  )
}

export default QandA;