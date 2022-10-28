import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { ErrorStyle, frostyStyle} from './QandA_Styles.jsx';
import isEmail from 'validator/lib/isEmail';

const AddaQuestionModal = ({
  productInfo,
  product_id,
  openModal,
  setIsOpen,
  setQuestions,
  getQuestionRequest,
}) =>  {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);


  const handleQuestionSubmit = () => {
    let config = {
      url: '/qa/questions',
      method: 'post',
      data: {body,name, email, product_id },
    }
    axios(config)
    .then((result)=> {
      console.log(result);
      getQuestionRequest();
    })
    .then((err)=> {
      console.log(err);
    })
  }

  return (
      <Modal
        isOpen={openModal}
        ariaHideApp={false}
        style={frostyStyle}
        id='qanda-modal_container'
      >
        <span widget='QandA'
        element-name='Add_A_Question_Modal'>
          <div id='qanda-modal-close-button'>
            <div
              widget='QandA'
              element-name='Add_A_Question_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal);
                // handleTrackingClick(e);
                setShowError(false);
              }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>

            <h3 id='qanda-modal-title' >Ask Your Question</h3>
            <h4>About the {productInfo.name}</h4>
            <form id='qanda-modal-content'>
              Your Question:
              <textarea
                style={{height:'100px'}}
                type='text'
                value={body}
                maxLength='1000'
                placeholder='Your Question ...'
                onChange={(e)=> {
                  setBody(e.target.value);
                }}></textarea>
                <p id='modal-textfield-description'>
                  {1000-body.length} characters avaliable
                </p>
            Nickname:
              <input
                style={{height:'30px'}}
                type='text'
                name='name'
                value={name}
                placeholder='Example: StarkHero123'
                maxLength='60'
                onChange={(e)=> {
                  setName(e.target.value);
                }}/>
              <p id='modal-textfield-description'>
                For privacy reasons, do not use your full name or email address
              </p>
            Email:
              <input
                style={{height:'30px'}}
                type='email'
                value={email}
                placeholder='Why did you like the product or not?'
                maxLength='60'
                onChange={(e)=> {
                  setEmail(e.target.value);
                }}/>
                <p id='modal-textfield-description'>
                  For authentication reasons, you will not be emailed
                </p>
              <div>
                <div
                  className='qanda_button qanda_button_modal_resize'
                  widget='QandA'
                  element-name='Add_A_Question_Submit'
                  onClick={(e)=> {
                    if(name && body && isEmail(email)) {
                      handleQuestionSubmit();
                      setIsOpen(false);
                      setShowError(false);
                      setBody('');
                      setName('');
                      setEmail('');
                    } else {
                      setShowError(true);
                    }
                    // handleTrackingClick(e);
                    }}>submit
                  </div>
                    {showError&&
                      <div>
                        {!body &&
                          <ErrorStyle>Body Can't be Blank</ErrorStyle>
                        }
                        {!name &&
                         <ErrorStyle>Nickname Can't be Blank</ErrorStyle>
                        }
                        {!isEmail(email) &&
                          <ErrorStyle>The Email Address Provided is Not in Correct Email Format</ErrorStyle>
                        }
                      </div>
                      }
                </div>
          </form>
        </span>
      </Modal>
  )
}

export default AddaQuestionModal;