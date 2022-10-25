import React from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalContainer = styled.div`
display:flex;
flex-direction: column;
position: fixed;
width:380px;
height: 300px;
background-color: white;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.19);
z-index: 1;
border: 1px solid black;
left: 50%;
top: 50%;
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

const ComparisonModal = () => {

  // Modal.setAppElement('body');

  return (
    <ModalContainer>
      <ModalHeader>COMPARING
        <ProductNames>
          <ProductOne>Camo onsie</ProductOne>
          <ProductTwo>yeezys</ProductTwo>
        </ProductNames>
      </ModalHeader>
      <Features>
        <div>CHECK</div>
        <div>Feature</div>
        <div>CHECK</div>
      </Features>
    </ModalContainer>
  )

}

export default ComparisonModal