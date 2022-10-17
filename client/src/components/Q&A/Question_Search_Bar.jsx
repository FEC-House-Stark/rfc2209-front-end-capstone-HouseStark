import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const QuestionSearchBar = ({questions, setFilter}) =>  {

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const filteredQuestion = questions.filter((q) => {
      return q.question_body.toLowerCase().includes(value.toLowerCase());
    })
    setFilter(filteredQuestion);
  }

  return (
    <form onSubmit={ (e) => {
      e.preventDefault();
      handleSubmit();
    }
    }>
      <input type="text" value={value}
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS'
        onChange={(e) => {
          setValue(e.target.value);
        }
        }/>
      <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
  </form>
  )
}

export default QuestionSearchBar;