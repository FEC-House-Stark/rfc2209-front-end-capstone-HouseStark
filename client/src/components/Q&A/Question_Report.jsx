import {useState, useEffect} from 'react';

const QuestionReport = ({handleReportClick}) =>  {

  return (
    <div
    style={{marginLeft:'10px',marginRight:'10px'}}
    widget='QandA'
    element-name='Question_Helpfulness'
    onClick={(e)=> {
      handleReportClick();
    }}
    >
      Report
  </div>
  )
}

export default QuestionReport;