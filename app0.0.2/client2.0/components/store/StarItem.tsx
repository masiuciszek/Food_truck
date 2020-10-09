import React from "react"
import styled from "styled-components"
import { formatRatingToStars, handleFlex } from "../../src/utils/helpers"

interface StarItemProps {
  rating: number
  index: number
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: (index: number) => void
}

const StyledStar = styled.div`
  transition: 400ms all ease-in-out;
  cursor: pointer;
  span {
    font-size: 2.5em;
  }
  &:hover {
  }
`

const StarItem: React.FC<StarItemProps> = ({
  rating,
  index,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <StyledStar
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(index)}>
      {rating && rating >= index + 1 ? (
        <span className="star"> ⭐️ </span>
      ) : (
        <span className="star"> ✩ </span>
      )}
    </StyledStar>
  )
}
export default StarItem
