import { useState } from "react";
// import './StarRating.css';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#48cae4",
    grey: "#adb5bd"

};



var StarRating = ({currentValue, setCurrentValue, productInfo}) => {
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const starMeaning = {
    1: 'Poor 👎',
    2: 'Fair 🙄',
    3: 'Average 😐',
    4: 'Good 😇',
    5: 'Great 🤩'
  }

  return (
    <div > {`Rate the ${productInfo.name}`}<div style={{color: 'red'}}>*</div>
      <div className='row_flex'>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
        <div >{starMeaning[currentValue]}</div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};




export default StarRating;