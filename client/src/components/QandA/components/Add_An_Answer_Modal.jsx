import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {modalBoxStyle, modalViewStyle, buttonStyle, ErrorStyle, UploadPhotos, uploadPhotoStyle} from './QandA_Styles.jsx';
import isEmail from 'validator/lib/isEmail';
import { fetchPhotos, openUploadWidget } from "../../../CloudinaryService.jsx";

const AddanAnswerModal = ({
  productInfo,
  question_id,
  question_body,
  openModal,
  setIsOpen,
  setAnswers,
  getAnswersRequest,
  handleTrackingClick,
}) =>  {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newphoto, setNewPhoto] = useState('');
  const [photos, setPhotos] = useState([]);
  const [showError, setShowError] = useState(false);


  const handleQuestionSubmit = () => {
    let config = {
      url: `/qa/questions/${question_id}/answers`,
      method: 'post',
      data: {body,name, email, photos,question_id },
    }
    return axios(config)
    .then((result)=> {
      console.log(result);
      getAnswersRequest();
    })
    .then((err)=> {
      console.log(err);
    })
  }

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dbij37ike",
      tags: [tag],
      uploadPreset: "cc8qp3hn"
    };

    openUploadWidget(uploadOptions, (error, uploadPhoto) => {
      if (!error) {
        if(uploadPhoto.event === 'success'){
          console.log(uploadPhoto.info);
          setPhotos([...photos, uploadPhoto.info.secure_url]);
        }
      } else {
        console.log(error);
      }
    })
  }

  return (
      <Modal
        isOpen={openModal}
        style={modalBoxStyle}
        ariaHideApp={false}
      >
        <span widget='QandA'
        element-name='Add_Answer_Modal'>
          <div style={{display:'flex', flexDirection:'row-reverse'}}>
            <div
              widget='QandA'
              element-name='Add_Answer_Modal_Close'
              onClick={(e)=> {
                setIsOpen(!openModal)
                setShowError(false);
                // const newTarget = {
                //   target: e.target.parentElement.parentElement,
                //   timeStamp: new Date()
                // }
                // handleTrackingClick(newTarget)
              }}
                >
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
            <h3 style={{textAlign:'center', margin:'0'}}>Submit Your Answer</h3>
            <h4>{productInfo.name} : {question_body}</h4>
            <form style={modalViewStyle}>
              Your Answer:
              <textarea
                style={{height:'100px'}}
                type='text'
                value={body}
                maxLength='1000'
                placeholder='Your Question ...'
                onChange={(e)=> {
                  setBody(e.target.value);
                }}></textarea>
                <p
                  style={{textAlign:'right', fontSize:'small', margin:'0', padding:'0', paddingTop:'-10px'}}
                  >{1000-body.length} characters avaliable
                </p>
                <div
                  widget='QandA'
                  element-name='Add_Answer_Add_Photo_Button'>
                    {photos.length < 5
                     ?<div
                     style={{...buttonStyle, backgroundColor:'#899489', color: 'white', borderColor:'white', fontSize:'small', width:'80px', borderStyle:'outset'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      beginUpload()}}>Upload Image
                      </div>
                      :null
                    }
                  <UploadPhotos>
                    {photos.map((p,index)=> {
                      return  <img style={uploadPhotoStyle} key={index} src={p}></img>
                    })}
                  </UploadPhotos>
                </div>
                Nickname:
              <input
                style={{height:'30px'}}
                type='text'
                name='name'
                value={name}
                placeholder='Example: StarkHero123'
                maxLength='60'
                onChange={(e)=> {
                  setName(e.target.value);
                }}/>
              <p
                style={{fontSize:'small', margin:'0', paddingBottom:'10px'}}
                >For privacy reasons, do not use your full name or email address
              </p>
                Email:
              <input
                style={{height:'30px'}}
                type='email'
                value={email}
                placeholder='Why did you like the product or not?'
                maxLength='60'
                onChange={(e)=> {
                  setEmail(e.target.value);
                }}/>
                <p
                  style={{fontSize:'small', margin:'0', paddingBottom:'20px'}}
                  >For authentication reasons, you will not be emailed</p>
            <div>
                <div
                  style={{...buttonStyle, backgroundColor:'#768174', color: 'white', borderColor:'white', fontSize:'large', width:'80px', borderStyle:'outset'}}
                  widget='QandA'
                  element-name='Add_A_Question_Submit'
                  onClick={(e)=> {
                    if(name && body && isEmail(email)) {
                      handleQuestionSubmit();
                      setIsOpen(false);
                      setShowError(false);
                      setBody('');
                      setName('');
                      setEmail('');
                      setPhotos([]);
                    } else {
                      setShowError(true);
                    }
                    // handleTrackingClick(e);
                    }}>submit
                  </div>
                    {showError&&
                      <div>
                        {!body &&
                          <ErrorStyle>Body Can't be Blank</ErrorStyle>
                        }
                        {!name &&
                         <ErrorStyle>Nickname Can't be Blank</ErrorStyle>
                        }
                        {!isEmail(email) &&
                          <ErrorStyle>The Email Address Provided is Not in Correct Email Format</ErrorStyle>
                        }
                      </div>
                      }
                </div>
          </form>
        </span>
      </Modal>
  )
}

export default AddanAnswerModal;