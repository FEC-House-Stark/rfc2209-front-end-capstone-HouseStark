import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const AddaQuestion = ({questions,setQuestions,product_id,handleTrackingClick}) =>  {

  const [openModal, setIsOpen] = useState(false);

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const customStyles = {
    content: {
      top: '500px',
      left: '500px',
      right: '500px',
      bottom: '500px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const columnFlex = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }


  let config = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions',
    method: 'post',
    headers: {
      'Authorization': process.env.TOKEN,
    },
    data: {body,name, email, product_id },
  }


  const handleQuestionSubmit = () => {
     axios(config)
    .then((result)=> {
      console.log(result);
      axios.get(url)
      .then((result)=> {
        console.log(result);
      })
    })
    .then((err)=> {
      console.log(err);
    })
  }


  return (
    <div style={{marginLeft:'50px'}}>
      <button
        widget='QandA'
        element-name='Add_A_Question'
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!openModal);
          handleTrackingClick(e);
        }}>Add a Question</button>
      <Modal
        isOpen={openModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <span style={columnFlex}>
          <div >
            <button
              widget='QandA'
              element-name='Add_A_Question_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal);
                handleTrackingClick(e);
                }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
          Question:
            <input
              type='text'
              onChange={(e)=> {
                setBody(e.target.value);
              }}/>
          Name:
            <input
              type='text'
              onChange={(e)=> {
                setName(e.target.value);
              }}/>
          email:
            <input
              type='email'
              onChange={(e)=> {
                setEmail(e.target.value);
              }}/>
          <button
            widget='QandA'
            element-name='Add_A_Question_Submit'
            disabled={!name, !body, !email}
            onClick={(e)=> {
              handleQuestionSubmit();
              handleTrackingClick(e);
            }}>submit</button>
        </span>
      </Modal>
    </div>
  )
}

export default AddaQuestion;