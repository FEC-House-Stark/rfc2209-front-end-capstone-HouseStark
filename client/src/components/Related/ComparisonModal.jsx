import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const check = <FontAwesomeIcon icon={faCheck} />

const ModalContainer = styled.div`
display:flex;
flex-direction: column;
position: absolute;
width:380px;
height: 300px;
background-color: white;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.19);
z-index: 1;
border: 1px solid black;
right: 0%;
top: 0%;
/* transform: translate(-50%, -50%); */
overflow:auto;
`;
const ModalHeader = styled.div`
font-family: system-ui;
font-size: 9px;
padding: 5px;
`;
const Features = styled.div`
display: flex;
justify-content: space-between;
padding: 5px;
font-size: 12px;
`;
const ProductNames = styled.div`
display: flex;
justify-content: space-between;
padding-top: 5px;
font-size: 12px;
`;
const CurrentProduct = styled.div`
font-weight: bold;
`;
const ComapredProduct = styled.div`
font-weight: bold;
`;
const CurrentValue = styled.div`
`;
const ComparedValue = styled.div`
`;
const CurrentFeature = styled.div`
`;

const ComparisonModal = ({ setOpenModal, compare, currentProduct }) => {
  const [allFeatures, setAllFeatures] = useState({});

  useEffect(() => {
    console.log(compare.features, currentProduct.features)
    let temp = compare.features.concat(currentProduct.features);
    let allFeatures = []
    temp.map((features, i) => {
      if (!allFeatures[features.feature]) {
        allFeatures[features.feature] = {}
      }
    })
    console.log(allFeatures)
  }, [])

  let comparisonModal = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!comparisonModal.current.contains(e.target)) {
        setOpenModal(false)
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })


  return (
    <ModalContainer ref={comparisonModal}>
      <ModalHeader>COMPARING
        <ProductNames>
          <CurrentProduct>{currentProduct.name}</CurrentProduct>
          <ComapredProduct>{compare.name}</ComapredProduct>
        </ProductNames>
      </ModalHeader>
      <Features>
        <CurrentValue>{check}</CurrentValue>
        <CurrentFeature>Feature</CurrentFeature>
        <ComparedValue>{check}</ComparedValue>
      </Features>
    </ModalContainer>
  )

}

export default ComparisonModal