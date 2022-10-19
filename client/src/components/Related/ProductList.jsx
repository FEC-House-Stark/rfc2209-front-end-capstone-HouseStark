import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
/* justify-content: center; */

`;

const Card = styled.div`
width:200px;
height: 300px;
/* margin-left:10px; */
margin-right:20px;
border: 1px solid;
border-color: #5d5d5d;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column;
`;

const Photos = styled.img`
max-width: 100%;
height: 220px;
`
const Info = styled.div`
margin-left:5px;
margin-top:2px;
`

const ProductList = ({ related, thumbnails, ratings }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    if (related.length && thumbnails.length && ratings.length) {
      for (let i = 0; i < related.length; i++) {
        if (thumbnails[i].thumbnail_url) {
          setData((data) => [...data, {
            ...related[i],
            ...thumbnails[i],
            ...ratings[i]
          }])
        }
      }
    }
  }, [related, thumbnails, ratings])

  return (
    <CardContainer>
      {data.map((product, i) =>
        <Card className="card" onClick={() => console.log('nice')} key={i} >
          <Photos src={product.thumbnail_url} />
          <Info>{product.category}</Info>
          <Info>{product.name}</Info>
          <Info>{'$' + product.price}</Info>
          <Info>{product.totalReviews + ' reviews: ' + product.avg}</Info>
        </Card>
      )}
    </CardContainer>
  )
}
export default ProductList;