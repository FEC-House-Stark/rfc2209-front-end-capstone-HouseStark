import React from 'react';
const {useEffect, useState} = React;
import ProductInfo from './components/ProductInfo.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDesc from './components/ProductDesc.jsx';
import ProductFeat from './components/ProductFeat.jsx';
import styled from 'styled-components';

const info_height = 175;
const style_height = 150;
const cart_height = 150;
const image_height = info_height + style_height + cart_height;
const image_width = Math.floor(image_height * 1.15)-.01;

const OverviewStyle = styled.div`
  display: grid;
  grid-template-columns: 1px ${image_width}px minmax(15px,75px) minmax(250px, 1fr) 1px;
  grid-template-rows: ${info_height}px ${style_height}px ${cart_height}px 10px 200px;
  padding: 15px 0px;
`;

const Overview = (props) => {
  const [price, setPrice] = useState();
  const [style, setStyle] = useState({});
  const [onSale, setOnSale] = useState(false);

  useEffect(() => {
    //set the price
    //if on sale
    if (props.styles.results !== undefined) {
      for (const style of props.styles.results) {
        if (style['default?']) {
          setStyle(style);
         // console.log('style:', style);
          break;
        }
      }
    }}, [props.styles])


  return (
    <OverviewStyle>
        <ImageGallery handleClick={props.handleClick} photos={style.photos} image_width={image_width} image_height={image_height}/>
        <ProductInfo handleClick={props.handleClick} productInfo={props.productInfo} avgRating={props.avgRating} numReviews={props.numReviews} style={style}/>
        <StyleSelector handleClick={props.handleClick} styles={props.styles.results} style={style} setStyle={setStyle}/>
        <AddToCart handleClick={props.handleClick} skus={style.skus}/>
        <ProductDesc handleClick={props.handleClick} productInfo={props.productInfo}/>
        <ProductFeat handleClick={props.handleClick} features={props.productInfo.features}/>
    </OverviewStyle>
  );
}

export default Overview;