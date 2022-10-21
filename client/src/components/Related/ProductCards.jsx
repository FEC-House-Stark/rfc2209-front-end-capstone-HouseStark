import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const star = <FontAwesomeIcon icon={faStar} />

const CardContainer = styled.div`
max-width:829px;
min-width:829px;
box-sizing: border-box;
display: flex;
overflow-x: hidden;
scroll-behavior: smooth;
background-color: #00000005;
/* border:2px solid gold; */
`;

const Card = styled.div`
position: relative;
width:190px;
height: 300px;
margin-right:20px;
border: 1px solid;
border-color: black;
/* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.19); */
display: flex;
flex-direction: column;
flex-shrink: 0;
cursor: pointer;
background-color:#798478;
color: white;
`;

const Photos = styled.img`
max-width: 100%;
height: 219px;
`;

const Category = styled.div`
margin-left:5px;
margin-top:2px;
`;
const Name = styled.div`
margin-left:5px;
margin-top:2px;
`;
const Price = styled.div`
font-size: 13px;
margin-left:5px;
margin-top:2px;
`;
const Review = styled.div`
margin-left:5px;
margin-top:2px;
`;

const Star = styled.div`
position: absolute;
right:0px;
color: gold;
`;

const ProductCards = ({ data, temp }) => {
  return (
    <CardContainer id='card-container'>
      {temp.map((product, i) =>
        <Card id='product-card' onClick={() => console.log('card' + i)} key={i} >
          <Star>{star}</Star>
          <Photos src={product.url} />
          <Category>{product.category}</Category>
          <Name>{product.name}</Name>
          <Price>{'$' + product.price}</Price>
          <Review>{product.totalReviews + ' reviews: ' + product.avg}</Review>
        </Card>
      )}
    </CardContainer>
  )
}

export default ProductCards;