import {useState, useEffect} from 'react';

const QuestionReport = ({handleReportClick, handleTrackingClick}) =>  {

  const [report, setReport] = useState(false);


  return (
    <div
    style={{textDecorationLine: 'underline', cursor:'pointer'}}
    widget='QandA'
    element-name='Question_Helpfulness'
    onClick={(e)=> {
      if(!report) {
        handleReportClick();
        handleTrackingClick(e);
        setReport(true);
      } else {
        handleTrackingClick(e);
      }
    }}
    >
      {!report
        ?'Report'
        :'Reported'
      }
  </div>
  )
}

export default QuestionReport;