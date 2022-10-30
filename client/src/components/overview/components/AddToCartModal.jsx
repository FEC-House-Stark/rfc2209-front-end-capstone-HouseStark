import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import CartItem from './CartItem.jsx';

const frostyStyle = {
  overlay: {
    position: 'fixed',
    inset: '0px',
    backgroundColor: 'rgba(234,236,233,0.4)',
  },
  content: {
    top: '50%',
    left: '50%',
    backgroundColor: 'rgba(234,236,233,0.1)',
    backdropFilter: 'blur(7px)',
    boxShadow: '0 6px 35px rgba(0,0,0,0.65)',
    borderRadius: '25px',
    borderColor: 'rgba(255, 255, 255,0.8)',
    zIndex: '999',
    height: '50vh',
    width: '50vw',
    minWidth: '400px',
    minHeight: '400px',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
    padding: '25px',
  }
};

const CartItemsStyle = styled.div`
  width: 100%;
  height: 38vh;
  max-height: 510px;
  overflow-y: auto;
  padding-bottom: 10px;
  margin-top: 5px;
`;
const CartButtonStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalPrice = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const TotalPriceTag = styled.h3`
  padding-right: 5px;
`;

const AddToCartModal = ({
  cart,
  openModal,
  setOpenModal
}) => {


  const handleCartSubmit = (e) => {
    e.preventDefault();
    console.log('Purchased!', cart);
  }

  return (
    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      style={frostyStyle}
    >
      <div id='qanda-modal-close-button'>
        <div
          widget='QandA'
          element-name='Add_A_Question_Modal_Close'
          onClick={(e) => {
            setOpenModal(!openModal);
          }}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </div>

      <h3 id='qanda-modal-title' >Your Cart</h3>
      <CartItemsStyle>
        {Object.keys(cart).map((key, i) => {
          if (key !== 'totalPrice') {
            return <CartItem item={cart[key]} i={i} />
          }
        })}
      </CartItemsStyle>
      <CartButtonStyle>
        <TotalPrice><TotalPriceTag>Total Price:</TotalPriceTag> <h4>${cart.totalPrice}</h4></TotalPrice>
        <div
          className='qanda_button qanda_button_modal_resize'
          widget='QandA'
          element-name='Add_A_Question_Submit'
          onClick={(e) => {
            handleCartSubmit(e);
            setOpenModal(false);
          }}>Checkout
        </div>
      </CartButtonStyle>
    </Modal>
  )
}

export default AddToCartModal;