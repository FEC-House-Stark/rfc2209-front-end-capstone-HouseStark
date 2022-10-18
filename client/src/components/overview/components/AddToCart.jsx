import React from 'react';
import styled from 'styled-components';
const { useEffect, useState } = React;

const AddToCartStyle = styled.div `
  grid-column-start: 3;
  grid-row-start: 3;
`;
const addCartStyle = {
  'gridColumnStart': '4',
  'gridRowStart': '3',
  height: '100%',
  width: '100%'
}

const AddToCart = (props) =>  {
  useEffect(() => {
    if(props.skus !== undefined) {
      //console.log('props.skus: ', props.skus);
    }
  })

  return (
  //    <AddToCartStyle>
    <div widget='Overview' style={addCartStyle} element-name='AddToCart' onClick={props.handleClick}>
      Add To Cart
      </div>
  //    </AddToCartStyle>
  )
}

export default AddToCart;