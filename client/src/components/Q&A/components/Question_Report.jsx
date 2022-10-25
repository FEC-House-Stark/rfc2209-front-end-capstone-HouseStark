import {useState, useEffect} from 'react';

const QuestionReport = ({handleReportClick}) =>  {

  return (
    <div
    style={{textDecorationLine: 'underline', cursor:'pointer'}}
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