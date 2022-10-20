import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
overflow-x: hidden;
scroll-behavior: smooth;
`;

const Card = styled.div`
width:190px;
height: 300px;
margin-right:20px;
border: 1px solid;
border-color: black;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column;
flex-shrink: 0;
cursor: pointer;
/* background-color:#A0A083;
color: white; */
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

const ProductCards = ({ data, temp }) => {
  return (
    <CardContainer id='card-container'>
      {temp.map((product, i) =>
        <Card className='product-card' onClick={() => console.log('card' + i)} key={i} >
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