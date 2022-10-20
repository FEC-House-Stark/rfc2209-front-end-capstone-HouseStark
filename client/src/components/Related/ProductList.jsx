import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCards from './ProductCards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAngleRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
const leftArrow = <FontAwesomeIcon icon={faChevronLeft} />

const ProdList = styled.div`
display: flex;
`;

const NextButton = styled.div`
align-self: center;
margin-left: 10px;
/* border: none; */
cursor: pointer;
`;

const BackButton = styled.div`
align-self: center;
margin-right: 10px;
/* border: none; */
cursor: pointer;
`;

const ProductList = ({ data }) => {
  const [temp, setTemp] = useState([]);
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);
  const [button, setButton] = useState(true);

  useEffect(() => {
    if (data.length) {
      setTemp(data.concat(data))
      setLength(data.length * 2);
    }
  }, [data])

  useEffect(() => {
    if (count && count === (length / 2)) {
      setButton(false);
    }
  }, [count])

  const handleScrollR = () => {
    setCount(count + 1);
    let cards = document.getElementById('card-container');
    cards.scrollLeft += 212
    // let cardContainer = [...document.querySelectorAll('.card-container')]
    // let cardDimentions = cards.getBoundingClientRect();
    // let cardWidth = cardDimentions.width;
    // console.log(cardDimentions, cardWidth)
  }
  const handleScrollL = () => {
    setCount(count - 1);
    let container = document.getElementById('card-container');
    container.scrollLeft -= 212
    // let cardContainer = [...document.querySelectorAll('.card-container')]
    // let cards = document.getElementById('product-card');
    // let cardDimentions = cards.getBoundingClientRect();
    // let cardWidth = cardDimentions.width;
    // console.log(cardDimentions, cardWidth)
  }




  return (
    <ProdList>
      {!button && <BackButton className='back-button' onClick={handleScrollL}>{leftArrow}</BackButton>}
      <ProductCards data={data} temp={temp} />
      {button && <NextButton className='next-button' onClick={handleScrollR}>{rightArrow}</NextButton>}
    </ProdList>
  )
}
export default ProductList;