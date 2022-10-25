import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
const { useEffect, useState, useRef, useLayoutEffect } = React;

const zoomStyle = {
  content: {
    top: '50%',
    left: '50%',
    height: '100vh',
    width: '100vw',
    minWidth: '800px',
    border: '1pt solid green',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
  },
}


const ZoomView = ({ photo, modalOpen, toggleZoomModal }) => {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  })
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    image_w: 0,
    image_h: 0,
    view_w: 0,
    view_h: 0
  });
  const ref = useRef(null);
  const view_ref = useRef(null);

  const zoomViewStyle = {
    cursor: 'zoom-out',
    position: 'relative',
    display: 'inline-block',
    height: '250vh',
    transform: `translateX(${(-translate.x).toString()}px) translateY(${(-translate.y).toString()}px)`,
    zIndex: '0'
  }

  const handleMouseMove = e => {
    let rect = e.target.getBoundingClientRect();
    let x = Math.max(e.clientX - rect.left, 0);
    let y = Math.max(e.clientY - rect.top - translate.y, 0);

    //if (coords.image_h === 0) {
    let image_w = ref.current.clientWidth;
    let image_h = ref.current.clientHeight;
    let view_w = view_ref.current.clientWidth;
    let view_h = view_ref.current.clientHeight;
    //   }

    // console.log(`x: ${x} y:${y}`);
    setCoords({
      x, //e.clientX - e.target.offsetLeft - 73,
      y, //e.clientY - e.target.offsetTop - 39,
      image_w,
      image_h,
      view_w,
      view_h
    });
  };

  useEffect(() => {
    if (coords.image_w > 0) {
      let x_diff = (coords.image_w - coords.view_w);
      let x = 0;
      if (coords.image_w > coords.view_w) {
        x = x_diff * (coords.x / coords.image_w);
        x -= x_diff / 2;
      } else {
        x = Math.max(x_diff * (coords.x / coords.view_w), 0);
      }
      let y_diff = (coords.image_h - coords.view_h);
      let y = Math.max(y_diff * (coords.y / coords.view_h), 0);
      setTranslate({ x, y });
    }
  }, [coords])

  return (
    <Modal
      isOpen={modalOpen}
      style={zoomStyle}
      ariaHideApp={false}
    >
      <div
        onMouseMove={handleMouseMove}
        style={{
          overflow: 'hidden',
          height: '100vh',
          width: `${coords.image_w < coords.view_w ? coords.image_w : '100vw'}`,
          display: 'flex',
          justifyContent: 'center'
        }}
        ref={view_ref}
      >
        <div
          style={zoomViewStyle}
          onClick={e => {
            setTranslate({ x: 0, y: 0 });
            toggleZoomModal(e);
          }}
          ref={ref}>
          <img src={photo} style={{ height: '100%' }} />
        </div>
      </div>
    </Modal >
  )
}

export default ZoomView;