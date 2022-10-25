import {useState, useEffect} from 'react';
import axios from 'axios';
import AnswerPhotos from './Answer_Photos.jsx';
import AnswerHelpfulness from './Answer_Helpfulness.jsx';
import AnswerReport from './Answer_Report.jsx';
import Moment from 'react-moment';
import styled from 'styled-components';
import {AnswerActionItemStyle, SellerFontWeight} from './Q&A_Styles.jsx';

const AnswerView = ({answer,handleTrackingClick}) =>  {

  const handleRequestClick = (endpoint,method) => {
    let config = {
      url: `/qa/answers/${answer.answer_id}/${endpoint}`,
      method: method,
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

  return (
    <div widget='QandA'
      element-name='Answer_View' >
      <div style={{fontSize:'medium'}}>
        {answer.body}
      </div>
      <AnswerPhotos
        handleTrackingClick={handleTrackingClick}
        photos={answer.photos}/>
      <AnswerActionItemStyle >
        <div >By </div>
        <div>
          {
            answer.answerer_name.toLowerCase()==='seller'
            ?  <div style={SellerFontWeight}>{answer.answerer_name}</div>
            :  <div>{answer.answerer_name}</div>
          }
        </div>
        <div>|</div>
        <Moment
          format="MMMM,DD,YYYY">
            {answer.date}
        </Moment>
        <div>|</div>
        <AnswerHelpfulness
          handleTrackingClick={handleTrackingClick}
          helpfulness={answer.helpfulness}
          handleHelpfulClick = {handleHelpfulClick}/>
        <div>|</div>
        <AnswerReport
          handleTrackingClick={handleTrackingClick}
          handleReportClick={handleReportClick}/>
      </AnswerActionItemStyle>
    </div>
  )
}

export default AnswerView;