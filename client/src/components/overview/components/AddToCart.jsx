import React from 'react';
import styled from 'styled-components';
import AddToCartModal from './AddToCartModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
const { useEffect, useState, useRef } = React;

const AddToCartStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 3;
`;

const row_ht = '40%';
const color = '#666';
const fontSize = '13px';
const fontWeight = "bold";

const selectQtyStyle = {
  color: `${color}`,
  width: '30%',
  height: `${row_ht}`,
  border: '1pt solid #666',
  paddingLeft: '10px',
  fontSize,
  fontWeight,
}
const cartButtonStyle = {
  color: `${color}`,
  width: '80%',
  height: `${row_ht}`,
  border: '1pt solid #666',
  paddingLeft: '15px',
  paddingRight: '15px',
  fontSize,
  fontWeight,
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer'
}
const formStyle = {
  width: '100%',
  height: '85%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  flexWrap: 'wrap'
}

const AddToCart = ({ handleClick, style, starkMode, product_name, cart, setCart, openModal, setOpenModal }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState('-');
  const [quantity, setQuantity] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [selectSizeHt, setSelectSizeHt] = useState(row_ht);
  const [noSizeCart, setNoSizeCart] = useState(false);
  const [sku_id, setSkuId] = useState(0);
  const selectRef = useRef();

  const addCartStyle = {
    'gridColumnStart': '4',
    'gridRowStart': '3',
    height: '100%',
    width: '100%',
  }

  const outOfStock = () => {
    return sizes.length === 0;
  }

  const favButtonStyle = {
    color: `${color}`,
    width: `100%`,
    height: '100%',
    border: '1pt solid #666',
    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize,
    fontWeight,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundImage: `url('https://media.giphy.com/media/nulVy4ZcnxKtq9YdEm/giphy.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    WebkitTextTillColor: 'transparent',
    WebkitBackgroundClip: 'text',

  }

  const starStyle = {
    color: `${favorite ? '#a0a083' : '#666'}`,
  };

  const selectSizeStyle = {
    color: `${color}`,
    width: '65%',
    height: `${selectSizeHt}`,
    border: '1pt solid #666',
    paddingLeft: '10px',
    fontSize,
    fontWeight,
  }

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSelectedSize(e.target.value);
    e.target.size = '0';
    setSelectSizeHt(row_ht);
    setNoSizeCart(false);
  }
  const handleQtyChange = (e) => {
    e.preventDefault();
    setSelectedQty(e.target.value);
  }

  const handleSizeFocus = (e) => {
    e.target.size = sizes.length;
    setSelectSizeHt(row_ht);
  }

  const handleCartClick = (e) => {
    e.preventDefault();
    if (selectedSize === '') {
      selectRef.current.focus();
      setNoSizeCart(true);
    } else {
      if (cart[sku_id] === undefined) {
        cart[sku_id] = {
          'qty': Number(selectedQty),
          'size': selectedSize,
          'photoUrl': style.photos[0].thumbnail_url,
          'style': style.name,
          'product_name': product_name,
        };
      } else {
        cart[sku_id].qty += Number(selectedQty);
      }
      console.log('cart:', cart);
      updateQuantity();
      let config = {
        url: '/cart',
        method: 'post',
        data: { sku_id },
      }
      // axios(config)
      //   .then((result) => {
      //     console.log(result);
      //     if (cart[sku_id] !== defined) cart[sku_id] = 1;
      //   })
      //   .then((err) => {
      //     console.log(err);
      //   })
      //setOpenModal(!openModal);
    }
  }

  const handleFavClick = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
  }

  const mouseClickEvents = ['mousedown'];
  const simulateMouseClick = (element) => {
    mouseClickEvents.forEach(mouseEventType =>
      element.dispatchEvent(
        new MouseEvent(mouseEventType, {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1
        })
      )
    );
  }

  const updateQuantity = () => {
    for (const sku in style.skus) {
      if (style.skus[sku].size === selectedSize) {
        let quantityArr = [];
        setSkuId(sku);
        let cartQty = 0;
        if (cart[sku] > 0) { cartQty = cart[sku] };
        for (let i = 1; i <= style.skus[sku].quantity - cartQty; i++) {
          quantityArr.push(i.toString());
          if (i === 15) break;
        }
        setQuantity(quantityArr);
        setSelectedQty(1);
        break;
      }
    }
  }

  useEffect(() => {
    if (selectedSize !== '') {
      updateQuantity();
    }
  }, [selectedSize])

  useEffect(() => {
    setSelectedSize('');
    setSelectedQty('-');
    setQuantity([]);
    setFavorite(false);
    setNoSizeCart(false);
    setSkuId(0);
    let sizesArr = []
    for (const key in style.skus) {
      if (style.skus[key].quantity > 0) {
        sizesArr.push(style.skus[key].size);
      }
    }
    setSizes(sizesArr);
  }, [style])

  return (
    <>
      {style.skus !== undefined &&
        <div widget='Overview' style={addCartStyle} element-name='AddToCart' onClick={e => {
        }}>
          <div className="alert" style={{
            height: '15%',
            color: `${starkMode ? 'white' : ''}`,
          }}>{noSizeCart && <>Please select a size.</>}</div>
          <form style={formStyle}>
            <select
              value={selectedSize}
              style={selectSizeStyle}
              onChange={handleSizeChange}
              onFocus={handleSizeFocus}
              onBlur={(e) => {
                e.target.size = '0';
                setSelectSizeHt(row_ht);
              }}
              disabled={outOfStock()}
              ref={selectRef}>
              <option disabled={true} value="">
                {!outOfStock() ? <>SELECT SIZE</> : <>OUT OF STOCK</>}
              </option>
              {!outOfStock() &&
                <>
                  {sizes.map((val, i) => (
                    <option key={val + i}>{val}</option>
                  ))}
                </>
              }
            </select>
            <select
              style={selectQtyStyle}
              value={selectedQty}
              onChange={handleQtyChange}
              disabled={outOfStock()}>
              <option disabled={true} value="-">-</option>
              {quantity.length > 0 &&
                <>
                  {quantity.map((val, i) => (
                    <option key={val + i}>{val}</option>
                  ))}
                </>
              }
            </select>
            {!outOfStock() &&
              <button style={cartButtonStyle} onClick={handleCartClick}>ADD TO CART<FontAwesomeIcon icon={faCartShopping} /></button>
            }
            <div style={{
              backgroundColor: '#FFF', width: `${!outOfStock() ? '15%' : '50px'}`,
              height: `${row_ht}`,
            }}>
              <button style={favButtonStyle} onClick={handleFavClick}>
                {starkMode ?
                  <>{!favorite ? <FontAwesomeIcon style={starStyle} icon={faStarRegular} /> :
                    <div style={{
                      color: 'transparent',
                      fontSize: '18px',
                    }}>&#9733;</div>}</>
                  : <FontAwesomeIcon style={starStyle} icon={favorite ? faStar : faStarRegular} />}</button>
            </div>

          </form>

        </div>
      }
    </>
  )
}

export default AddToCart;