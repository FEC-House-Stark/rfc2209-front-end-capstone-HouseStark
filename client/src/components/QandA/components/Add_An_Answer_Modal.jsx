import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {modalBoxStyle, modalViewStyle, buttonStyle, ErrorStyle} from './QandA_Styles.jsx';
import isEmail from 'validator/lib/isEmail';

const AddanAnswerModal = ({
  productInfo,
  question_id,
  question_body,
  openModal,
  setIsOpen,
  setAnswers,
  getAnswersRequest,
  handleTrackingClick,
}) =>  {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newphoto, setNewPhoto] = useState('');
  const [photos, setPhotos] = useState([]);
  const [showError, setShowError] = useState(false);


  const handleQuestionSubmit = () => {
    let config = {
      url: `/qa/questions/${question_id}/answers`,
      method: 'post',
      data: {body,name, email, photos,question_id },
    }
    return axios(config)
    .then((result)=> {
      console.log(result);
      getAnswersRequest();
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
        element-name='Add_Answer_Modal'>
          <div style={{display:'flex', flexDirection:'row-reverse'}}>
            <div
              widget='QandA'
              element-name='Add_Answer_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal)
                setShowError(false);
                // const newTarget = {
                //   target: e.target.parentElement.parentElement,
                //   timeStamp: new Date()
                // }
                // handleTrackingClick(newTarget)
              }}
                >
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
            <h3 style={{textAlign:'center', margin:'0'}}>Submit Your Answer</h3>
            <h4>{productInfo.name} : {question_body}</h4>
            <form style={modalViewStyle}>
              Your Answer:
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
                  >{1000-body.length} characters avaliable
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
                >For privacy reasons, do not use your full name or email address
              </p>
          Photos URL:
            <form
              widget='QandA'
              element-name='Add_Answer_Add_Photo_Button'
              onSubmit={(e)=> {
                e.preventDefault();
                setPhotos([...photos,newphoto]);
                setNewPhoto('');
                handleTrackingClick(e);
              }}>
              <input
              type='url'
              value={newphoto}
              onChange={(e)=> {
                setNewPhoto(e.target.value);
              }}
              />
              <button
                disabled={!newphoto}
                type='submit'>add Photo</button>
              <div>
                {photos.map((p,index)=> {
                  return  <img src={p}></img>
                })}
              </div>
            </form>
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

export default AddanAnswerModal;