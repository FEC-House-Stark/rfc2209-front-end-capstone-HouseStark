import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const AddanAnswer = ({handleTrackingClick,question_id}) =>  {

  const [openModal, setIsOpen] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newphoto, setNewPhoto] = useState('');
  const [photos, setPhotos] = useState([]);

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
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/answers`,
    method: 'post',
    headers: {
      'Authorization': process.env.TOKEN,
    },
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
    <div style={{marginLeft:'20px'}}>
      <div
        widget='QandA'
        element-name='Add_Answer'
        onClick={(e) => {
        console.log(e.target);
        e.preventDefault();
        setIsOpen(!openModal);
        handleTrackingClick(e);
      }}>| Add an Answer</div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <span style={columnFlex}>
          <div >
            <button
              widget='QandA'
              element-name='Add_Answer_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal)
                handleTrackingClick(e)}}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
          Answer:
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
          Photos:
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
              {photos.map((p,index)=> {
                return <li key={index}>{p}</li>
              })}
            </form>
          <button
            widget='QandA'
            element-name='Add_Answer_Submit_Button'
            disabled={!name, !body, !email}
            onClick={(e)=> {
              handleQuestionSubmit();
              handleTrackingClick(e);
              setIsOpen(false);
            }}>submit</button>
        </span>
      </Modal>
    </div>
  )
}

export default AddanAnswer;