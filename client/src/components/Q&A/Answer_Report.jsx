import {useState, useEffect} from 'react';

const AnswerReport = ({handleReportClick,handleTrackingClick}) =>  {

  return (
    <div
    style={{marginLeft:'10px',marginRight:'10px'}}
    widget='QandA'
    element-name='Answer_Helpfulness'
    onClick={(e)=> {
      handleReportClick();
      handleTrackingClick(e);
    }}
    >
      Report
  </div>
  )
}

export default AnswerReport;