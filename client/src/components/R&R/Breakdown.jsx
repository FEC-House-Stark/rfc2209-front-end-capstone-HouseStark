import React, { useRef, useState, useEffect } from "react";


const Breakdown = ({avgRating, fullReviewList, numReviews, characteristics}) => {
  const [starCountObj, setStarCountObj] = useState({});
  const [calcCharact, setCalcCharact] = useState([]);

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

    for (let i = 0; i < fullReviewList.length; i++) {
      countObj[fullReviewList[i].rating] += 1
    }
    // console.log('TEST', countObj)
    return countObj
  }

  var characteristicsCalc = () => {
    // console.log('TEST', characteristics)
    let result = [];
    for (var key in characteristics) {
      result.push(`${key}: ${characteristics[key].value.slice(0, 3)}`)
    }
    setCalcCharact(result)
    console.log(result)
  }

  var barRender = (starCount) => {
    let barStyle = {
      height: '15px',
      width: `${starCount * 50}px`,
      backgroundColor: '#4D6A6D',
      border: '1px solid lightgrey',
      borderRadius: '6px',
      boxShadow: '0 0 15px 1px rgba(0, 0, 0, 0.4)'
    }
    return (
      <div style={barStyle}></div>
    )
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
      <li>{`5 Stars`}{barRender(starCountObj[5])}</li>
      <li>{`4 Stars`}{barRender(starCountObj[4])}</li>
      <li>{`3 Stars`}{barRender(starCountObj[3])}</li>
      <li>{`2 Stars`}{barRender(starCountObj[2])}</li>
      <li>{`1 Stars`}{barRender(starCountObj[1])}</li>
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