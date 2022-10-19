import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerPhotos from './Answer_Photos.jsx';
import AnswerHelpfulness from './Answer_Helpfulness.jsx';
import AnswerReport from './Answer_Report.jsx';
import Moment from 'react-moment';

const AnswerView = ({answer,handleTrackingClick}) =>  {

  const answerStyle = {
    display: 'flex',
    flexDirection: 'row',
  }

  const childGap = {
    marginLeft:'15px',
  }

  const handleRequestClick = (endpoint,method) => {
    let config = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${answer.answer_id}/${endpoint}`,
      method: method,
      headers: {
        'Authorization': process.env.TOKEN,
      },
    }
    axios(config)
    .then((result)=> {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleHelpfulClick = () => {
    handleRequestClick('helpful','put');
  }

  const handleReportClick = () => {
    handleRequestClick('report','put');
  }

  //console.log(answer);

  return (
    <div >
      <div>
        {answer.body}
      </div>
      <AnswerPhotos photos={answer.photos}/>
      <div style={answerStyle}>
        <div>By {answer.answerer_name} |</div>
        <Moment
          style={childGap}
          format="MMMM,DD,YYYY">
            {answer.date}
        </Moment>
        <AnswerHelpfulness
          handleTrackingClick={handleTrackingClick}
          helpfulness={answer.helpfulness}
          handleHelpfulClick = {handleHelpfulClick}/>
        <AnswerReport
          handleTrackingClick={handleTrackingClick}
          handleReportClick={handleReportClick}/>
      </div>
    </div>
  )
}

export default AnswerView;