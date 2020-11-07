import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import StarItem from "./StarItem"
import { below, handleFlex } from "../../utils/helpers"
import { useToggle } from "../../hooks/useToggle"

const StyledStars = styled.section`
  ${handleFlex("row", "space-evenly", "center")};
  width: 50%;
  padding: 1em 0;
  margin: 0.4rem 0;
  ${below.small`
    width: 100%;
  `}
`
interface StarsProps {
  rating: number
  setRating: React.Dispatch<React.SetStateAction<number>>
}

const Stars = ({ rating, setRating }: StarsProps) => {
  const [stars, setStars] = useState([...Array(5).keys()])
  const [hover, setHover] = useState(() => 0)

  // TODO: Make this function cleaner
  const handleRating = (index: number) => {
    if (rating === 1 && rating && rating > index) {
      setRating(0)
    } else if (rating === 2 && rating && rating > index) {
      setRating(0)
    } else if (rating === 3 && rating && rating > index) {
      setRating(0)
    } else if (rating === 4 && rating && rating > index) {
      setRating(0)
    } else if (rating === 5 && rating && rating > index) {
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
