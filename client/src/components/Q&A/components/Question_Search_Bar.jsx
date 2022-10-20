import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {QandAHSearchBar , SearchQustionMagnifyGlass} from './Q&A_Styles.jsx';

const QuestionSearchBar = ({questions, setFilter, handleTrackingClick}) =>  {

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const filteredQuestion = questions.filter((q) => {
      return q.question_body.toLowerCase().includes(value.toLowerCase());
    })
    setFilter(filteredQuestion);
  }

  return (
    <QandAHSearchBar>
      <input
        type="text"
        value={value}
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS'
        onChange={(e) => {
          setValue(e.target.value);
        }
        }/>
      <div
        style={SearchQustionMagnifyGlass}
        widget='QandA'
        element-name='Question_Search_Bar'
        onClick={ (e) => {
          e.preventDefault();
          handleSubmit();
          handleTrackingClick(e);
        }
      }><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
  </QandAHSearchBar>
  )
}

export default QuestionSearchBar;