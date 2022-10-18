import React from 'react';
const { useState, useEffect } = React;
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx';
import QandA from './components/Q&A/QandA.jsx';
import Reviews from './components/R&R/Reviews.jsx';
import Related from './components/Related/Related.jsx';
import styled from 'styled-components';
import logo from './assets/WolfLogo.png';



const Header = styled.h1`
color: white;
margin:0px;
height: 60px;
display: flex;
padding-left: 10px;
padding-right: 10px;
justify-content:space-between;
align-items:center;
background-color: #4D6A6D;
`;

const Search = styled.input`
`;

const Logo = styled.img`
max-width: 100%;
max-height: 100%;
`;


const host_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/'

const ClickTracking = (props) => {

  const handleClick = (e) => {
    let element = e.target.getAttribute('element-name').toString();
    let widget = e.target.getAttribute('widget').toString();
    let time = e.timeStamp.toString();
    let config = {
      url: host_url+'interactions',
      method: 'post',
      headers: {
        'Authorization': process.env.TOKEN,
      },
      data:{
        element,widget,time
      }
    };

  axios(config)
  .then((result)=> {
    console.log(result);
   })
  .catch((err)=> {
    console.log(err);
   })
  };

  return (
    <>
      {props.children(handleClick)}
    </>
  )
}


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
      /* console.log('totalReviews: ', totalReviews, ' totalSum:', totalSum, ' avgRating:', totalSum / totalReviews); */
      //set numReviews
      setNumReviews(totalReviews);
      //set avgRating
      let avg = Number((totalSum / totalReviews).toFixed(2));
      setAvgRating(avg);
    }

    axios.get(host_url + 'reviews/meta', config)
      .then((result) => {
        /* console.log('GET reviews/meta result: ', result.data); */
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
      .then((result) => {
        //console.log('GET /products/:product_id results', result.data);
        setProductInfo(result.data);
      })
      .catch((err) => {
        console.log('GET /products/:product_id ERROR:', err);
      });
    axios.get(host_url + 'products/' + product_id + '/styles', config)
      .then((result) => {
        /* console.log('GET /products/:product_id/styles results', result.data); */
        setStyles(result.data);
      })
      .catch((err) => {
        console.log('GET /products/:product_id/styles ERROR:', err);
      });
  }, [product_id]);


  return (
    <ClickTracking>
      {
        (value) => {
          return(
            <>
              <Header>
                <Logo src={logo} /> House Stark
                <Search></Search>
              </Header>
              <Overview
                handleClick={value}
                product_id={product_id}
                numReviews={numReviews}
                avgRating={avgRating}
                productInfo={productInfo}
                styles={styles} />
              <Related
                handleClick={value}
                product_id={product_id}
                numReviews={numReviews}
                avgRating={avgRating}
                productInfo={productInfo}
                styles={styles} />
              <QandA
                handleClick={value}
                product_id={product_id} />
              <Reviews
                handleClick={value}
                product_id={product_id}
                numReviews={numReviews}
                avgRating={avgRating}
                characteristics={characteristics}
                recommended={recommended} />
            </>
          )
        }
      }
    </ClickTracking>
  )

}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);