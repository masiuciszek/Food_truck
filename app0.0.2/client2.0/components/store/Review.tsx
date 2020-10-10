import React from "react"
import styled from "styled-components"
import { above, formatRatingToStars, handleFlex } from "../../src/utils/helpers"
interface ReviewProps {
  review: Review
}

const StyledReview = styled.li`
  border: 2px solid blue;
  ${handleFlex("column", "center", "center")};
  padding: 1em;
  width: 90%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  .head {
    ${handleFlex("column", "center", "center")};
    padding: 0.2em;
    width: 100%;
    ${above.small`
      width: 75%;
      ${handleFlex("row", "space-evenly", "center")};
    `}
  }
  ${above.medium`
    width: 80%;
  `}
`

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <StyledReview>
      <div className="head">
        <strong>
          Posted by {review.author.firstName} {review.author.lastName}{" "}
        </strong>
        <p>{review.text}</p>
      </div>

      <div className="stars">
        <span>{formatRatingToStars(review.rating)}</span>
      </div>
    </StyledReview>
  )
}
export default Review
