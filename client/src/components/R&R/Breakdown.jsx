import React, { useRef, useState, useEffect } from "react";


const Breakdown = ({ avgRating, fullReviewList, numReviews, characteristics }) => {
  const [starCountObj, setStarCountObj] = useState({});
  const [calcCharact, setCalcCharact] = useState([]);
  const [sum, setSum] = useState(0);

  var recommendPercentageCalculator = () => {
    let count = 0;
    for (let i = 0; i < fullReviewList.length; i++) {
      if (fullReviewList[i].recommend === true) {
        count += 1
      }
    }
    return (count / numReviews * 100).toFixed(0)
  }

  useEffect(() => {
    characteristicsCalc()
    setStarCountObj(starCounter())
  }, [fullReviewList])

  var starCounter = () => {
    let countObj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }

    let total = 0;
    let percentange;

    for (let i = 0; i < fullReviewList.length; i++) {
      countObj[fullReviewList[i].rating] += 1
      total += 1
    }
    // console.log('TEST', countObj)
    setSum(total)
    return countObj
  }

  var characteristicsCalc = () => {
    // console.log('TEST', characteristics)
    let result = [];
    for (var key in characteristics) {
      result.push(`${key}: ${characteristics[key].value.slice(0, 3)}`)
    }
    setCalcCharact(result)
    // console.log(result)
  }

  var percentageCalc = (star) => {

    let percentange = starCountObj[star] / sum
    return percentange
  }

  var barRender = (star) => {

    // console.log(percentageCalc(4))
    // console.log(starCount * 50)
    let backgroundBarStyle = {
      height: '15px',
      width: `${415}px`,
      backgroundColor: '#adb5bd',
      border: '1px solid lightgrey',
      borderRadius: '0px',
      boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.4)',
      position: 'relative'
    }

    let barStyle = {
      height: '15px',
      width: `${415 * percentageCalc(star)}px`,
      backgroundColor: '#4D6A6D',
      border: '1px solid lightgrey',
      borderRadius: '6px',
      position: 'absolute',
    }


    return (
      <div style={backgroundBarStyle}><div style={barStyle}></div></div>
    )
  }

  let containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }
  return (
    <>
      <h2>Ratings & Reviews</h2>
      <h1 className='numberRating'>
        {avgRating}
      </h1>
      <div>
        {`${recommendPercentageCalculator()}% of reviews recommend this product`}
      </div>
      <div>
        <li style={containerStyle}>{`5 Stars`}{barRender(5)}</li>
        <li style={containerStyle}>{`4 Stars`}{barRender(4)}</li>
        <li style={containerStyle}>{`3 Stars`}{barRender(3)}</li>
        <li style={containerStyle}>{`2 Stars`}{barRender(2)}</li>
        <li style={containerStyle}>{`1 Stars`}{barRender(1)}</li>
        {calcCharact.map((item, i) => {
          return (
            <li key={i}>
              {item}
            </li>
          )
        })}
      </div>
    </>
  );
};

export default Breakdown;