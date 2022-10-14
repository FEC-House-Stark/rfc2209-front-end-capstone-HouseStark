import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import QandA from './components/Q&A/QandA.jsx';
import Reviews from './components/R&R/Reviews.jsx';
import Related from './components/Related/Related.jsx';

const host_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/'

const App = () => {
  const [product_id, setProductId] = useState(66644);
  const [numReviews, setNumReviews] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [characteristics, setCharacteristics] = useState({});
  const [recommended, setRecommended] = useState({});
  const [productInfo, setProductInfo] = useState({});
  const [styles, setStyles] = useState({});

  useEffect(() => {
    let config = {
      headers: {
        'Authorization': process.env.TOKEN,
      },
      params: { product_id },
    }

    //calculate numReviews
    const calcReviewData = (ratings) => {
            //calculate numReviews
      let totalReviews = 0;
      let totalSum = 0
      //iterate over ratings object
      for (const rating in ratings) {
        totalSum += rating * Number(ratings[rating]);
        totalReviews += Number(ratings[rating]);
      }
      console.log('totalReviews: ', totalReviews, ' totalSum:', totalSum, ' avgRating:', totalSum/totalReviews);
      //set numReviews
      setNumReviews(totalReviews);
      //set avgRating
      let avg = Number((totalSum/totalReviews).toFixed(2));
      setAvgRating(avg);
    }

    axios.get(host_url + 'reviews/meta', config)
    .then((result) => {
      console.log('GET reviews/meta result: ', result.data);
      calcReviewData(result.data.ratings);
      //set characteristics
      setCharacteristics(result.data.characteristics);
      //set recommended
      setRecommended(result.data.recommended);
    })
    //set st
    .catch((err) => {
      console.log('Initialize GET ERROR:', err);
    })
    axios.get(host_url + 'products/' + product_id, config)
    .then((result)=> {
      console.log('GET /products/:product_id results', result.data);
      setProductInfo(result.data);
    })
    .catch((err) => {
      console.log('GET /products/:product_id ERROR:', err);
    });
    axios.get(host_url + 'products/' + product_id + '/styles', config)
    .then((result)=> {
      console.log('GET /products/:product_id/styles results', result.data);
      setStyles(result.data);
    })
    .catch((err) => {
      console.log('GET /products/:product_id/styles ERROR:', err);
    });
  }, [product_id]);


  return (
    <div>
      <h1>House Stark</h1>
      <Overview/>
      <QandA/>
      <Reviews/>
      <Related/>
    </div>
  )

}
ReactDOM.render(<App />, document.getElementById('root'));