import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import StarItem from "./StarItem"
import { below, handleFlex } from "../../src/utils/helpers"

const StyledStars = styled.section`
  border: 2px solid red;
  ${handleFlex("row", "space-evenly", "center")};
  width: 50%;
  padding: 1em 0;
  margin: 0.4rem 0;
  ${below.small`
    width: 100%;
  `}
`

const Stars = ({}) => {
  // const [stars, setStars] = React.useState(
  //   Array.from({ length: 5 }, (_, i) => i + 1)
  // )
  const [stars, setStars] = React.useState([...Array(5).keys()])
  const [rating, setRating] = React.useState(() => 0)
  const [hover, setHover] = React.useState(() => 0)

  const handleRating = (index: number) => {
    if (rating === 1 && rating && rating > index) {
      setRating(0)
    } else {
      setRating(index + 1)
    }
  }

  return (
    <StyledStars>
      {stars.map((rate, index) => (
        <StarItem
          key={uuidv4()}
          rating={hover || rating}
          index={index}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
          // onClick={() => setRating(index + 1)}
          onClick={handleRating}
        />
      ))}
    </StyledStars>
  )
}
export default Stars
