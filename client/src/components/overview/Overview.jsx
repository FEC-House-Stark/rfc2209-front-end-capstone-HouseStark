import React from 'react';
const {useEffect, useState, useRef} = React;
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
const body_min_width = 800;
const body_padding = 40;
const min_spacer_width = 10;
const min_info_width = body_min_width-body_padding-image_width-min_spacer_width;


const Overview = (props) => {
  const [price, setPrice] = useState();
  const [style, setStyle] = useState({});
  const [onSale, setOnSale] = useState(false);
  const [thumbnailRow, setThumbnailRow] = useState(false);
  const ref = useRef(null);

  const OverviewStyle = {
    display: 'grid',
    gridTemplateColumns: `1px ${image_width}px minmax(${min_spacer_width}px,75px) minmax(${min_info_width}px, 1fr) 1px`,
    gridTemplateRows: `${info_height}px ${style_height}px ${cart_height}px ${thumbnailRow ? 50 : 0}px 10px 200px`,
    padding: '15px 0px',
  };

  const getBodyWidth = ()=> {
    return ref.current.parentElement.offsetWidth;
  }


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
    <div style={OverviewStyle} ref={ref}>
        <ImageGallery handleClick={props.handleClick} photos={style.photos} image_width={image_width} image_height={image_height} getBodyWidth={getBodyWidth} setThumbnailRow={setThumbnailRow} product_id={props.product_id}/>
        <ProductInfo handleClick={props.handleClick} productInfo={props.productInfo} avgRating={props.avgRating} numReviews={props.numReviews} style={style}/>
        <StyleSelector handleClick={props.handleClick} styles={props.styles.results} style={style} setStyle={setStyle}/>
        <AddToCart handleClick={props.handleClick} skus={style.skus}/>
        <ProductDesc handleClick={props.handleClick} productInfo={props.productInfo}/>
        <ProductFeat handleClick={props.handleClick} features={props.productInfo.features}/>
    </div>
  );
}

export default Overview;