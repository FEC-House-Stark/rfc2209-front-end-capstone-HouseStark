import React from 'react';
import styled from 'styled-components';
import StyleSelectorItem from './StyleSelectorItem.jsx';

const StyleSelectorStyle = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
`;

const selectorStyle = {
  'gridColumnStart': '4',
  'gridRowStart': '2',
  height: '100%',
  width: '100%',
};

const selectorContainerStyle = {
  display: 'flex',
  width: 'clamp(220px, 90%, 280px)',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
}

const selector_height=60;

const selectorItemContainerStyle = {
  width: '25%',
  height: `${selector_height}px`,
  position: 'relative',
  // display: 'flex',
  // flexShrink: 0,
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center'
}

const StyleSelector = ({style, styles, setStyle}) => {
  const handleStyleClick = (e, i) => {
    e.preventDefault();
    setStyle(styles[i]);
  }

  return (
    //<StyleSelectorStyle>
    <>

      <div style={selectorStyle} widget='Overview' element-name='StyleSelector'>
        <div style={{fontSize: '16px'}}><b>STYLE ></b> {style.name && style.name.toUpperCase()}</div>
        {/* onClick={props.handleClick}> */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <div style={selectorContainerStyle}>
            {styles !== undefined &&
              styles.map((thisStyle, i) => (
                <div key={i + thisStyle} style={selectorItemContainerStyle}>
                  <StyleSelectorItem photo={thisStyle.photos[0].thumbnail_url} selected={thisStyle.name === style.name} handleClick={handleStyleClick} index={i} height={selector_height}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
    //  </StyleSelectorStyle>
  )
}

export default StyleSelector;