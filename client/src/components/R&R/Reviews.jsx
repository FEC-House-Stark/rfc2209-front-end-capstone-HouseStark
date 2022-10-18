import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Modal from 'react-modal';



const Reviews = ({ handleClick, product_id, numReviews, avgRating, characteristics, recommended }) => {
  const [reviewList, setReviewList] = useState([]);
  const [reviewCount, setReviewCount] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [newReview, setNewReview] = useState({});
  const [newRecomended, setNewRecomended] = useState('');
  const [sortType, setSortType] = useState('relevant');

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
        console.log(data.data.results[0])
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
      {reviewCount >= reviewList.length ? <button disabled={true}>No More Reviews</button> : <button onClick={handleMoreReviews}>{reviewList.length < 3 ? null : 'More Reviews'}</button>}
      <button onClick={toggleModal}>Add A Review</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Add A Review"
      >
        <h1>Enter Review Details</h1>
        <div>
          <label>Recommend? </label>
          <input type="radio" value={newRecomended} name="gender" onChange={(e) => { setNewRecomended(e.target.value) }} />
          <label>Yes</label>
          <input type="radio" value={newRecomended} name="test" onChange={(e) => { setNewRecomended(e.target.value) }} />
          <label>No</label>
        </div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </>

  )
}

export default Reviews;