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
  const [temp, setTemp] = useState([])
  useEffect(() => {
    if (data.length) {
      setTemp(data.concat(data))
    }
  }, [data])

  const handleScrollR = () => {
    // let cardContainer = [...document.querySelectorAll('.card-container')]
    let cards = document.getElementById('card-container');
    let cardDimentions = cards.getBoundingClientRect();
    let cardWidth = cardDimentions.width;
    // console.log(cardDimentions, cardWidth)
    cards.scrollLeft += 212
  }
  const handleScrollL = () => {
    // let cardContainer = [...document.querySelectorAll('.card-container')]
    let cards = document.getElementById('card-container');
    // let cardDimentions = cards.getBoundingClientRect();
    // let cardWidth = cardDimentions.width;
    // console.log(cardDimentions, cardWidth)
    cards.scrollLeft -= 212
  }

  return (
    <ProdList>
      <BackButton className='back-button' onClick={handleScrollL}>{leftArrow}</BackButton>
      <ProductCards data={data} temp={temp} />
      <NextButton className='next-button' onClick={handleScrollR}>{rightArrow}</NextButton>
    </ProdList>
  )
}
export default ProductList;