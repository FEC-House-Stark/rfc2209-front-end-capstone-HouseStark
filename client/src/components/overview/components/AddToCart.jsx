import React from 'react';
import styled from 'styled-components';

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

  return (
  //    <AddToCartStyle>
    <div widget='Overview' style={addCartStyle} element-name='AddToCart' onClick={props.handleClick}>
      AddToCart
      </div>
  //    </AddToCartStyle>
  )
}

export default AddToCart;