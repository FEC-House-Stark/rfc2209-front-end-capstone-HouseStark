import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const { useEffect, useState } = React;

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

const selectSizeStyle = {
  color: `${color}`,
  width: '65%',
  height: `${row_ht}`,
  border: '1pt solid #666',
  paddingLeft: '10px',
  fontSize,
  fontWeight,
}
const selectQtyStyle = {
  color: `${color}`,
  width: '30%',
  height: `${row_ht}`,
  border: '1pt solid #666',
  paddingLeft: '10px',
  fontSize,
  fontWeight,
}
const buttonStyle = {
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
  alignItems: 'center'
}
const formStyle = {
  width: '100%',
  height: '100%',
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

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSelectedSize(e.target.value);
  }
  const handleQtyChange = (e) => {
    e.preventDefault();
    setSelectedQty(e.target.value);
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

  useEffect(()=> {
    console.log('new style.skus', style.skus);
    setSelectedSize('');
    setSelectedQty('-');
    setQuantity([]);
    let sizesArr = []
    for (const key in style.skus) {
      if (style.skus[key].quantity > 0) {
        sizesArr.push(style.skus[key].size);
      }
    }
    setSizes(sizesArr);
  }, [style])

  const handleCartClick = (e) => {
    e.preventDefault();
    console.log(`Adding to cart! Style: ${style.name} Size: ${selectedSize} Qty: ${selectedQty}`);
  }

  return (
    <>
      {style.skus !== undefined &&
        <div widget='Overview' style={addCartStyle} element-name='AddToCart' onClick={e => {//handleClick(e);
        }}>
          <form style={formStyle}>
            <select value={selectedSize} style={selectSizeStyle} onChange={handleSizeChange}>
              <option disabled={true} value="">
                {sizes.length > 0 ? <span>SELECT SIZE</span> : <span>OUT OF STOCK</span>}
              </option>
              {sizes.length > 0 &&
                <>
                  {sizes.map((val, i) => (
                    <option key={val + i}>{val}</option>
                  ))}
                </>
              }
            </select>
            <select style={selectQtyStyle} value={selectedQty} onChange={handleQtyChange}>
            <option disabled={true} value="-">-</option>
              {quantity.length > 0 &&
                <>
                  {quantity.map((val, i) => (
                    <option key={val + i}>{val}</option>
                  ))}
                </>
              }
            </select>
            <button style={buttonStyle} onClick={handleCartClick}>ADD TO CART<FontAwesomeIcon icon={faCartShopping}/></button>
          </form>
        </div>
      }
    </>
  )
}

export default AddToCart;