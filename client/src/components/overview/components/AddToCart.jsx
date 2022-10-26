import React from 'react';
import styled from 'styled-components';
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

const selectSizeStyle = {
  width: '65%',
  height: '80%',
  border: '1pt solid #666',
}
const selectQtyStyle = {
  width: '30%',
  height: '80%',
  border: '1pt solid #666',
}
const formStyle = {
  width: '90%',
  height: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const AddToCart = ({ handleClick, skus }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);
  const [quantity, setQuantity] = useState([]);
  let parsedSkus = {};

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
      for (const key in skus) {
        if (skus[key].size === selectedSize) {
          let quantityArr = [];
          for (let i = 1; i <= skus[key].quantity; i++) {
            quantityArr.push(i);
          }
          setQuantity(quantityArr);
          break;
        }
      }

    }
  }, [selectedSize])

  useEffect(()=> {
    setSelectedSize('');
    setSelectedQty(1);
    setQuantity([]);
  }, [skus])



  return (
    //    <AddToCartStyle>
    <>
      {skus !== undefined &&
        <div widget='Overview' style={addCartStyle} element-name='AddToCart' onClick={e => {//handleClick(e);
        }}>
          <form style={formStyle}>
            <select value={selectedSize} style={selectSizeStyle} onChange={handleSizeChange}>
              <option disabled={true} value="">
                SELECT SIZE
              </option>
              {Object.keys(skus).length > 0 &&
                Object.keys(skus).map((key, i) => {
                  if (skus[key].quantity > 0) { return <option>{skus[key].size}</option> };
                })
              }
            </select>
            <select style={selectQtyStyle} value={selectedQty} onChange={handleQtyChange}>
              {quantity.length > 0 &&
                <>
                  {quantity.map((val) => (
                    <option>{val}</option>
                  ))}
                </>
              }
            </select>
          </form>
        </div>
      }
    </>
    //    </AddToCartStyle>
  )
}

export default AddToCart;