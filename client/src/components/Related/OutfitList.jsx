import React from 'react';
import styled from 'styled-components';

const OutfitContainer = styled.div`
display:flex;
overflow:hidden;
`;

const Card = styled.div`
width:190px;
height: 295px;
margin-right:20px;
margin-left:20px;
border: 1px solid;
border-color: black;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column;
flex-shrink:0;
align-items: center;
justify-content:center;
cursor: pointer;
/* background-color:#A0A083;
color: white; */
`;


const OutfitList = () => {
  return (
    <OutfitContainer>
      <Card>
      +
      </Card>
    </OutfitContainer>
  )
}
export default OutfitList;