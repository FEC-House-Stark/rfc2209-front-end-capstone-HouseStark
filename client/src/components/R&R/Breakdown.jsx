import React, { useRef, useState, useEffect } from "react";
import Stars from 'react-stars-display';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
    // renderCharBar()
    // console.log(filterObj)
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
    // console.log('TEST', calcCharact)
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
        borderRadius: '0px',
        position: 'relative',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      },
      {
        right: '3px',
        position: 'absolute',
        fontSize: '13px',
        color: isHovering1 ? '#264653' : '#adb5bd'
      }],
      2: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering2 ? '#a2d2ff' : '#adb5bd',
        borderRadius: '0px',
        position: 'relative',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering2 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      },
      {
        right: '3px',
        position: 'absolute',
        fontSize: '13px',
        color: isHovering2 ? '#264653' : '#adb5bd'
      }],
      3: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering3 ? '#a2d2ff' : '#adb5bd',
        borderRadius: '0px',
        position: 'relative',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering3 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      },
      {
        right: '3px',
        position: 'absolute',
        fontSize: '13px',
        color: isHovering3 ? '#264653' : '#adb5bd'
      }],
      4: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering4 ? '#a2d2ff' : '#adb5bd',
        borderRadius: '0px',
        position: 'relative',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering4 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      },
      {
        right: '3px',
        position: 'absolute',
        fontSize: '13px',
        color: isHovering4 ? '#264653' : '#adb5bd'
      }],
      5: [{
        height: '15px',
        width: `${415}px`,
        backgroundColor: isHovering5 ? '#a2d2ff' : '#adb5bd',
        borderRadius: '0px',
        position: 'relative',
      }, {
        height: '15px',
        width: `${415 * percentageCalc(star)}px`,
        backgroundColor: isHovering5 ? '#457b9d' : '#4D6A6D',
        borderRadius: '1px',
        position: 'absolute',
      },
      {
        right: '3px',
        position: 'absolute',
        fontSize: '13px',
        color: isHovering5 ? '#264653' : '#adb5bd'
      }]
    }



    let backgroundBarStyle = {
      height: '15px',
      width: `${415}px`,
      backgroundColor: isHovering5 ? '#a2d2ff' : '#adb5bd',
      borderRadius: '0px',
      position: 'relative',

    }

    let barStyle = {
      height: '15px',
      width: `${415 * percentageCalc(star)}px`,
      backgroundColor: isHovering5 ? '#457b9d' : '#4D6A6D',
      borderRadius: '1px',
      position: 'absolute',
    }

    let numberStyle = {
      right: '0px',
      position: 'absolute',
      fontSize: '13px',
      color: isHovering1 ? '#264653' : '#adb5bd'
    }


    return (
      <div style={masterObj[star][0]}><div style={masterObj[star][1]}></div><div style={masterObj[star][2]}>{starCountObj[star]}</div></div>
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

  var renderFilterList = () => {
    // calcCharact.forEach((item) => {
    //   let temp = Number(item.split(':')[1])
    //   console.log(temp)
    // })

    // let num = e.curr❎entTarget.id;
    let reconfig = {
      1: handleBar1Click,
      2: handleBar2Click,
      3: handleBar3Click,
      4: handleBar4Click,
      5: handleBar5Click,
    }
    if (filterObj.length) {
      return (
        filterObj.map((item, i) => {
          return (
            <div key={i} id={item} onClick={(e) => { reconfig[item](e) }} style={{ margin: '5px', border: '1px solid black', fontSize: '14px', borderRadius: '3px', cursor: 'pointer' }}>
              {`${item} star ❌`}
              {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
            </div>
          )
        })
      )
    } else {
      return null;
    }
  }

  var renderCharBar = () => {
    let barStyle = {
      height: '15px',
      width: `${310}px`,
      backgroundColor: '#adb5bd',
      borderRadius: '0px',
      position: 'relative',
    }


    let lineStyle1 = {
      position: 'absolute',
      borderLeft: '6px solid white',
      height: '20px',
      left: '103px'
    }

    let lineStyle2 = {
      position: 'absolute',
      borderLeft: '6px solid white',
      height: '20px',
      right: '103px'
    }

    let result = []

    calcCharact.forEach((item) => {
      let value = Number(item.split(':')[1])
      let char = item.split(':')[0]
      let temp = []
      temp.push(char)
      temp.push(value)
      // console.log(value / 5)
      result.push(temp)
    })

  let charStorage = {
    Fit: ['Too Small', 'Too Big'],
    Length: ['Runs Short', 'Runs Long'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Size: ['Too Small', 'Too Big'],
    Width: ['Too Narrow', 'Too Wide'],
  }

    return (
      <div>
        {result.map((item, i) => {
          let percent = item[1] / 5
          // console.log(item[0])
          let triangleStyle = {
            width: '0px',
            height: '0px',
            borderTop: '8px solid black',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            position: 'absolute',
            right: `${percent * 310}px`
          }

          return (
            <div key={i}>
            <div>{item[0]}</div>
            <div style={barStyle}><div style={lineStyle2}></div><div style={lineStyle1}></div><div style={triangleStyle}></div></div>
            <div className='charContainer' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{fontSize: '13px'}}>{`${charStorage[item[0]][0]}`}</div>
            <div style={{fontSize: '13px'}}>{`${charStorage[item[0]][1]}`}</div>
            </div>
            </div>
          )
        })}
      </div>
    )

  }

  return (
    <>
      <h2 id='ratings-reviews'>Ratings & Reviews</h2>
      <div className='ratingContainer' style={{display: 'flex'}}>
      <h1 className='numberRating' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {avgRating.toFixed(1)}
      </h1>
      <div>
        <Stars
          stars={avgRating}
          size={20} //optional
          spacing={2} //optional
          fill='#4D6A6D' //optional
        />
      </div>
      </div>
      <div>
        {`${recommendPercentageCalculator()}% of reviews recommend this product`}
        <div style={{color: 'white', fontSize: '8px'}}>break</div>
      </div>
      <div style={containerStyle1}>
        <li id={5} onClick={(e) => { handleBar5Click(e) }}
          onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}
          style={containerStyle2}>{`5 Stars`}{barRender(5)}</li>
          <div style={{color: 'white'}}>break</div>
        <li id={4}
          onClick={(e) => { handleBar4Click(e) }}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
          style={containerStyle2}>{`4 Stars`}{barRender(4)}</li>
          <div style={{color: 'white'}}>break</div>
        <li id={3}
          onClick={(e) => { handleBar3Click(e) }}
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
          style={containerStyle2}>{`3 Stars`}{barRender(3)}</li>
          <div style={{color: 'white'}}>break</div>
        <li id={2}
          onClick={(e) => { handleBar2Click(e) }}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          style={containerStyle2}>{`2 Stars`}{barRender(2)}</li>
          <div style={{color: 'white'}}>break</div>
        <li id={1}
          onClick={(e) => { handleBar1Click(e) }}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          style={containerStyle2}>{`1 Stars`}{barRender(1)}</li>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {renderFilterList()}</div>
        {renderCharBar()}
      </div>
    </>
  );
};

export default Breakdown;