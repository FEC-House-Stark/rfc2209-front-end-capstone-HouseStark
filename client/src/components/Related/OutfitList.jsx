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

const OutfitList = ({ productInfo, avgRating, styles }) => {
  // const [outfit, setOutfit] = useState([])
  const [current_product, setCurrentPorduct] = useState([])

  useEffect(() => {
    if (productInfo.id && styles.product_id && avgRating) {
      let data = productInfo
      data['avgRating'] = avgRating
      data['urls'] = styles.results[0].photos[0]
      setCurrentPorduct(data);
    }
  }, [productInfo, avgRating, styles])



  return (
    <OutfitContainer>
      <OutfitHeader>YOUR OUTFIT</OutfitHeader>
      <OutfitCards current_product={current_product} avgRating={avgRating} />
    </OutfitContainer>
  )
}
export default OutfitList;