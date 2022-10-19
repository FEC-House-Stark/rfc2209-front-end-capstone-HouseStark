import React from 'react';
import styled from 'styled-components';

const OutfitContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top: 10px;
`;

const Card = styled.div`
width:200px;
height: 300px;
/* margin-left:10px; */
margin-right:10px;
border: 1px solid;
border-color: black;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
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