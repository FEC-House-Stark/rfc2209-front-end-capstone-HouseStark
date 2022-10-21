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

const ProductList = ({ data }) => {
  const [temp, setTemp] = useState([]);
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(4);
  const [buttonR, setButtonR] = useState(true);
  const [buttonL, setButtonL] = useState(false);

  useEffect(() => {
    if (data.length) {
      setTemp(data.concat(data))
      setLength(data.length * 2); // change when done with temp
    }
  }, [data])

  useEffect(() => {
    if (length <= count) {
      setButtonR(false);
    }
    if (count === length) {
      setButtonR(false);
    } else {
      setButtonR(true);
    }
  }, [length, count])

  useEffect(() => {
    if (count > 4) {
      setButtonL(true)
    } else {
      setButtonL(false)
    }
  }, [count])

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
      <ProductCards data={data} temp={temp} />
      {buttonL && <BackButton className='back-button' onClick={handleScrollL}>{leftArrow}</BackButton>}
      {buttonR && <NextButton className='next-button' onClick={handleScrollR}>{rightArrow}</NextButton>}
    </ProdList>
  )
}
export default ProductList;