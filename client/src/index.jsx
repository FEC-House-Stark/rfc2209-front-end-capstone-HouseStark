import React from 'react';
const { useState, useEffect } = React;
import Snowfall from 'react-snowfall'
import ToggleSwitch from './ToggleSwitch.jsx'
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx';
import QandA from './components/QandA/QandA.jsx';
import Reviews from './components/R&R/Reviews.jsx';
import Related from './components/Related/Related.jsx';
import styled from 'styled-components';
import logo from './assets/WolfLogo.png';
import logo_white from './assets/wolf_logo_white.png';
import { CloudinaryContext } from "cloudinary-react";

const header_ht = 80;

const Header = styled.h1`
color: white;
margin:0px;
min-width: 800px;
height: ${header_ht}px;
box-sizing: border-box;
display: flex;
padding: 0 20px;
justify-content:space-between;
align-items:center;
background-color: #4D6A6D;
position: sticky;
top: 0;
z-index: 2;
`;

const Search = styled.input`
`;

const Logo = styled.img`
width: 60px;
height: 60px;
`;
const Body = styled.div`
max-width: 1000px;
min-width: 800px;
margin: 0 auto;
padding: 0 20px;
box-sizing: border-box;
/* margin-left: clamp(50px, auto, auto);
margin-right: clamp(50px, auto, auto); */
`;


const host_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/'

const ClickTracking = (props) => {

  const handleClick = (e) => {
    let element = e.target.getAttribute('element-name').toString();
    let widget = e.target.getAttribute('widget').toString();
    let time = e.timeStamp.toString();
    let config = {
      url: '/interactions',
      method: 'post',
      data: {
        element, widget, time
      }
    };
    axios(config)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
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
  const [product_id, setProductId] = useState(66649);
  const [numReviews, setNumReviews] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [characteristics, setCharacteristics] = useState({});
  const [recommended, setRecommended] = useState({});
  const [productInfo, setProductInfo] = useState({});
  const [styles, setStyles] = useState({});
  const [starkMode, setStarkMode] = useState(false);
  const [font, setFont] = useState('#7E8B7E');
  const [background, setBackground] = useState({});

  useEffect (()=> {
    if(starkMode) {
      setBackground({background: '#282c34', color:'white'});
      setFont('white');
    } else {
      setBackground({});
    }
  },[starkMode])

  useEffect(() => {
    let config = {
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

    axios.get('/reviews/meta', config)
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
    axios.get('/products/' + product_id, config)
      .then((result) => {
        //console.log('GET /products/:product_id results', result.data);
        setProductInfo(result.data);
      })
      .catch((err) => {
        console.log('GET /products/:product_id ERROR:', err);
      });
    axios.get('/products/' + product_id + '/styles', config)
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
          return (
              <div style={{
                position: 'relative', ...background,
                }}>
              <Snowfall
                style={{
                  position:`${starkMode?'absolute':'fixed'}`,
                  width: '100%',
                  top: '0',
                  height: `${starkMode?'100%':`${header_ht}px`}`,
                  zIndex: `${starkMode?'3':'3'}`,
              }}
                snowflakeCount={`${starkMode? 225: 15}`}/>
            <>
                <Header style={{zIndex: `${starkMode?'2':'2'}`,}}>
                  <div style={{
                    height: '60px',
                    width: '410px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Logo src={starkMode ? "https://media3.giphy.com/media/KHKbbGKm3jAdsO8vhl/200w.webp?cid=790b7611xk4y1gulrmxxwlzccljlodabzdrf0d9ux6qqwbh3&rid=200w.webp&ct=s" : logo_white}
                  style={{width: `${starkMode ? '70px': '60px'}`,
                    height: `${starkMode ? '70px': '50px'}`}}/>
                  <h2>HOUSE STARK</h2>
                  </div>
                  <div >
                    <Search></Search>
                    <ToggleSwitch
                      checked={starkMode}
                      setChecked={setStarkMode}
                      />
                  </div>
                </Header>
                <Body className='widget-body'>
                  <Overview
                    handleClick={value}
                    product_id={product_id}
                    numReviews={numReviews}
                    avgRating={avgRating}
                    productInfo={productInfo}
                    styles={styles}
                    starkMode={starkMode}/>
                  <Related
                    handleClick={value}
                    product_id={product_id}
                    setId={setProductId}
                    numReviews={numReviews}
                    avgRating={avgRating}
                    productInfo={productInfo}
                    styles={styles}
                    starkMode={starkMode}/>
                  <QandA
                    handleClick={value}
                    productInfo={productInfo}
                    product_id={product_id}
                    starkMode={starkMode}/>
                  <Reviews
                    handleClick={value}
                    product_id={product_id}
                    numReviews={numReviews}
                    avgRating={avgRating}
                    characteristics={characteristics}
                    recommended={recommended}
                    starkMode={starkMode}
                    productInfo={productInfo}/>
                </Body>
            </>
              </div>
          )
        }
      }
    </ClickTracking>
  )

}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <CloudinaryContext cloudName="dbij37ike">
    <App />
  </CloudinaryContext>);