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
  height: '100%',
  aspectRatio: '1/1',
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
            paddingLeft: '10px',
            color: `${props.starkMode ? 'white' : ''}`,
          }} className="link">Read all {props.numReviews} reviews</a>
        </div>
      }
      <h4 className="product-category">{props.productInfo.category && props.productInfo.category.toUpperCase()}</h4>

      {props.starkMode ? <div style={{
        backgroundImage: `url('https://media.giphy.com/media/H4cIpNCIW22FWLD4hk/giphy.gif')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        overflow: 'show',
        zIndex: '0',
        padding: '30px 0',
        margin: '-30px 0',
        transform: 'scaleX(-1)'
      }}>
        <div style={{ width: '100%', transform: 'scaleX(-1)', }}>
          <h1 className="product-name" style={{
            margin: '5px 0 20px',
          }}>{props.productInfo.name}</h1>
        </div>
      </div>
    :   <h1 className="product-name" style={{
      marginBottom: '20px',
    }}>{props.productInfo.name}</h1>
    }
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
            <span style={{ textDecoration: 'line-through' }}>${props.style.original_price}</span>
          </>
          :
          <>${props.style.original_price}</>
        }</h4>
        <div style={{
          color: `${props.starkMode ? 'white' : '#666'}`,
          display: 'flex',
          justifyContent: 'center',
          height: '25px',
          width: '90px',
        }}>

          <div style={shareButtonStyle} onClick={e => handleSocialClick(e, 'Facebook')}>
            {props.starkMode ? <img style={{ width: '110%', height: '110%' }} src="https://media.giphy.com/media/GjkCs56IPk8pvh1ncs/giphy.gif" /> : <FontAwesomeIcon icon={faFacebook} />}
          </div>
          <div style={shareButtonStyle} onClick={e => handleSocialClick(e, 'Instagram')}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div style={shareButtonStyle} onClick={e => handleSocialClick(e, 'Twitter')}>
            {props.starkMode ? <img style={{ width: '150%', height: '150%' }} src="https://media.giphy.com/media/lnJm6Fd6mIKkORh5yT/giphy.gif" /> : <FontAwesomeIcon icon={faTwitter} />}
          </div>
        </div>
      </div>
    </div>
    //</ProductInfoStyle>
  )
}

export default ProductInfo;