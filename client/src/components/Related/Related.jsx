import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './ProductList.jsx';
import OutfitList from './OutfitList.jsx';
import axios from 'axios'

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const ProdHeader = styled.h3`
`
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
  const [all_ratings, setAllRatings] = useState([])

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
        .then((res) => {
          let info = res.map(prod => (
            {
              id: prod.data.id,
              category: prod.data.category,
              name: prod.data.name,
              price: prod.data.default_price,
              features: prod.data.features
            }
          ))
          setRelated(info)
        })
    }
  }, [related_ids])

  useEffect(() => { //gets related styles/thumbnails
    if (related_ids.length) {
      let promises = related_ids.map((id) => {
        return axios(host_url + `products/${id}/styles`, config)
      })
      Promise.all(promises)
        .then((res) => {
          let thumbnail = res.map(prod => (
            prod.data.results[0].photos[0]
          ))
          setThumbnails(thumbnail)
        })
    }
  }, [related_ids])

  useEffect(() => { //gets ratings for each of the related products
    const calcReviewData = (ratings, id) => {
      let totalReviews = 0;
      let totalSum = 0
      for (const rating in ratings) {
        totalSum += rating * Number(ratings[rating]);
        totalReviews += Number(ratings[rating]);
      }
      let avg = Number((totalSum / totalReviews).toFixed(2));
      setAllRatings((all_ratings) => [...all_ratings, { id, avg, totalReviews }])
    }
    if (related_ids.length) {
      let ratings = related_ids.map((product_id) => {
        let config = {
          headers: {
            'Authorization': process.env.TOKEN,
          },
          params: { product_id },
        }
        return axios.get(host_url + 'reviews/meta', config)
      })
      Promise.all(ratings)
        .then((res) => {
          res.map(prod => calcReviewData(prod.data.ratings, prod.data.product_id))
        }).catch((err) => console.log('err getting ratings', err))
    }
  }, [related_ids])

  return (
    <Container>
      <ProdHeader>Related Products</ProdHeader>
      <ProductList related={related} thumbnails={thumbnails} ratings={all_ratings} />
      <OutfitList />
    </Container>
  )
}

export default Related;