import React from 'react';
import styled from 'styled-components';
import Stars from 'react-stars-display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share';
import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
  const handleSocialClick = (e, site) => {
    e.preventDefault();
    console.log(`Sharing to ${site}!`);
  }

  const shareUrl = 'http://ec2-34-201-145-9.compute-1.amazonaws.com:1128/';
  const shareDesc = `Check out these ${props.productInfo.name}'s from HOUSE STARK.`;

  return (
    <div style={prodInfoStyle} widget='Overview' element-name='ProductInfo' onClick={e => {
    }}>
      {props.numReviews > 0 &&
        <div>
          <Stars
            stars={props.avgRating}
            size={15}
            spacing={2}
            fill='#4D6A6D'
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
        : <h1 className="product-name" style={{
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
            <FacebookShareButton
              url={`${shareUrl}`}
              quote={`Check out these ${props.productInfo.name}'s from HOUSE STARK.`}
              hashtag={`#${props.productInfo.category}`}
            >
              {props.starkMode ? <img style={{ width: '150%', height: '150%' }} src="https://media1.giphy.com/media/SKFsUhe9jUwrRtNPlq/giphy.webp?cid=790b7611hr1rqyy7bkk0ttrgm5fv3ewcb6cxlq6xpo9eps7i&rid=giphy.webp&ct=s" /> : <FontAwesomeIcon icon={faFacebook} />}
            </FacebookShareButton>
          </div>
          <TwitterShareButton
            url={`${shareUrl}`}
            title={shareDesc}
            hashtags={[`${props.productInfo.category}`, `${props.style.name}`]}
          >
            <div style={shareButtonStyle} onClick={e => handleSocialClick(e, 'Twitter')}>
              {props.starkMode ? <img style={{ width: '200%', height: '200%', marginLeft: '10px' }} src="https://media2.giphy.com/media/e6YbWDajUKSzebFVuB/giphy.webp?cid=790b7611ekx776iyi6kpc8hq9z22zqn4rb8he9a42klo4qb5&rid=giphy.webp&ct=s"/> : <FontAwesomeIcon icon={faTwitter} />}
            </div>
          </TwitterShareButton>
          <PinterestShareButton
            url={`${shareUrl}`}
            media={`${props.style.photos !== undefined && props.style.photos[0].thumbnail_url}`}
            description={shareDesc}
          >
            <div style={shareButtonStyle} onClick={e => handleSocialClick(e, 'Pinterest')}>
              {props.starkMode ? <img style={{ width: '100%', height: '100%', marginLeft: '10px' }} src="https://media.giphy.com/media/LoO7ls7FboYXwwcuC3/giphy.gif" /> : <FontAwesomeIcon icon={faPinterest} />}
            </div>
          </PinterestShareButton>
        </div>
      </div>
    </div >
  )
}

export default ProductInfo;