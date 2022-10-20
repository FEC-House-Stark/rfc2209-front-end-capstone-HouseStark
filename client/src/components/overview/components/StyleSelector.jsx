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
  display: 'flex',
}

const StyleSelector = (props) => {
  const handleStyleClick = (e, i) => {
    e.preventDefault();
    console.log(`style ${i} click!`);
  }

  return (
    //<StyleSelectorStyle>
    <>
      <div>Style > {props.style.name}</div><br />
      <div style={selectorStyle} widget='Overview' element-name='StyleSelector' onClick={props.handleClick}>

        {props.styles !== undefined &&
          props.styles.map((style, i) => (
            <StyleSelectorItem key={style + i} photo={style.photos[0].thumbnail_url} selected={style.name === props.style.name} handleClick={handleStyleClick} index={i}/>
          ))}
      </div>
    </>
    //  </StyleSelectorStyle>
  )
}

export default StyleSelector;