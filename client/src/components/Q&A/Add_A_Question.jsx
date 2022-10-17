import {useState, useEffect} from 'react';
import Modal from 'react-modal';

const AddaQuestion = (props) =>  {

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
    <div style={{marginLeft:'50px'}}>
      <button onClick={(e) => {
        e.preventDefault();
        setIsOpen(!openModal);
      }}>Add a question</button>
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

export default AddaQuestion;