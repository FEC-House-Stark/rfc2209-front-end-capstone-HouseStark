import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
justify-content: center;
`;

const Card = styled.div`
width:200px;
height: 300px;
margin-left:10px;
margin-right:10px;
border: solid;
border-color: black;
display: flex;
flex-direction: column;
`;

const Photos = styled.img`
max-width: 100%;
height: 220px;
`

const ProductList = ({ related, thumbnails }) => {
  return (
    <CardContainer>
      {thumbnails.map((product, i) =>
        <Card key={i} >
          <Photos src={product.data.results[0].photos[0].thumbnail_url} />

        </Card>
      )}
    </CardContainer>
  )
}
export default ProductList;