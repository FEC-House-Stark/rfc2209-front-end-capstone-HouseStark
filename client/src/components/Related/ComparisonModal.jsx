import React, { useEffect, useRef } from 'react'
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
const ProductOne = styled.div`
font-weight: bold;
`;
const ProductTwo = styled.div`
font-weight: bold;
`;
const CurrentProduct = styled.div`
`;
const ToCompare = styled.div`
`;
const CurrentFeature = styled.div`
`;

const ComparisonModal = ({ setOpenModal, compare, currentProduct }) => {
  useEffect(() => {
    let temp = compare.concat(currentProduct);
    let allFeatures = {}
    temp.map((features, i) => {
      if (!allFeatures[features.feature]) {
        allFeatures[features.feature] = {}
      }
    })
    // console.log(allFeatures)
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
          <ProductOne>Current Product</ProductOne>
          <ProductTwo>Comapred Product</ProductTwo>
        </ProductNames>
      </ModalHeader>
      <Features>
        <CurrentProduct>{check}</CurrentProduct>
        <CurrentFeature>Feature</CurrentFeature>
        <ToCompare>{check}</ToCompare>
      </Features>
    </ModalContainer>
  )

}

export default ComparisonModal