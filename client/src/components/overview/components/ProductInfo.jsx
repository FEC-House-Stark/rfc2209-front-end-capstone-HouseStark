import React from 'react';
import styled from 'styled-components';
import Stars from 'react-stars-display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const ProductInfoStyle = styled.div`
  grid-column-start: 4;
`;

const prodInfoStyle = {
  'gridColumnStart': '4',
  height: '100%',
  width: 'clamp(230px, 100%, 355px)',
  position: 'relative',
}
const shareButtonStyle = {
  height: '25px',
  width: '30px',
  border: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  cursor: 'pointer',
}

const ProductInfo = (props) => {
  // console.log('Product Info', props.productInfo);
  const handleSocialClick = (e, site) => {
    e.preventDefault();
    console.log(`Sharing to ${site}!`);
  }

  return (
    //<ProductInfoStyle widget="Overview">
    <div style={prodInfoStyle} widget='Overview' element-name='ProductInfo' onClick={e => {
      //props.handleClick
    }}>
      {props.numReviews > 0 &&
        <div>
          <Stars
            stars={props.avgRating}
            size={15} //optional
            spacing={2} //optional
            fill='#4D6A6D' //optional
          />
          <a href="#ratings-reviews" style={{
            color: '#666',
            paddingLeft: '10px',
            fontSize: '15px'
          }}>Read all {props.numReviews} reviews.</a>
        </div>
      }
      <h3 className="product-category">{props.productInfo.category}</h3>
      <h1 className="product-name">{props.productInfo.name}</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30px'
      }}>
        <h4 style={{ fontWeight: 'normal' }} className="product-price">{props.style.sale_price ?
          <>
            <span style={{ color: 'red' }}>${props.style.sale_price}</span>
            &nbsp;
            <span style={{ textDecoration: 'line-through', color: '#666' }}>${props.style.original_price}</span>
          </>
          :
          <>${props.style.original_price}</>
        }</h4>
        <div style={{
          color: '#666',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={shareButtonStyle} onClick={e => handleSocialClick(e, 'Facebook')}>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div style={shareButtonStyle} onClick={e => handleSocialClick(e, 'Instagram')}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div style={shareButtonStyle} onClick={e => handleSocialClick(e, 'Twitter')}>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
    //</ProductInfoStyle>
  )
}

export default ProductInfo;