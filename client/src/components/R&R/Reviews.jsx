import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Modal from 'react-modal';
import FileUpload from './FileUpload.jsx'
import Breakdown from './Breakdown.jsx'
import StarRating from './StarRating.jsx'
import ImageGallary from './ImageGallary.jsx'
import { BreakdownContainer, ListContainer, ReviewContainer } from "./file-upload.styles";
import { modalBoxStyle, modalViewStyle, buttonStyle, ErrorStyle, UploadPhotos, uploadPhotoStyle, frostyStyle } from '../QandA/components/QandA_Styles.jsx'
import Stars from 'react-stars-display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'



const Reviews = ({ handleClick, product_id, numReviews, avgRating, characteristics, recommended , starkMode, productInfo}) => {
  const [reviewList, setReviewList] = useState([]);
  const [fullReviewList, setFullReviewList] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [newReview, setNewReview] = useState({});
  const [newRecomended, setNewRecomended] = useState('');
  const [sortType, setSortType] = useState('relevant');
  const [sizeRating, setSizeRating] = useState('0');
  const [comfortRating, setComfortRating] = useState('0');
  const [fitRating, setFitRating] = useState('0');
  const [lengthRating, setLengthRating] = useState('0');
  const [qualityRating, setQualityRating] = useState('0');
  const [widthRating, setWidthRating] = useState('0');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [files, setFiles] = useState({});
  const [currentValue, setCurrentValue] = useState(0);
  const [emailValidation, setEmailValidation] = useState(false);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [filterObj, setFilterObj] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isOpenPhoto, setIsOpenPhoto] = useState(false);
  const [clickPhoto, setClickPhoto] = useState('')
  const [reRenderList, setReRenderList]= useState(false);

  const host_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/'


  const textStyles = {
    'border': "1px solid #a9a9a9",
    'borderRadius': '5',
    'padding': '10',
    'margin': "20px 0",
    'minHeight': '100',
    'width': '300'
  }

  const buttonStyle = {
    background: 'white',
    color: 'black',
    fontSize: '15px',
    fontWeight: '600',
    textAlign: 'center',
    padding: '10px 10px 10px 10px',
    width: '180px',
    border: '1px solid black',
    cursor: 'pointer'
  }

  const glassPanel = {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '30px',
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: '#fff',
    background: 'rgba(255, 21, 255, 0.5)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)'
  }

  let config1 = {
    headers: {
      'Authorization': process.env.TOKEN,
    },
    params: {
      count: numReviews,
      sort: sortType,
      product_id
    },
  }

  useEffect(() => {
    Modal.setAppElement('body');

    axios.get(host_url + 'reviews/', config1)
      .then((data) => {
        setReviewList(data.data.results)
        setFullReviewList(data.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [product_id, sortType, numReviews, submitFlag, reRenderList]);

  var handleListReRender = () => {
    setReRenderList(!reRenderList)
  }

  var handleMoreReviews = () => {
    setReviewCount(numReviews)
  }

  var toggleModal = () => {
    setIsOpen(!isOpen);
  }

  var toggleModalPhoto = (arg) => {
    setIsOpenPhoto(!isOpenPhoto)
    setClickPhoto(arg.target.src)
  }

  var handleHelpful = (id) => {
    let config = {
      url: host_url + `reviews/${id}/helpful`,
      method: 'put',
      headers: {
        'Authorization': process.env.TOKEN,
      },
    }
    axios(config)
      .then((result) => {
        handleListReRender()
      })
      .catch((err) => {
        console.log('Err on helpful put req', err);
      })
  }

  var handleReport = (id) => {
    let config = {
      url: host_url + `reviews/${id}/report`,
      method: 'put',
      headers: {
        'Authorization': process.env.TOKEN,
      },
    }
    axios(config)
      .then((result) => {
        handleListReRender()
      })
      .catch((err) => {
        console.log('Err on helpful put req', err);
      })
  }

  var handleReviewSubmit = () => {
    let flag = true;
    let error = [];
    if (currentValue < 1) {
      error.push('❌ Star Rating')
    }
    if (newRecomended === '') {
      error.push('❌ Recommend')
    }
    let reconfig = {
      Comfort: [comfortRating, setComfortRating],
      Fit: [fitRating, setFitRating],
      Length: [lengthRating, setLengthRating],
      Quality: [qualityRating, setQualityRating],
      Size: [sizeRating, setSizeRating],
      Width: [widthRating, setWidthRating],
    }

    let temp = Object.keys(characteristics);
    for (let i = 0; i < temp.length; i++) {
      let current = temp[i]
      if (reconfig[current][0] < 1) {
        error.push(`❌ ${current} rating`)
      }
    }

    if (review.length < 50) {
      error.push('❌ Review body to short')
    }

    if (nickname.length === 0) {
      error.push('❌ Nickname')
    }

    if (email.length === 0) {
      error.push('❌ Missing email')
      let flag = false;
    }
    if (flag === true) {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        error.push('❌ Invalid Email')
      }
    }
    if (error.length === 0) {
      sendNewReview()
      setSubmitFlag(!submitFlag)
      toggleModal()
      setTimeout(() => {
        alert('Review submitted 🎉')
      }, 100);
    } else {
      alert('You are missing required fields:\n' + error.join('\n'))
    }
  }

  var nameFormatter = (name) => {
    if (name[0] !== name[0].toUpperCase()) {
      let replaced = name.charAt(0).toUpperCase() + name.slice(1)
      return replaced
    } else {
      return name;
    }
  }

  var dateFormatter = (date) => {
    let calender = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    }
    let split = date.split('-')
    let result = `${calender[split[1]]} ${split[2].slice(1)}, ${split[0]}`
    return result
  }

  var sendNewReview = () => {

    let reconfig = {
      Comfort: [comfortRating, setComfortRating, 223579],
      Fit: [fitRating, setFitRating, 223577],
      Length: [lengthRating, setLengthRating, 223578],
      Quality: [qualityRating, setQualityRating, 223580],
      Size: [sizeRating, setSizeRating, 223585],
      Width: [widthRating, setWidthRating, 223586],
    }
    let dataObj = {}
    for (var key in characteristics) {
      let charKey = key
      dataObj[charKey] = characteristics[key].id
    }
    let resultObj = {}
    for (var key in dataObj) {
      let idKey = dataObj[key]
      resultObj[idKey.toString()] = Number(reconfig[key][0])
    }

    let temp = true;
    if (newRecomended === 'yes') {
      temp = true;
    } else {
      temp = false;
    }
    let config = {
      product_id,
      "rating": currentValue,
      "summary": title,
      "body": review,
      "recommend": temp,
      "name": nickname,
      "email": email,
      "photos": photos,
      "characteristics": resultObj
    }
    console.log(config)

  }

  var listDecider = () => {
    if (filterObj.length) {

      let temp = reviewList.filter((item) => {
        return filterObj.indexOf(`${item.rating}`) !== -1;
      })
      return (
        temp.slice(0, reviewCount).map((item, i) => {
          return (
            <div key={i} style={{ borderBottom: '1px solid black' }}>
              <div className='topRowContainer' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%', margin: 'auto', margin: '20px', gap: '15px' }}>
                <div >
                  <Stars
                    stars={item.rating}
                    size={25} //optional
                    spacing={2} //optional
                    fill='#ea9c46' //optional
                  />
                </div>
                <div style={{ marginLeft: '10px' }}>{`${item.reviewer_name}, ${item.date.slice(0, 10)}`}</div>
              </div>
              <span style={{ fontWeight: 'bold' }}>{item.summary}</span>
              <div>{item.body}</div>
              <div className='review-photos'>
                {item.photos.map((photo, i) => {
                  return (
                    <>
                    <img style={{cursor: 'pointer'}} src={photo.url} height='75' width='75' onClick={(e) => {toggleModalPhoto(e)}}></img>
                    <Modal
                    id='qanda-modal_container'
                    style={frostyStyle}
                    isOpen={isOpenPhoto}
        onRequestClose={toggleModalPhoto}>
<img src={clickPhoto} height='600' width='600'></img>
                    </Modal>
                    </>
                  )
                })}
              </div>
              <div className='helpfulAndReport Container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', margin: 'auto', margin: '20px', gap: '15px' }}>
                <div onClick={() => { handleHelpful(item.review_id) }} style={{ cursor: 'pointer' }}>{`Helpful? Yes (${item.helpfulness})`} </div>
                <div onClick={() => { handleReport(item.review_id) }} style={{ cursor: 'pointer' }}>Report</div>
              </div>
            </div>
          )
        })
      )
    }

    if (!filterObj.length) {
      return (
        reviewList.slice(0, reviewCount).map((item, i) => {
          return (
            <div key={i} style={{ borderBottom: '1px solid black' }}>
              <div className='topRowContainer' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%', margin: 'auto', margin: '20px', gap: '15px' }}>
                <div >
                  <Stars
                    stars={item.rating}
                    size={25} //optional
                    spacing={2} //optional
                    fill='#ea9c46' //optional
                  />
                </div>
                <div style={{ marginLeft: '10px' }}>{`${nameFormatter(item.reviewer_name)}, ${dateFormatter(item.date.slice(0, 10))}`}</div>
              </div>
              <span style={{ fontWeight: 'bold' }}>{item.summary}</span>
              <div>{item.body}</div>
              <div className='review-photos' style={{display: 'flex'}}>
                {item.photos.map((photo, i) => {
                  return (
                    <div key={i} style={{padding: '5px'}} >
                    <img style={{cursor: 'pointer', border: '1px solid black'}} src={photo.url} height='75' width='75' onClick={(e) => {toggleModalPhoto(e)}}></img>
                    <Modal
                    id='qanda-modal_container'
                    style={frostyStyle}
                    isOpen={isOpenPhoto}
        onRequestClose={toggleModalPhoto}>
<img src={clickPhoto} height='600' width='600'></img>
                    </Modal>
                    </div>
                  )
                })}
              </div>
              <div className='helpfulAndReport Container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', margin: 'auto', margin: '20px', gap: '15px' }}>
                <div style={{ cursor: 'pointer' }} onClick={() => { handleHelpful(item.review_id) }} >{`Helpful? Yes (${item.helpfulness})`} </div>
                <div onClick={() => { handleReport(item.review_id) }} style={{ cursor: 'pointer' }}>Report</div>
              </div>
            </div>
          )
        })
      )
    }

  }

  var uniqueCharacteristicsCalc = () => {
    let reconfig = {
      Comfort: [comfortRating, setComfortRating, 'Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      Fit: [fitRating, setFitRating, 'Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
      Length: [lengthRating, setLengthRating, 'Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Quality: [qualityRating, setQualityRating, 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
      Size: [sizeRating, setSizeRating, 'A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'A size too wide'],
      Width: [widthRating, setWidthRating, 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    }


    let temp = Object.keys(characteristics);

    return (
      temp.map((item, i) => {
        let inner = Number(reconfig[item][0]) + 1
        return (
          <li key={i} style={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
              <label>{`Rate the ${item}`} <div style={{ color: 'red' }}>*</div></label>
            <div className='row_flex' style={{paddingRight: '10px'}}>
            <form>
              <input type="radio" value={'1'} name={'1'} checked={reconfig[item][0] === '1'} onChange={(e) => { reconfig[item][1](e.target.value) }} />
              <label>1</label>
              <input type="radio" value={'2'} name={'2'} checked={reconfig[item][0] === '2'} onChange={(e) => { reconfig[item][1](e.target.value) }} />
              <label>2</label>
              <input type="radio" value={'3'} name={'3'} checked={reconfig[item][0] === '3'} onChange={(e) => { reconfig[item][1](e.target.value) }} />
              <label>3</label>
              <input type="radio" value={'4'} name={'4'} checked={reconfig[item][0] === '4'} onChange={(e) => { reconfig[item][1](e.target.value) }} />
              <label>4</label>
              <input type="radio" value={'5'} name={'5'} checked={reconfig[item][0] === '5'} onChange={(e) => { reconfig[item][1](e.target.value) }} />
              <label>5</label>
            </form>
              <div >{reconfig[item][0] === '0' ? null : reconfig[item][inner]}</div>
              </div>
          </li>
        )
      })
    )
  }
  return (
    <>
      <ReviewContainer>
        <BreakdownContainer>
          <Breakdown avgRating={avgRating} fullReviewList={fullReviewList} numReviews={numReviews} characteristics={characteristics} filterObj={filterObj} setFilterObj={setFilterObj} starkMode={starkMode}/>
        </BreakdownContainer>
        <ListContainer>
          <div>{`${numReviews} reviews, sorted by `}
            <select value={sortType} onChange={(e) => { setSortType(e.target.value) }}>
              <option defaultValue="relevant">relevance</option>
              <option value="helpful">helpfulness</option>
              <option value="newest">newest</option>
            </select>
          </div>
          <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>{listDecider()}</div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', margin: 'auto', margin: '20px', gap: '15px' }}>
            {reviewCount >= reviewList.length ? null : <button className='qanda_button' data-testid="increment" onClick={handleMoreReviews}>{reviewList.length < 3 ? null : 'More Reviews'}</button>}
            <button className='qanda_button' onClick={toggleModal}>Add A Review + </button>
          </div>
        </ListContainer>
      </ReviewContainer>
          <Modal
          id='qanda-modal_container'
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="Add A Review"
            style={frostyStyle}
          >
            <div id='qanda-modal-content'>
              <div >
                <div id='qanda-modal-close-button' onClick={(e) => { toggleModal() }}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </div>
              </div>
              <div className='modalTopRowContainer'>
                <StarRating currentValue={currentValue} setCurrentValue={setCurrentValue} productInfo={productInfo}/>
              </div>
              <div className='modalRecommendContainer'>
                <label>Recommend? <div style={{ color: 'red' }}>*</div></label>
                <input type="radio" value='yes' name="yes" checked={newRecomended === 'yes'} onChange={(e) => { setNewRecomended(e.target.value) }} />
                <label>Yes</label>
                <input type="radio" value='no' name="no" checked={newRecomended === 'no'} onChange={(e) => { setNewRecomended(e.target.value) }} />
                <label>No</label>
              </div>
              <div className='characteristicsContainer'>
                {uniqueCharacteristicsCalc()}
              </div>
              <form className='formContainer' onSubmit={(e) => {
                e.preventDefault()
                handleReviewSubmit()
              }}>
                <div className='titleContainer'>
                  <label>Title</label>
                  <input type='text' placeholder='...' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className='review'>
                  <label>Review <div style={{ color: 'red' }}>*</div></label>
                  <textarea type='text' rows={5} cols={25} placeholder='...' value={review} onChange={(e) => { setReview(e.target.value) }} />
                  <label>{review.length > 49 ? 'Minimum reached' : `Minimum required characters left: ${50 - review.length}`}</label>
                </div>
                <div className='file-upload'>
                  <FileUpload photos={photos} setPhotos={setPhotos} />
                </div>
                <div className='nicknameContainer'>
                  <label>Nickname <div style={{ color: 'red' }}>*</div></label>
                  <input type='text' placeholder='...' value={nickname} onChange={(e) => { setNickname(e.target.value) }} />
                </div>
                <div className='emailContainer'>
                  <label>Email <div style={{ color: 'red' }}>*</div></label>
                  <input type='text' placeholder='...' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <button type="submit">Submit</button>
              </form>
              </div>
          </Modal>
    </>

  )
}


export default Reviews;


