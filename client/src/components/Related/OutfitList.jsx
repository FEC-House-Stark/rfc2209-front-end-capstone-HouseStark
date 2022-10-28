import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OutfitCards from './OutfitCards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
const leftArrow = <FontAwesomeIcon icon={faAngleLeft} />

const OutfitContainer = styled.div`
max-width:820px;
min-width: 820px;
display: flex;
flex-direction:column;
align-self:center;
position: relative;
/* box-sizing: border-box; */
/* border: 1px solid red; */
`;

const OutfitHeader = styled.div`
margin-top:40px;
margin-bottom:18px;
font-family: system-ui;
font-size: 13px;
color: #4D6A6D;
`;

const NextButton = styled.div`
position: absolute;
font-size: 15px;
right:-15px;
bottom: 45%;
color:#798478;;
cursor: pointer;
`;

const OutfitList = ({ productInfo, avgRating, styles }) => {
  const [clicked, setClicked] = useState(false)
  const [current_product, setCurrentPorduct] = useState([])
  const [check, setCheck] = useState({})
  const [data, setData] = useState([]);
  const [buttonR, setButtonR] = useState(false);

  useEffect(() => {
    if (productInfo.id && styles.product_id && avgRating) {
      let temp = productInfo
      temp['avgRating'] = avgRating
      temp['urls'] = styles.results[0].photos[0]
      setCurrentPorduct(temp);
      setClicked(true);
    }
  }, [productInfo, avgRating, styles])

  useEffect(() => {
    if (data.length > 3) {
      setButtonR(true)
    }
  }, [data])



  return (
    <OutfitContainer>
      <OutfitHeader>YOUR OUTFIT</OutfitHeader>
      <OutfitCards current_product={current_product} setClicked={setClicked} clicked={clicked} data={data} setData={setData} />
      {buttonR && <NextButton className='next-button' onClick={() => console.log('clicked')}>{rightArrow}</NextButton>}
    </OutfitContainer>
  )
}
export default OutfitList;