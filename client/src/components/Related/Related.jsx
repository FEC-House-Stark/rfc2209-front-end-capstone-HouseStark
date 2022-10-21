import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './ProductList.jsx';
import OutfitList from './OutfitList.jsx';
import axios from 'axios'

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
/* border:1px solid black; */
`;

const Related = ({ handleClick, product_id, setId, numReviews, avgRating, productInfo, styles }) => {
  const [related_ids, setRelatedIds] = useState([]);
  const [related, setRelated] = useState([]);
  const [thumbnails, setThumbnails] = useState([])
  const [all_ratings, setAllRatings] = useState([])
  const [data, setData] = useState([])

  useEffect(() => { //gets related IDs
    axios(`/products/${product_id}/related`)
      .then((res) => setRelatedIds(res.data))
      .catch((err) => console.log(err))
  }, [product_id])

  // useEffect(() => { //TESTING
  //   if (related_ids.length) {
  //     const calcReviewData = (ratings, id) => {
  //       let totalReviews = 0;
  //       let totalSum = 0
  //       for (const rating in ratings) {
  //         totalSum += rating * Number(ratings[rating]);
  //         totalReviews += Number(ratings[rating]);
  //       }
  //       let avg = Number((totalSum / totalReviews).toFixed(2));
  //       setAllRatings((all_ratings) => [...all_ratings, { id, avg, totalReviews }])
  //     }
  //     let ratings = related_ids.map((product_id) => {
  //       let config = {
  //         params: { product_id }
  //       }
  //       return axios('reviews/meta', config)
  //     })
  //     let relatedProducts = related_ids.map((id) => {
  //       return axios(`products/${id}`)
  //     })
  //     let productStyles = related_ids.map((id) => {
  //       return axios(`products/${id}/styles`)
  //     })
  //     Promise.all(relatedProducts)
  //       .then((res) => {
  //         let info = res.map(prod => (
  //           {
  //             id: prod.data.id,
  //             category: prod.data.category,
  //             name: prod.data.name,
  //             price: prod.data.default_price,
  //             features: prod.data.features
  //           }
  //         ))
  //         setRelated(info)
  //       }).catch((err) => console.log('relatedProducts error ', err))

  //     Promise.all(productStyles)
  //       .then((res) => {
  //         let thumbnail = res.map(prod => (
  //           prod.data.results[0].photos[0]
  //         ))
  //         setThumbnails(thumbnail)
  //       }).catch((err) => console.log('productStyles error ', err))

  //     Promise.all(ratings)
  //       .then((res) => {
  //         res.map(prod => calcReviewData(prod.data.ratings, prod.data.product_id))
  //       }).catch((err) => console.log('err getting ratings', err))
  //   }
  // }, [related_ids])

  useEffect(() => { //gets related products
    if (related_ids.length) {
      let promises = related_ids.map((id) => {
        return axios(`products/${id}`)
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
        return axios(`products/${id}/styles`)
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
          params: { product_id }
        }
        return axios.get('reviews/meta', config)
      })
      Promise.all(ratings)
        .then((res) => {
          res.map(prod => calcReviewData(prod.data.ratings, prod.data.product_id))
        }).catch((err) => console.log('err getting ratings', err))
    }
  }, [related_ids])

  useEffect(() => { //Gathers all info needed in one state
    if (related.length && thumbnails.length && all_ratings.length) {
      for (let i = 0; i < related.length; i++) {
        if (thumbnails[i].thumbnail_url) {
          setData((data) => [...data, {
            ...related[i],
            ...thumbnails[i],
            ...all_ratings[i]
          }])
        }
      }
    }
  }, [related, thumbnails, all_ratings])


  return (
    <Container>
      <ProductList data={data} setId={setId} />
      <OutfitList />
    </Container>
  )
}

export default Related;