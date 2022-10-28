import {useState, useEffect} from 'react';
import AnswerPhoto from './Answer_Photo.jsx';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {frostyStyle} from './QandA_Styles.jsx'

const AnswerPhotos = ({
  photos,
  handleTrackingClick,
}) =>  {

  const [openModal, setIsOpen] = useState(false);
  const [clickImg, setClickImg] = useState('');

  return (
    <>
      <div
        className='answer_photos_container'
        widget='QandA' element-name='Answer_Photos'>
        {photos.map((p) => {
          return <AnswerPhoto
            key={p.id}
            photo={p}
            setIsOpen={setIsOpen}
            setClickImg={setClickImg}
          />
        })}
      </div>
      <Modal
        id='qanda-modal_container'
        isOpen={openModal}
        ariaHideApp={false}
        style={frostyStyle}
      >
        <span id='qanda-modal-content'>
          <div id='qanda-modal-close-button'>
            <div
              widget='QandA'
              element-name='Zoom_Photo_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal);
                }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
            <img id='answer-photo-zone' src={clickImg} />
        </span>
      </Modal>
    </>
  )
}

export default AnswerPhotos;