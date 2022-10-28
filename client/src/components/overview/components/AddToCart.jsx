import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
const { useEffect, useState, useRef } = React;

const AddToCartStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 3;
`;
const addCartStyle = {
  'gridColumnStart': '4',
  'gridRowStart': '3',
  height: '100%',
  width: '100%'
}
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

const AddToCart = ({ handleClick, style }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState('-');
  const [quantity, setQuantity] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [selectSizeHt, setSelectSizeHt] = useState(row_ht);
  const [noSizeCart, setNoSizeCart] = useState(false);
  const selectRef = useRef();

  const outOfStock = () => {
    return sizes.length === 0;
  }

  const favButtonStyle = {
    color: `${color}`,
    width: `${!outOfStock() ? '15%' : '50px'}`,
    height: `${row_ht}`,
    border: '1pt solid #666',
    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize,
    fontWeight,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  }

  const starStyle = {
    color: `${favorite ? 'gold' : '#666'}`,
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
      //selectRef.current.click();
    } else {
      console.log(`Adding to cart!
      Style: ${style.name} | Size: ${selectedSize} | Qty: ${selectedQty}`);
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

  useEffect(() => {
    if (selectedSize !== '') {
      for (const key in style.skus) {
        if (style.skus[key].size === selectedSize) {
          let quantityArr = [];
          for (let i = 1; i <= style.skus[key].quantity; i++) {
            quantityArr.push(i.toString());
            if (i === 15) break;
          }
          setQuantity(quantityArr);
          if (selectedQty === '-') setSelectedQty(1);
          break;
        }
      }

    }
  }, [selectedSize])

  useEffect(() => {
    setSelectedSize('');
    setSelectedQty('-');
    setQuantity([]);
    setFavorite(false);
    setNoSizeCart(false);
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
        <div widget='Overview' style={addCartStyle} element-name='AddToCart' onClick={e => {//handleClick(e);
        }}>
          <div className="alert" style={{height: '15%'}}>{noSizeCart && <>Please select a size.</>}</div>
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
            <button style={favButtonStyle} onClick={handleFavClick}><FontAwesomeIcon style={starStyle} icon={favorite ? faStar : faStarRegular} /></button>

          </form>
        </div>
      }
    </>
  )
}

export default AddToCart;