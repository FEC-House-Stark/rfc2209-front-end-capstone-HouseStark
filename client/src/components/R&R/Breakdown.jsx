import React, { useRef, useState, useEffect } from "react";


const Breakdown = ({ avgRating, fullReviewList, numReviews, characteristics, filterObj, setFilterObj }) => {
  const [starCountObj, setStarCountObj] = useState({});
  const [calcCharact, setCalcCharact] = useState([]);
  const [sum, setSum] = useState(0);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);


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

    let masterObj = {
      1: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering1 ? '#a2d2ff' : '#adb5bd',
        border: '1px solid lightgrey',
        borderRadius: '0px',
        position: 'relative',
        boxShadow: isHovering1 ? '0 0 15px 1px rgba(0, 0, 0, 0.4)' : '',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering1 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      }],
      2: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering2 ? '#a2d2ff' : '#adb5bd',
        border: '1px solid lightgrey',
        borderRadius: '0px',
        position: 'relative',
        boxShadow: isHovering2 ? '0 0 15px 1px rgba(0, 0, 0, 0.4)' : '',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering2 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      }],
      3: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering3 ? '#a2d2ff' : '#adb5bd',
        border: '1px solid lightgrey',
        borderRadius: '0px',
        position: 'relative',
        boxShadow: isHovering3 ? '0 0 15px 1px rgba(0, 0, 0, 0.4)' : '',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering3 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      }],
      4: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering4 ? '#a2d2ff' : '#adb5bd',
        border: '1px solid lightgrey',
        borderRadius: '0px',
        position: 'relative',
        boxShadow: isHovering4 ? '0 0 15px 1px rgba(0, 0, 0, 0.4)' : '',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering4 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      }],
      5: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering5 ? '#a2d2ff' : '#adb5bd',
        border: '1px solid lightgrey',
        borderRadius: '0px',
        position: 'relative',
        boxShadow: isHovering5 ? '0 0 15px 1px rgba(0, 0, 0, 0.4)' : '',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering5 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      }]
    }



    let backgroundBarStyle = {
      height: '15px',
      width: `${415}px`,
      backgroundColor: isHovering5 ? '#a2d2ff' : '#adb5bd',
      border: '1px solid lightgrey',
      borderRadius: '0px',
      position: 'relative',
      boxShadow: isHovering5 ? '0 0 15px 1px rgba(0, 0, 0, 0.4)' : '',

    }

    let barStyle = {
      height: '15px',
      width: `${415 * percentageCalc(star)}px`,
      backgroundColor: isHovering5 ? '#457b9d' : '#4D6A6D',
      borderRadius: '1px',
      position: 'absolute',
    }


    return (
      <div style={masterObj[star][0]}><div style={masterObj[star][1]}></div></div>
    )
  }

  let containerStyle1 = {
    display: 'flex',
    flexDirection: 'column',
  }

  let containerStyle2 = {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    gap: '5px'
  }

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovering4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovering4(false);
  };

  const handleMouseEnter5 = () => {
    setIsHovering5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovering5(false);
  };

  const handleBar5Click = (e) => {
    // console.log(e.currentTarget.id)
    let key = e.currentTarget.id.toString();
    if (filterObj.indexOf(key) < 0) {
      setFilterObj(current => [...current, key]);
    } else {
      setFilterObj(current =>
        current.filter(element => {
          return element !== key;
        }),
      );
    }
  }

  const handleBar4Click = (e) => {
    let key = e.currentTarget.id.toString();
    if (filterObj.indexOf(key) < 0) {
      setFilterObj(current => [...current, key]);
    } else {
      setFilterObj(current =>
        current.filter(element => {
          return element !== key;
        }),
      );
    }
  }

  const handleBar3Click = (e) => {
    let key = e.currentTarget.id.toString();
    if (filterObj.indexOf(key) < 0) {
      setFilterObj(current => [...current, key]);
    } else {
      setFilterObj(current =>
        current.filter(element => {
          return element !== key;
        }),
      );
    }
  }

  const handleBar2Click = (e) => {
    let key = e.currentTarget.id.toString();
    if (filterObj.indexOf(key) < 0) {
      setFilterObj(current => [...current, key]);
    } else {
      setFilterObj(current =>
        current.filter(element => {
          return element !== key;
        }),
      );
    }
  }

  const handleBar1Click = (e) => {
    let key = e.currentTarget.id.toString();
    if (filterObj.indexOf(key) < 0) {
      setFilterObj(current => [...current, key]);
    } else {
      setFilterObj(current =>
        current.filter(element => {
          return element !== key;
        }),
      );
    }
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
      <div style={containerStyle1}>
        <li id={5} onClick={(e) => { handleBar5Click(e) }}
          onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}
          style={containerStyle2}>{`5 Stars`}{barRender(5)}{starCountObj[5]}</li>
        <li id={4}
          onClick={(e) => { handleBar4Click(e) }}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
          style={containerStyle2}>{`4 Stars`}{barRender(4)}{starCountObj[4]}</li>
        <li id={3}
          onClick={(e) => { handleBar3Click(e) }}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
          style={containerStyle2}>{`3 Stars`}{barRender(3)}{starCountObj[3]}</li>
        <li id={2}
          onClick={(e) => { handleBar2Click(e) }}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          style={containerStyle2}>{`2 Stars`}{barRender(2)}{starCountObj[2]}</li>
        <li id={1}
          onClick={(e) => { handleBar1Click(e) }}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          style={containerStyle2}>{`1 Stars`}{barRender(1)}{starCountObj[1]}</li>
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