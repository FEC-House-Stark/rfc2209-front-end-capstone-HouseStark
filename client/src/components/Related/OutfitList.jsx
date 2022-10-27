import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OutfitCards from './OutfitCards.jsx';

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

const OutfitList = ({ productInfo, avgRating }) => {
  const [outfit, setOutfit] = useState([])
  const [current_product, setCurrentPorduct] = useState([])

  useEffect(() => {

    if (productInfo.id) {
      let temp = productInfo
      temp['avgRating'] = avgRating
      console.log(temp)
    }

  }, [productInfo])



  return (
    <OutfitContainer>
      <OutfitHeader>YOUR OUTFIT</OutfitHeader>
      <OutfitCards productInfo={productInfo} avgRating={avgRating} />
    </OutfitContainer>
  )
}
export default OutfitList;