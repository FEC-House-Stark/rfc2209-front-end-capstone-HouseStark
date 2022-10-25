import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import {modalBoxStyle, modalViewStyle} from './Q&A_Styles.jsx'
import AddanAnswerModal from './Add_An_Answer_Modal.jsx'

const AddanAnswer = ({
  handleTrackingClick,
  question_id,
}) =>  {

  const [openModal, setIsOpen] = useState(false);

  return (
    <div >
      <div
        style={{textDecorationLine: 'underline', cursor:'pointer'}}
        widget='QandA'
        element-name='Add_Answer'
        onClick={(e) => {
        e.preventDefault();
        setIsOpen(!openModal);
        handleTrackingClick(e);
        }}> Add an Answer
      </div>
      <AddanAnswerModal
        handleTrackingClick={handleTrackingClick}
        question_id={question_id}
        openModal={openModal}
        setIsOpen={setIsOpen}
        />
    </div>
  )
}

export default AddanAnswer;