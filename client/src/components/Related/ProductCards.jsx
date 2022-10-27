import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import Stars from 'react-stars-display';

const star = <FontAwesomeIcon icon={faStar} />

const CardContainer = styled.div`
width:100%;
box-sizing: border-box;
display: flex;
overflow-x: hidden;
scroll-behavior: smooth;
/* border:2px solid gold; */
`;

const Card = styled.div`
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
Card.displayName = 'Card';

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

const Star = styled.div`
position: absolute;
right:0px;
color: #C9ADA1;
font-size: 20px;
&:hover {
color: black;
};
`;
Star.displayName = 'Star';

const ProductCards = ({ data, setId, setOpenModal, openModal, setCompare }) => {

  const handleOpen = (name, features) => {
    setOpenModal(!openModal)
    setCompare({ name, features })
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <CardContainer id='card-container'>
      {data.map((product, i) =>
        <Card id='product-card' key={i} >
          <Star onClick={() => handleOpen(product.name, product.features)} >{star}</Star>
          <Photos onClick={() => setId(product.id)} src={product.url} />
          <Category onClick={() => setId(product.id)}>{product.category}</Category>
          <Name onClick={() => setId(product.id)}>{product.name}</Name>
          <Price onClick={() => setId(product.id)}>{'$' + product.price}</Price>
          <Review onClick={() => setId(product.id)}>
            <Stars
              stars={product.avg}
              size={12} //optional
              spacing={2} //optional
              fill='#C9ADA1' //optional
            />
          </Review>
        </Card>
      )}
    </CardContainer>
  )
}

export default ProductCards;