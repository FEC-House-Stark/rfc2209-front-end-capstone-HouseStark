import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const OutfitCardContainer = styled.div`
min-width:831px;
box-sizing: border-box;
display: flex;
overflow-x: hidden;
scroll-behavior: smooth;
/* border:2px solid gold; */
`;
const Card = styled.div`
width:190px;
height: 295px;
margin-right:20px;
/* margin-left:20px; */
border: 1px solid;
border-color: black;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column;
flex-shrink:0;
align-items: center;
justify-content:center;
cursor: pointer;
/* background-color:#A0A083;
color: white; */
`;

const Plus = styled.div`
font-size: 20px;
`;

const Text = styled.div`
align-items:flex-end;
`;

const OutfitCards = () => {


  return (
    <OutfitCardContainer>
      <Card>
        <Plus>+</Plus>
        <Text>Add to Outfit</Text>
      </Card>
    </OutfitCardContainer>
  )
}
export default OutfitCards;