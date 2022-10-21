import React from 'react';
import styled from 'styled-components';
import OutfitCards from './OutfitCards.jsx';

const OutfitContainer = styled.div`
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

const OutfitList = () => {
  return (
    <OutfitContainer>
      <OutfitHeader>YOUR OUTFIT</OutfitHeader>
      <OutfitCards />
    </OutfitContainer>
  )
}
export default OutfitList;