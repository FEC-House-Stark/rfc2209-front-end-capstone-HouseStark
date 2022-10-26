import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {modalBoxStyle, modalViewStyle, buttonStyle, ErrorStyle} from './QandA_Styles.jsx';
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
        style={modalBoxStyle}
        ariaHideApp={false}
      >
        <span widget='QandA'
        element-name='Add_A_Question_Modal'>
          <div style={{display:'flex', flexDirection:'row-reverse'}}>
            <button
              widget='QandA'
              element-name='Add_A_Question_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal);
                // handleTrackingClick(e);
                setShowError(false);
                }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
            <h3 style={{textAlign:'center', margin:'0'}}>Ask Your Question</h3>
            <h4>About the {productInfo.name}</h4>
            <form style={modalViewStyle}>
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
                <p
                  style={{textAlign:'right', fontSize:'small', margin:'0', padding:'0', paddingTop:'-10px'}}
                  >{1000-body.length} characters avaliable</p>
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
                <p
                  style={{fontSize:'small', margin:'0', paddingBottom:'20px'}}
                  >For authentication reasons, you will not be emailed</p>
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
              <p
                style={{fontSize:'small', margin:'0', paddingBottom:'10px'}}
                >For privacy reasons, do not use your full name or email address</p>
                <div>
                  <div
                    style={{...buttonStyle, backgroundColor:'#768174', color: 'white', borderColor:'white', fontSize:'large', width:'80px', borderStyle:'outset'}}
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
                          <ErrorStyle>{!name &&"Nickname Can't be Blank"}</ErrorStyle>
                          <ErrorStyle>{!body &&"Body Can't be Blank"}</ErrorStyle>
                          <ErrorStyle>{!isEmail(email) && "The email address provided is not in correct email format"}</ErrorStyle>
                        </div>
                      }
                </div>
          </form>
        </span>
      </Modal>
  )
}

export default AddaQuestionModal;