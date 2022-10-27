import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import {modalBoxStyle, modalViewStyle} from './QandA_Styles.jsx'
import AddanAnswerModal from './Add_An_Answer_Modal.jsx'

const AddanAnswer = ({
  productInfo,
  question_id,
  question_body,
  setAnswers,
  getAnswersRequest,
  handleTrackingClick,
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
        openModal={openModal}
        setIsOpen={setIsOpen}
        productInfo={productInfo}
        question_id={question_id}
        question_body={question_body}
        setAnswers={setAnswers}
        getAnswersRequest={getAnswersRequest}
        handleTrackingClick={handleTrackingClick}
        />
    </div>
  )
}

export default AddanAnswer;