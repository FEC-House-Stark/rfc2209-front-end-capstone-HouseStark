import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './ProductList.jsx';
import OutfitList from './OutfitList.jsx';
import axios from 'axios'

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const host_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/'
const config = {
  headers: {
    'Authorization': process.env.TOKEN,
  }
}
const Related = ({ handleClick, product_id, numReviews, avgRating, productInfo, styles }) => {
  const [related_ids, setRelatedIds] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios(host_url + `products/${product_id}/related`, config)
      .then((res) => setRelatedIds(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (related_ids.length) {
      let promises = related_ids.map((id) => {
        return axios(host_url + `products/${id}`, config)
      })
      Promise.all(promises)
        .then((res) => setRelated(res))
    }
  }, [related_ids])

  return (
    <Container>
      <ProductList />
      <OutfitList />
    </Container>
  )
}

export default Related;