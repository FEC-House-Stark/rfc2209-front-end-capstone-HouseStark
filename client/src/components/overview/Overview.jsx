import React from 'react';
const {useEffect, useState} = React;
import ProductInfo from './components/ProductInfo.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDesc from './components/ProductDesc.jsx';
import ProductFeat from './components/ProductFeat.jsx';
import styled from 'styled-components';

const OverviewStyle = styled.div`
  border-bottom: 1pt solid #666;
  display: grid;
  grid-template-columns: 1fr 500px 300px 1fr;
  grid-template-rows: 200px 100px 100px 200px;
`;

const Overview = (props) => {
  const [price, setPrice] = useState();
  const [style, setStyle] = useState({});
  const [onSale, setOnSale] = useState(false);

  useEffect(() => {
    //set the price
    //if on sale
    if (props.styles.results !== undefined) {
      setStyle(props.styles.results[0]);
      console.log('styles:', props.styles.results);
    }
    }, [props.styles])


  return (
    <OverviewStyle>
        <ImageGallery handleClick={props.handleClick} />
        <ProductInfo handleClick={props.handleClick} productInfo={props.productInfo} avgRating={props.avgRating} numReviews={props.numReviews} style={style}/>
        <StyleSelector handleClick={props.handleClick} />
        <AddToCart handleClick={props.handleClick} />
        <ProductDesc handleClick={props.handleClick} productInfo={props.productInfo}/>
        <ProductFeat handleClick={props.handleClick} features={props.productInfo.features}/>
    </OverviewStyle>
  );
}

export default Overview;