import {useState, useEffect} from 'react';

const AnswerReport = ({handleReportClick,handleTrackingClick}) =>  {

  return (
    <div
    style={{textDecorationLine: 'underline',cursor:'pointer'}}
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