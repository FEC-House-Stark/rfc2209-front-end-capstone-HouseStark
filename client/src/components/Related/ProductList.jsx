import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCards from './ProductCards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
const leftArrow = <FontAwesomeIcon icon={faAngleLeft} />

const ProdList = styled.div`
max-width:820px;
min-width: 820px;
display: flex;
flex-direction:column;
align-self:center;
position: relative;
/* box-sizing: border-box; */
/* border: 1px solid red; */
`;

const ProdHeader = styled.h4`
font-family: system-ui;
font-size: 13px;
margin-top: 20px;
margin-bottom: 20px;
color: #4D6A6D;
`;
ProdHeader.displayName = 'ProdHeader';

const NextButton = styled.div`
position: absolute;
font-size: 15px;
right:-15px;
bottom: 45%;
color:#798478;;
cursor: pointer;
`;
NextButton.displayName = 'NextButton';

const BackButton = styled.div`
position: absolute;
font-size: 15px;
/* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.19); */
color:#798478;;
/* background-color: white; */
left:-15px;
bottom: 45%;
cursor: pointer;
`;
BackButton.displayName = 'BackButton';

const ProductList = ({ data, setId, setOpenModal, openModal, setCompare }) => {
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(4);
  const [buttonR, setButtonR] = useState(false);
  const [buttonL, setButtonL] = useState(false);

  useEffect(() => { //sets length of data
    //console.log(data);
    if (data.length) {
      setButtonR(false)
      setButtonL(false)
      setCount(4);
      setLength(data.length);
    } else {
      setLength(0);
    }
  }, [data])

  useEffect(() => { //for right button
    if (length > 4 && count !== length) {
      setButtonR(true);
    } else {
      setButtonR(false);
    }
  }, [count, length])

  useEffect(() => { //for left button
    if (count > 4 && length > 4) {
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
      <ProductCards data={data} setId={setId} setOpenModal={setOpenModal} openModal={openModal} setCompare={setCompare} />
      {buttonL && <BackButton className='back-button' onClick={handleScrollL}>{leftArrow}</BackButton>}
      {buttonR && <NextButton className='next-button' onClick={handleScrollR}>{rightArrow}</NextButton>}
    </ProdList>
  )
}
export default ProductList;