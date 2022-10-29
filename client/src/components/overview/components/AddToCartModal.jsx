import {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
//import { frostyStyle } from '../../../components/QandA/components/QandA_Styles.jsx';

const frostyStyle = {
  overlay:{
    position: 'fixed',
    inset: '0px',
    backgroundColor: 'rgba(234,236,233,0.4)',
},
  content:{
    top: '50%',
    left: '50%',
    backgroundColor:'rgba(234,236,233,0.1)',
    backdropFilter: 'blur(7px)',
    boxShadow: '0 6px 35px rgba(0,0,0,0.65)',
    borderRadius: '25px',
    borderColor: 'rgba(255, 255, 255,0.8)',
    zIndex: '999',
    height: '50vh',
    width: '50vw',
    minWidth: '400px',
    minHeight: '400px',
    border: '1pt solid green',
    transform: 'translate(-50%, -50%)',
  }
};

const AddToCartModal = ({
  cart,
  openModal,
  setOpenModal
}) =>  {


  const handleCartSubmit = (e) => {
    e.preventDefault();
    console.log('Purchased!');
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
                setOpenModal(!openModal);
              }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>

            <h3 id='qanda-modal-title' >Ask Your Question</h3>
            <form id='qanda-modal-content'>
              Your Question:

            Email:

              <div>
                <div
                  className='qanda_button qanda_button_modal_resize'
                  widget='QandA'
                  element-name='Add_A_Question_Submit'
                  onClick={(e)=> {
                      handleCartSubmit();
                      setOpenModal(false);
                    }}>submit
                  </div>
                </div>
          </form>
        </span>
      </Modal>
  )
}

export default AddToCartModal;