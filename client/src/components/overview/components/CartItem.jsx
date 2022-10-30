import React from 'react';
import styled from 'styled-components';
const { useState, useEffect } = React;

const CartItemStyle = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 125px;
width: 100%;
padding: 10px 0;
border-bottom: 1pt solid #666;
`;
const CartImage = styled.div`
height: 80%;
aspect-ratio: 1/1;
border: .5pt solid #666;
border-radius: 10px;
margin-right: 15px;
`;

const CartDetailList = styled.ul`
  list-style: none;
  padding-left: 10px;
`;
const CartDetailListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;
const Category = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  width: 60px;
`;
const SaleTag = styled.div`
  color: red;
  padding-left: 5px;
  font-style: italic;
`
const Price = styled.div`
  width: 50px;
  display: flex;
  justify-content: flex-end;
`


const CartItem = ({ item, i }) => {
  return (
    <CartItemStyle>
      <CartImage style={{
        backgroundImage: `url(${item.photoUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>

      </CartImage>
      <div key={i}>
        <h3>{item.product_name}</h3>
        <CartDetailList>
          <CartDetailListItem><Category>Style</Category>{item.style}</CartDetailListItem>
          <CartDetailListItem><Category>Size</Category>{item.size}</CartDetailListItem>
          <CartDetailListItem><Category>Quantity</Category>{item.qty}</CartDetailListItem>
          <CartDetailListItem><Category>Price</Category>{item.sale_price !== null ?
          <Price>{item.sale_price}<SaleTag>sale</SaleTag></Price>
          :
          item.original_price}</CartDetailListItem>
      </CartDetailList>
    </div>
    </CartItemStyle >
  );
}

export default CartItem;