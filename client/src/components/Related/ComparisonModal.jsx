import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const check = <FontAwesomeIcon icon={faCheck} />

const ModalContainer = styled.div`
display:flex;
content:contain;
flex-direction: column;
position: absolute;
width:380px;
max-height:150px;
background-color:#EAE0CC;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.19);
z-index: 1;
border: 1px solid black;
right: 0%;
top: 0%;
overflow:auto;
`;

const ModalHeader = styled.div`
font-family: system-ui;
font-size: 9px;
box-sizing:border-box;
color:white;
background-color:#798478;
border-bottom: 1px solid black;
`;

const Features = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
border-bottom: 1px solid black;
font-size: 12px;
`;

const ProdHeaders = styled.div`
display: flex;
justify-content: space-between;
padding-top: 5px;
width: 100%;
font-size: 12px;
`;

const CurrentProduct = styled.div`
display:flex;
justify-content:center;
min-width:125px;
max-width:125px;
border-right: 1px solid black;
color:white;
font-weight: bold;
`;

const Feature = styled.div`
display:flex;
justify-content:center;
min-width:125px;
max-width:125px;
border-right: 1px solid black;
color:white;
font-weight: bold;
`;

const ComapredProduct = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
min-width:125px;
max-width:125px;
color:white;
font-weight: bold;
`;

const CurrentValue = styled.div`
display:flex;
justify-content:center;
align-items:center;
min-width:125px;
max-width:125px;
border-right: 1px solid black;
`;

const ComparedValue = styled.div`
display:flex;
justify-content:center;
align-items:center;
min-width:125px;
max-width:125px;
border-left: 0px;
`;

const CurrentFeature = styled.div`
display:flex;
justify-content:center;
align-items:center;
min-width:125px;
max-width:125px;
border-right: 1px solid black;
`;

const ComparisonModal = ({ setOpenModal, compare, currentProduct }) => {
  const [all_features, setAllFeatures] = useState([]);

  const handleCheck = () => {
    return check;
  }

  useEffect(() => {
    // console.log(compare.features, currentProduct.features)
    let allFeaturesArr = []
    let uniqueChecker = {}
    let combinedFeatures = compare.features.concat(currentProduct.features);
    combinedFeatures.map((features, i) => {
      if (!uniqueChecker[features.feature]) {
        uniqueChecker[features.feature] = features.feature
        allFeaturesArr.push({ feature: features.feature })
      }
    })

    for (var i = 0; i < allFeaturesArr.length; i++) {
      var checker = allFeaturesArr[i];
      for (var x = 0; x < compare.features.length; x++) {
        if (checker.feature === compare.features[x].feature) {
          checker['compare'] = check
          break;
        } else {
          allFeaturesArr[i]['compare'] = '';
        }
      }
    }
    for (var i = 0; i < allFeaturesArr.length; i++) {
      var checker = allFeaturesArr[i];
      for (var x = 0; x < currentProduct.features.length; x++) {
        if (checker.feature === currentProduct.features[x].feature) {
          checker['current'] = check
          break;
        } else {
          allFeaturesArr[i]['current'] = '';
        }
      }
    }
    setAllFeatures(allFeaturesArr)
  }, [])

  let comparisonModal = useRef();

  useEffect(() => { //Handles closing the modal
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
        <ProdHeaders>
          <CurrentProduct>{currentProduct.name}</CurrentProduct>
          <Feature>Features</Feature>
          <ComapredProduct>{compare.name}</ComapredProduct>
        </ProdHeaders>
      </ModalHeader>
      {all_features.map((data, i) =>
        <Features key={i}>
          <CurrentValue>{data.current}</CurrentValue>
          <CurrentFeature>{data.feature}</CurrentFeature>
          <ComparedValue>{data.compare}</ComparedValue>
        </Features>)}
    </ModalContainer>
  )

}

export default ComparisonModal