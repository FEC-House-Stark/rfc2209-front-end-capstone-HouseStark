import {useState, useEffect} from 'react';
import AnswerPhoto from './Answer_Photo.jsx';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {modalViewStyle, photoModalStyle,modalImgStyle} from './QandA_Styles.jsx';


const AnswerPhotos = ({
  photos,
  handleTrackingClick,
}) =>  {

  const [openModal, setIsOpen] = useState(false);
  const [clickImg, setClickImg] = useState('');

  return (
    <>
      <div widget='QandA' element-name='Answer_Photos'>
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
        isOpen={openModal}
        style={photoModalStyle}
        ariaHideApp={false}
      >
        <span style={modalViewStyle}>
          <div style={{display:'flex', flexDirection:'row-reverse'}}>
            <button
              widget='QandA'
              element-name='Zoom_Photo_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal);
                }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
          <div style={{textAlign: 'center'}}>
            <img
              style={modalImgStyle}
              src={clickImg}
              />
          </div>
        </span>
      </Modal>
    </>
  )
}

export default AnswerPhotos;