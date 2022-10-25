import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {modalBoxStyle, modalViewStyle, buttonStyle} from './Q&A_Styles.jsx';

const AddaQuestion = ({
  setQuestions,
  product_id,
  handleTrackingClick,
  productInfo,
}) =>  {

  const [openModal, setIsOpen] = useState(true);

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  let config = {
    url: '/qa/questions',
    method: 'post',
    data: {body,name, email, product_id },
  }

  const handleQuestionSubmit = () => {
     axios(config)
    .then((result)=> {
      console.log(result);
    })
    .then((err)=> {
      console.log(err);
    })
  }


  return (
    <div>
      <div
        style={buttonStyle}
        widget='QandA'
        element-name='Add_A_Question'
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!openModal);
          handleTrackingClick(e);
        }}>Add a Question + </div>
      <Modal
        isOpen={openModal}
        style={modalBoxStyle}
        ariaHideApp={false}
      >
        <span style={modalViewStyle} widget='QandA'
        element-name='Add_A_Question_Modal'>
          <div style={{display:'flex', flexDirection:'row-reverse'}}>
            <button
              widget='QandA'
              element-name='Add_A_Question_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal);
                // handleTrackingClick(e);
                }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
            <h3 style={{textAlign:'center'}}>Ask Your Question</h3>
            <h4>About the {productInfo.name}</h4>
            <form>
              Your Question:
              <input
                type='text'
                maxLength='1000'
                row='4'
                onChange={(e)=> {
                  setBody(e.target.value);
                }}/>
            Name:
              <input
                type='text'
                name='question'
                required
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
                // handleTrackingClick(e);
                setIsOpen(!openModal);
              }}>submit</button>
          </form>
        </span>
      </Modal>
    </div>
  )
}

export default AddaQuestion;