import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {ErrorStyle} from './QandA_Styles.jsx';
import AddaQuestionModal from './Add_A_Question_Modal.jsx';
import isEmail from 'validator/lib/isEmail';

const AddaQuestion = ({
  productInfo,
  product_id,
  setQuestions,
  getQuestionRequest,
  handleTrackingClick,
}) =>  {

  const [openModal, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className='qanda_button'
        widget='QandA'
        element-name='Add_A_Question'
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!openModal);
          handleTrackingClick(e);
        }}>Add a Question +
      </div>
      <AddaQuestionModal
        openModal={openModal}
        setIsOpen={setIsOpen}
        product_id={product_id}
        productInfo={productInfo}
        setQuestions={setQuestions}
        getQuestionRequest={getQuestionRequest}
        />
    </div>
  )
}

export default AddaQuestion;