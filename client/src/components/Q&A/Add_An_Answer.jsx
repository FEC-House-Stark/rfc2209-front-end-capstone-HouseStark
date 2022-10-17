import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const AddanAnswer = (props) =>  {

  const [openModal, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div style={{marginLeft:'20px'}}>
      <button className='addAnswer' onClick={(e) => {
        console.log(e.target);
        e.preventDefault();
        setIsOpen(!openModal);

      }}>Add an Answer</button>
      <Modal
        isOpen={openModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <button onClick={(e)=> {setIsOpen(!openModal)}}>Close</button>
      </Modal>
    </div>
  )
}

export default AddanAnswer;