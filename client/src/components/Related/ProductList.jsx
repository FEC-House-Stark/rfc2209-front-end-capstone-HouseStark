import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCards from './ProductCards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
const leftArrow = <FontAwesomeIcon icon={faAngleLeft} />

const ProdList = styled.div`
display: flex;
flex-direction:column;
align-self:center;
position: relative;
/* box-sizing: border-box; */
/* border: 1px solid red; */
`;

const ProdHeader = styled.div`
font-family: system-ui;
font-size: 13px;
margin-top: 20px;
margin-bottom: 20px;
color: #4D6A6D;
`;

const NextButton = styled.div`
position: absolute;
right:0px;
bottom: 45%;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.19);
background-color: white;
cursor: pointer;
`;

const BackButton = styled.div`
position: absolute;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.19);
background-color: white;
bottom: 45%;
cursor: pointer;
`;

const ProductList = ({ data, setId }) => {
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(4);
  const [buttonR, setButtonR] = useState(false);
  const [buttonL, setButtonL] = useState(false);

  useEffect(() => { //sets length of data
    console.log(data);
    if (data.length) {
      setLength(data.length);
    }
  }, [data])

  useEffect(() => { //for right button
    if (length > 0) {
      if (count === length) {
        setButtonR(false)
      } else if (length > count) {
        setButtonR(true);
      }
    }
  }, [count, length])

  useEffect(() => { //for left button
    if (count > 4) {
      setButtonL(true)
    } else {
      setButtonL(false)
    }
  }, [count, length])

  const handleScrollR = () => {
    setCount(count + 1);
    let cards = document.getElementById('card-container');
    cards.scrollLeft += 210
  }
  const handleScrollL = () => {
    setCount(count - 1);
    let container = document.getElementById('card-container');
    container.scrollLeft -= 210
  }

  return (
    <ProdList>
      <ProdHeader>RELATED PRODUCTS</ProdHeader>
      <ProductCards data={data} setId={setId} />
      {buttonL && <BackButton className='back-button' onClick={handleScrollL}>{leftArrow}</BackButton>}
      {buttonR && <NextButton className='next-button' onClick={handleScrollR}>{rightArrow}</NextButton>}
    </ProdList>
  )
}
export default ProductList;