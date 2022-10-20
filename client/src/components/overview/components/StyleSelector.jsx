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
  width: '90%',
};

const selectorContainerStyle = {
  display: 'flex',
  width: '90%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
}

const selectorItemContainerStyle = {
  width: '25%',
  aspectRatio : '1 / 1',
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const StyleSelector = (props) => {
  const handleStyleClick = (e, i) => {
    e.preventDefault();
    console.log(`style ${i} click!`);
  }

  return (
    //<StyleSelectorStyle>
    <>

      <div style={selectorStyle} widget='Overview' element-name='StyleSelector'>
        <div>Style > {props.style.name}</div>
        {/* onClick={props.handleClick}> */}
        <div style={selectorContainerStyle}>
        {props.styles !== undefined &&
          props.styles.map((style, i) => (
            <div key={style + i}>
            <div style={selectorItemContainerStyle}>
            <StyleSelectorItem photo={style.photos[0].thumbnail_url} selected={style.name === props.style.name} handleClick={handleStyleClick} index={i}/>
            </div>
            </div>
          ))}
          </div>
      </div>
    </>
    //  </StyleSelectorStyle>
  )
}

export default StyleSelector;