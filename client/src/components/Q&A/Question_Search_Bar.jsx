import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const QuestionSearchBar = ({questions, setFilter, handleTrackingClick}) =>  {

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const filteredQuestion = questions.filter((q) => {
      return q.question_body.toLowerCase().includes(value.toLowerCase());
    })
    setFilter(filteredQuestion);
  }

  const QandAHSearchBar = styled.form`
  display: grid;
  align-items: stretch;
  grid-template-columns: 95% 5% ;
  height: 30px;
  gap: 10px 0px;
  `;

  return (
    <QandAHSearchBar
      widget='QandA'
      element-name='Question_Search_Bar'
      onSubmit={ (e) => {
        e.preventDefault();
        handleSubmit();
        handleTrackingClick(e);
      }
    }>
      <input
        type="text"
        value={value}
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS'
        onChange={(e) => {
          setValue(e.target.value);
        }
        }/>
      <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
  </QandAHSearchBar>
  )
}

export default QuestionSearchBar;