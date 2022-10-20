import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import {modalBoxStyle, modalViewStyle} from './Q&A_Styles.jsx';

const AddanAnswer = ({
  handleTrackingClick,
  question_id,
}) =>  {

  const [openModal, setIsOpen] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newphoto, setNewPhoto] = useState('');
  const [photos, setPhotos] = useState([]);


  let config = {
    url: `/qa/questions/${question_id}/answers`,
    method: 'post',
    data: {body,name, email, photos,question_id },
  }

  const handleQuestionSubmit = () => {
    return axios(config)
    .then((result)=> {
      console.log(result);
    })
    .then((err)=> {
      console.log(err);
    })
  }


  return (
    <div >
      <div
        style={{textDecorationLine: 'underline'}}
        widget='QandA'
        element-name='Add_Answer'
        onClick={(e) => {
        e.preventDefault();
        setIsOpen(!openModal);
        handleTrackingClick(e);
      }}> Add an Answer </div>
      <Modal
        isOpen={openModal}
        style={modalBoxStyle}
        ariaHideApp={false}
      >
        <span style={modalViewStyle}>
          <div style={{display:'flex', flexDirection:'row-reverse'}}>
            <div
              widget='QandA'
              element-name='Add_Answer_Modal_Close'
              onClick={(e)=> {
                console.log(e)
                setIsOpen(!openModal)
                const newTarget = {
                  target: e.target.parentElement.parentElement,
                  timeStamp: new Date()
                }
                handleTrackingClick(newTarget)}}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
           <label for="Answer">Answer:</label>
            <input
              type='text'
              name='Answer'
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
          <button
            widget='QandA'
            element-name='Add_Answer_Submit_Button'
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

export default AddanAnswer;