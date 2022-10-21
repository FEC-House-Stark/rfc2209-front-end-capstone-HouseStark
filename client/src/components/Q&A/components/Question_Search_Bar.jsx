import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {QandAHSearchBar , SearchQustionMagnifyGlass} from './Q&A_Styles.jsx';

const QuestionSearchBar = ({questions, setFilter, handleTrackingClick}) =>  {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    const filteredQuestion = questions.filter((q) => {
      return q.question_body.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setFilter(filteredQuestion);
  }

  return (
    <QandAHSearchBar>
      <input
        type="text"
        value={value}
        widget='QandA'
        element-name='Question_Search_Bar'
        placeholder='Have a question? Search for answers…'
        onChange={(e) => {
          setValue(e.target.value);
          if(e.target.value.length > 3) {
            handleSubmit(e);
          } else {
            setFilter(questions);
          }
        }}
         onClick={(e) => {
          handleTrackingClick(e);
        }}
        />
      <div
        style={SearchQustionMagnifyGlass}
      ><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
  </QandAHSearchBar>
  )
}

export default QuestionSearchBar;