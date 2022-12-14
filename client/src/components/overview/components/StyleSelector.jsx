import React from 'react';
import styled from 'styled-components';
import StyleSelectorItem from './StyleSelectorItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const { useState, useRef } = React;

const selectorStyle = {
  'gridColumnStart': '4',
  'gridRowStart': '2',
  height: '100%',
  width: 'clamp(230px, 100%, 310px)',
};

const selector_height = 60;
const selectorContainerStyle = {
  display: 'flex',
  width: '90%',
  height: `${selector_height * 2}px`,//
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  overflowY: 'auto',
  overflowX: 'hidden'
}


const selectorItemContainerStyle = {
  width: '25%',
  height: `${selector_height}px`,
  position: 'relative',
}

const StyleSelector = ({ style, styles, setStyle, starkMode }) => {
  const styleRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0)

  const handleStyleClick = (e, i) => {
    e.preventDefault();
    setStyle(styles[i]);
  }

  const handleStyleScroll = (e) => {
    const thisScrollTop = styleRef.current.scrollTop;
    setScrollTop(thisScrollTop);
  }

  return (
    <>
      <div style={selectorStyle} widget='Overview' element-name='StyleSelector'>
        <div style={{
          height:'10%',
       }}><h4 style={{margin: '5px 0',}}><b>STYLE ></b> {style.name && style.name.toUpperCase()}</h4></div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
        }}>
          <div style={selectorContainerStyle} ref={styleRef} onScroll={handleStyleScroll}>
            {styles !== undefined &&
              styles.map((thisStyle, i) => (
                <div key={i + thisStyle} style={selectorItemContainerStyle}>
                  <StyleSelectorItem photo={thisStyle.photos[0].thumbnail_url} selected={thisStyle.name === style.name} handleClick={handleStyleClick} index={i} height={selector_height} starkMode={starkMode}/>
                </div>
              ))}
          </div>
        </div>
        {styles !== undefined && scrollTop < 5 && styles.length > 8 &&
          <div className="alert" style={{
            height: '10%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: `${starkMode ? 'white' : ''}`,
            }}>
            Scroll for more styles
            <FontAwesomeIcon icon={faChevronDown}/>
          </div>
        }
      </div>
    </>
  )
}

export default StyleSelector;