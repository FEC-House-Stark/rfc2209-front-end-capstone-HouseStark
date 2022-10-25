import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Modal from 'react-modal';
import FileUpload from './FileUpload.jsx'
import Breakdown from './Breakdown.jsx'
import StarRating from './StarRating.jsx'
import { BreakdownContainer, ListContainer, ReviewContainer } from "./file-upload.styles";




const Reviews = ({ handleClick, product_id, numReviews, avgRating, characteristics, recommended }) => {
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

  // console.log(numReviews)
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
    // console.log(characteristics)
    Modal.setAppElement('body');

    axios.get(host_url + 'reviews/', config1)
      .then((data) => {
        // console.log('test:', data.data.results[0].recommend)
        setReviewList(data.data.results)
        setFullReviewList(data.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [product_id, sortType, numReviews, submitFlag]);

  var handleMoreReviews = () => {
    if (reviewCount >= reviewList.length - 1) {
      setReviewCount(reviewList.length)
    }
    if (reviewCount < reviewList.length) {
      setReviewCount(reviewCount + 2)
    }
    // setReviewList(reviewList.slice(0, 2))
  }

  var toggleModal = () => {
    setIsOpen(!isOpen);
  }

  var handleRadioChange = (e) => {
    // console.log(typeof reconfig[item][1])
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
    // console.log('test', newRecomended)
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

  var sendNewReview = () => {
    // console.log("TEST")

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
      // console.log(characteristics[key].id)
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
      "photos": [],
      "characteristics": resultObj
    }
    // console.log(config)

    axios.post(host_url + 'reviews', config, { headers: { 'Authorization': process.env.TOKEN } })
      .then((result) => {
        // console.log('TEST', result);
      })
      .catch((err) => {
        console.log('TEST', err);
      })
  }

  var listDecider = () => {
    if (filterObj.length) {
      return (
        reviewList.slice(0, reviewCount).map((item, i) => {
          return (
            <div key={i} style={{ border: '1px solid black' }}>
              <div>{`${item.reviewer_name}, ${item.date.slice(0, 10)}`}</div>
              <span style={{ fontWeight: 'bold' }}>{item.summary}</span>
              <div>{item.body}</div>
              <div>{`Helpful? ${item.helpfulness}`}</div>
            </div>
          )
        })
      )
    }
  }

  var uniqueCharacteristicsCalc = () => {
    let reconfig = {
      Comfort: [comfortRating, setComfortRating],
      Fit: [fitRating, setFitRating],
      Length: [lengthRating, setLengthRating],
      Quality: [qualityRating, setQualityRating],
      Size: [sizeRating, setSizeRating],
      Width: [widthRating, setWidthRating],
    }

    let temp = Object.keys(characteristics);

    return (
      temp.map((item, i) => {
        return (
          <li key={i}>
            <form>
              <label>{`Rate the ${item}`} <div style={{ color: 'red' }}>*</div></label>
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
          </li>
        )
      })
    )
  }
// if filterObj.length
  return (
    <>
      <ReviewContainer>
        <BreakdownContainer>
          <Breakdown avgRating={avgRating} fullReviewList={fullReviewList} numReviews={numReviews} characteristics={characteristics} filterObj={filterObj} setFilterObj={setFilterObj}/>
        </BreakdownContainer>
        <ListContainer>
          <div>{`${numReviews} reviews, sorted by `}
            <select value={sortType} onChange={(e) => { setSortType(e.target.value) }}>
              <option defaultValue="relevant">relevance</option>
              <option value="helpful">helpfulness</option>
              <option value="newest">newest</option>
            </select>
          </div>
          <div>{reviewList.slice(0, reviewCount).map((item, i) => {
            return (
              <div key={i} style={{ border: '1px solid black' }}>
                <div>{`${item.reviewer_name}, ${item.date.slice(0, 10)}`}</div>
                <span style={{ fontWeight: 'bold' }}>{item.summary}</span>
                <div>{item.body}</div>
                <div>{`Helpful? ${item.helpfulness}`}</div>
              </div>
            )
          })}</div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', margin: 'auto', margin: '20px', gap: '15px' }}>
            {reviewCount >= reviewList.length ? null : <button style={buttonStyle} data-testid="increment" onClick={handleMoreReviews}>{reviewList.length < 3 ? null : 'More Reviews'}</button>}
            <button style={buttonStyle} onClick={toggleModal}>Add A Review + </button>
          </div>
        </ListContainer>
      </ReviewContainer>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Add A Review"
      >
        <h1>Write your review</h1>
        <h2>About the item</h2>
        <div>
          <StarRating currentValue={currentValue} setCurrentValue={setCurrentValue} />
        </div>
        <li>
          <label>Recommend? <div style={{ color: 'red' }}>*</div></label>
          <input type="radio" value='yes' name="yes" checked={newRecomended === 'yes'} onChange={(e) => { setNewRecomended(e.target.value) }} />
          <label>Yes</label>
          <input type="radio" value='no' name="no" checked={newRecomended === 'no'} onChange={(e) => { setNewRecomended(e.target.value) }} />
          <label>No</label>
        </li>
        <div>
          {uniqueCharacteristicsCalc()}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleReviewSubmit()
        }}>
          <li>
            <label>Title</label>
            <input type='text' placeholder='...' value={title} onChange={(e) => { setTitle(e.target.value) }} />
          </li>
          <li>
            <label>Review <div style={{ color: 'red' }}>*</div></label>
            <textarea type='text' rows={5} cols={25} placeholder='...' value={review} onChange={(e) => { setReview(e.target.value) }} />
            <label>{review.length > 49 ? 'Minimum reached' : `Minimum required characters left: ${50 - review.length}`}</label>
          </li>
          <div className='file-upload'>
            <FileUpload files={files} setFiles={setFiles} />
          </div>
          <li>
            <label>Nickname <div style={{ color: 'red' }}>*</div></label>
            <input type='text' placeholder='...' value={nickname} onChange={(e) => { setNickname(e.target.value) }} />
          </li>
          <li>
            <label>Email <div style={{ color: 'red' }}>*</div></label>
            <input type='text' placeholder='...' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </li>
          <button type="submit">Submit</button>
        </form>

        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </>

  )
}

export default Reviews;


