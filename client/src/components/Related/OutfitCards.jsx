import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stars from 'react-stars-display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const del = <FontAwesomeIcon icon={faX} />

const OutfitCardContainer = styled.div`
width:100%;
box-sizing: border-box;
display: flex;
overflow-x: hidden;
scroll-behavior: smooth;
`;
const AddToOutfit = styled.div`
width:190px;
height: 300px;
margin-right:20px;
border: 1px solid;
border-color: black;
box-sizing: border-box;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column;
flex-shrink:0;
align-items: center;
justify-content:center;
cursor: pointer;
&:hover {
background-color: rgba(0, 0, 0, 0.19);
};
`;

const OutfitCard = styled.div`
position: relative;
width:190px;
height: 300px;
margin-right:20px;
border: 1px solid;
box-sizing: border-box;
border-color: black;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column;
flex-shrink: 0;
cursor: pointer;
background-color:#798478;
color: white;
`;

const Plus = styled.div`
font-size: 20px;
`;

const Text = styled.div`
align-items:flex-end;
`;
const Photos = styled.img`
max-width: 100%;
height: 219px;
border-bottom: 1px solid black;
`;

const Category = styled.div`
font-size: 14px;
margin-left:5px;
margin-top:2px;
`;
const Name = styled.div`
margin-left:5px;
margin-top:2px;
`;
const Price = styled.div`
font-size: 12px;
margin-left:5px;
margin-top:2px;
`;
const Review = styled.div`
margin-left:5px;
margin-top:2px;
`;

const Delete = styled.div`
position: absolute;
right:2px;
color: #C9ADA1;
font-size: 15px;
&:hover {
color: black;
};
`;

const OutfitCards = ({ current_product, clicked, setClicked, data, setData }) => {
  const handleOutfit = () => {
    if (clicked) {
      setClicked(false);
      setData((data) => [...data, current_product])
    }
  }


  return (
    <OutfitCardContainer>
      <AddToOutfit onClick={() => handleOutfit()}>
        <Plus>+</Plus>
        <Text>Add to Outfit</Text>
      </AddToOutfit>
      {data.map((product, i) =>
        <OutfitCard id='outfit-card' key={i} >
          <Delete>{del}</Delete>
          <Photos src={product.urls.thumbnail_url} />
          <Category>{product.category}</Category>
          <Name>{product.name}</Name>
          <Price>{'$' + product.default_price}</Price>
          <Review>
            <Stars
              stars={product.avgRating}
              size={12} //optional
              spacing={2} //optional
              fill='#C9ADA1' //optional
            />
          </Review>
        </OutfitCard>
      )}
    </OutfitCardContainer>
  )
}
export default OutfitCards;