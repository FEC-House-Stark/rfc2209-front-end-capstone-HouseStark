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
  const [thumbnails, setThumbnails] = useState([])

  useEffect(() => { //gets related IDs
    axios(host_url + `products/${product_id}/related`, config)
      .then((res) => setRelatedIds(res.data))
      .catch((err) => console.log(err))
  }, [])
  useEffect(() => { //gets related products
    if (related_ids.length) {
      let promises = related_ids.map((id) => {
        return axios(host_url + `products/${id}`, config)
      })
      Promise.all(promises)
        .then((res) => setRelated(res))
    }
  }, [related_ids])
  useEffect(() => { //gets related styles
    if (related_ids.length) {
      let promises = related_ids.map((id) => {
        return axios(host_url + `products/${id}/styles`, config)
      })
      Promise.all(promises)
        .then((res) => setThumbnails(res))
    }
  }, [related_ids])

  return (
    <Container>
      <ProductList related={related} thumbnails={thumbnails} />
      <OutfitList />
    </Container>
  )
}

export default Related;