import React from 'react';

const Overview = (props) =>  {

  return (
    <div widget='Overview' element-name='overviewelement' id='somethingrandom'  onClick={(e)=> {

      props.handleClick(e);
    }}>Overview</div>
  )
}

export default Overview;