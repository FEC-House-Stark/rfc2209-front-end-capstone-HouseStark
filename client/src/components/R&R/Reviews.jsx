import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Modal from 'react-modal';
import FileUpload from './FileUpload.jsx'



const Reviews = ({ handleClick, product_id, numReviews, avgRating, characteristics, recommended }) => {
  const [reviewList, setReviewList] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [newReview, setNewReview] = useState({});
  const [newRecomended, setNewRecomended] = useState('yes');
  const [sortType, setSortType] = useState('relevant');
  const [sizeRating, setSizeRating] = useState('1');
  const [comfortRating, setComfortRating] = useState('2');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [files, setFiles] = useState({});

  const host_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/'

  let config = {
    headers: {
      'Authorization': process.env.TOKEN,
    },
    params: {
      sort: sortType,
      product_id
    },
  }

  useEffect(() => {

    Modal.setAppElement('body');

    axios.get(host_url + 'reviews/', config)
      .then((data) => {
        //console.log(data.data.results[0])
        setReviewList(data.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [product_id, sortType]);

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

  return (
    <>
      <div>{`${numReviews} reviews, sorted by `}
        <select value={sortType} onChange={(e) => {setSortType(e.target.value)}}>
          <option defaultValue="relevant">relevance</option>
          <option value="helpful">helpfulness</option>
          <option value="newest">newest</option>
        </select>
      </div>
      <div>{reviewList.slice(0, reviewCount).map((item, i) => {
        return (
          <div key={i} style={{ border: '1px solid grey' }}>
            <div>{`${item.reviewer_name}, ${item.date.slice(0, 10)}`}</div>
            <span style={{ fontWeight: 'bold' }}>{item.summary}</span>
            <div>{item.body}</div>
            <div>{`Helpful? ${item.helpfulness}`}</div>
          </div>
        )
      })}</div>
      {reviewCount >= reviewList.length ? <button disabled={true}>No More Reviews</button> : <button data-testid="increment" onClick={handleMoreReviews}>{reviewList.length < 3 ? null : 'More Reviews'}</button>}
      <button onClick={toggleModal}>Add A Review</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Add A Review"
      >
        <h1>Enter Review Details</h1>
        <form onSubmit={(e) => {e.preventDefault()
          console.log('test', newRecomended, comfortRating, sizeRating)}}>
          <li>
          <label>Recommend? </label>
          <input type="radio" value='yes' name="yes" checked={newRecomended === 'yes'} onChange={(e) => {setNewRecomended(e.target.value)}}/>
          <label>Yes</label>
          <input type="radio" value='no' name="no" checked={newRecomended === 'no'} onChange={(e) => {setNewRecomended(e.target.value)}}/>
          <label>No</label>
          </li>
          <li>
          <label>Rate the size accuracy</label>
          <input type="radio" value={'1'} name={'1'} checked={sizeRating === '1'} onChange={(e) => {setSizeRating(e.target.value)}}/>
          <label>1</label>
          <input type="radio" value={'2'} name={'2'} checked={sizeRating === '2'} onChange={(e) => {setSizeRating(e.target.value)}}/>
          <label>2</label>
          <input type="radio" value={'3'} name={'3'} checked={sizeRating === '3'} onChange={(e) => {setSizeRating(e.target.value)}}/>
          <label>3</label>
          <input type="radio" value={'4'} name={'4'} checked={sizeRating === '4'} onChange={(e) => {setSizeRating(e.target.value)}}/>
          <label>4</label>
          <input type="radio" value={'5'} name={'5'} checked={sizeRating === '5'} onChange={(e) => {setSizeRating(e.target.value)}}/>
          <label>5</label>
          </li>
          <li>
          <label>Rate the comfort</label>
          <input type="radio" value={'1'} name={'1'} checked={comfortRating === '1'} onChange={(e) => {setComfortRating(e.target.value)}}/>
          <label>1</label>
          <input type="radio" value={'2'} name={'2'} checked={comfortRating === '2'} onChange={(e) => {setComfortRating(e.target.value)}}/>
          <label>2</label>
          <input type="radio" value={'3'} name={'3'} checked={comfortRating === '3'} onChange={(e) => {setComfortRating(e.target.value)}}/>
          <label>3</label>
          <input type="radio" value={'4'} name={'4'} checked={comfortRating === '4'} onChange={(e) => {setComfortRating(e.target.value)}}/>
          <label>4</label>
          <input type="radio" value={'5'} name={'5'} checked={comfortRating === '5'} onChange={(e) => {setComfortRating(e.target.value)}}/>
          <label>5</label>
          </li>
          <li>
          <label>Title</label>
          <input type='text' placeholder='...' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
          </li>
          <li>
          <label>Review</label>
          <input type='text' placeholder='...' value={review} onChange={(e) => {setReview(e.target.value)}}/>
          <label>{review.length > 49 ? 'Minimum reached' : `Minimum required characters left: ${50 - review.length}`}</label>
          </li>
          <div className='file-upload'>
            <FileUpload files={files} setFiles={setFiles}/>
          </div>
          <li>
          <label>Nickname</label>
          <input type='text' placeholder='...' value={nickname} onChange={(e) => {setNickname(e.target.value)}}/>
          </li>
          <li>
          <label>Email</label>
          <input type='text' placeholder='...' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
          </li>
        <button type="submit">Submit</button>
        </form>

        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </>

  )
}

export default Reviews;