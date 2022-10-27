import React from 'react';
import styled from 'styled-components';
import StyleSelectorItem from './StyleSelectorItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const { useState, useRef } = React;

const StyleSelectorStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
`;

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
  overflowY: 'scroll'
}


const selectorItemContainerStyle = {
  width: '25%',
  height: `${selector_height}px`,
  position: 'relative',
}

const StyleSelector = ({ style, styles, setStyle }) => {
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
    //<StyleSelectorStyle>
    <>

      <div style={selectorStyle} widget='Overview' element-name='StyleSelector'>
        <div style={{
          fontSize: '16px',
          height:'10%',
       }}><b>STYLE ></b> {style.name && style.name.toUpperCase()}</div>
        {/* onClick={props.handleClick}> */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
          // overflowY: 'auto',
        }}>
          <div style={selectorContainerStyle} ref={styleRef} onScroll={handleStyleScroll}>
            {styles !== undefined &&
              styles.map((thisStyle, i) => (
                <div key={i + thisStyle} style={selectorItemContainerStyle}>
                  <StyleSelectorItem photo={thisStyle.photos[0].thumbnail_url} selected={thisStyle.name === style.name} handleClick={handleStyleClick} index={i} height={selector_height} />
                </div>
              ))}
          </div>
        </div>
        {styles !== undefined && scrollTop === 0 && styles.length > 8 &&
          <div style={{
            height: '10%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontSize: '13px',
            color: '#666'}}>
            Scroll for more styles
            <FontAwesomeIcon icon={faChevronDown}/>
          </div>
        }
      </div>
    </>
    //  </StyleSelectorStyle>
  )
}

export default StyleSelector;