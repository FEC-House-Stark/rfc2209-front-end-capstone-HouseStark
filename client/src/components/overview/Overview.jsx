import React from 'react';
import ProductInfo from './components/ProductInfo.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDesc from './components/ProductDesc.jsx';

const Overview = (props) =>  {

  return (
    <>
    <ImageGallery handleClick={props.handleClick}/>
    <ProductInfo handleClick={props.handleClick}/>
    <StyleSelector handleClick={props.handleClick}/>
    <AddToCart handleClick={props.handleClick}/>
    <ProductDesc handleClick={props.handleClick}/>
    </>
  )
}

export default Overview;