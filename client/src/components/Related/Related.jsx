import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './ProductList.jsx';
import OutfitList from './OutfitList.jsx';
import ComparisonModal from './ComparisonModal.jsx'
import axios from 'axios'

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
/* border:1px solid black; */
/* contain: content; */
`;

const Related = ({ handleClick, product_id, setId, numReviews, avgRating, productInfo, styles }) => {
  const [related_ids, setRelatedIds] = useState([]);
  const [related, setRelated] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [all_ratings, setAllRatings] = useState([]);
  const [data, setData] = useState([]);
  const [compare, setCompare] = useState({})
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => { //gets related IDs
    axios(`/products/${product_id}/related`)
      .then((res) => {
        setData([]);
        setRelated([]);
        setThumbnails([]);
        setAllRatings([]);
        let unique = {}
        for (let i = 0; i < res.data.length; i++) {
          if (!unique[res.data[i]]) {
            unique[res.data[i]] = res.data[i]
          }
        }
        setRelatedIds(Object.keys(unique))
      }).catch((err) => console.log('ERR in Product IDs', err))
  }, [product_id])


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
        }).catch((err) => console.log('ERR in RELATED', err))
    }
  }, [related_ids])

  useEffect(() => { //gets related styles/thumbnails
    if (related_ids.length) {
      let promises = related_ids.map((id) => {
        return axios(`products/${id}/styles`)
      })
      Promise.all(promises)
        .then((res) => {
          var thumbnail = [];
          for (let i = 0; i < res.length; i++) {
            let currentProduct = res[i].data.results
            for (let x = 0; x < currentProduct.length; x++) {
              if (currentProduct[x]['default?']) {
                thumbnail.push(currentProduct[x].photos[0])
                break;
              } else if (x === currentProduct.length - 1) {
                thumbnail.push(res[i].data.results[0].photos[0])
              }
            }
          }
          setThumbnails(thumbnail)
        }).catch((err) => console.log('Err getting thumbnails', err));
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
      // console.log('thumbnails ', thumbnails, 'related ', related)
      for (let i = 0; i < related.length; i++) {
        if (thumbnails[i].url && related[i].id !== Number(product_id)) {
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
      <ProductList data={data} setId={setId} setOpenModal={setOpenModal} setCompare={setCompare} />
      <OutfitList />
      {openModal && <ComparisonModal setOpenModal={setOpenModal} compare={compare} currentProduct={productInfo} />}
    </Container>
  )
}

export default Related;