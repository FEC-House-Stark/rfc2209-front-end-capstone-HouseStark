import React from 'react';
import ProductInfo from './components/ProductInfo.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDesc from './components/ProductDesc.jsx';
import styled from 'styled-components';

const OverviewStyle = styled.div`
  border-bottom: 1pt solid #666;
  display: grid;
  grid-template-columns: 1fr 500px 300px 1fr;
  grid-template-rows: 100px 100px 100px 100px;

`;

const Overview = (props) => {

  return (
    <OverviewStyle>
        <ImageGallery handleClick={props.handleClick} />
        <ProductInfo handleClick={props.handleClick} productInfo={props.productInfo} avgRating={props.avgRating}/>
        <StyleSelector handleClick={props.handleClick} />
        <AddToCart handleClick={props.handleClick} />
        <ProductDesc handleClick={props.handleClick} />
    </OverviewStyle>
  );
}

export default Overview;