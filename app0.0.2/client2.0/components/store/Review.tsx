import React from "react"
import styled from "styled-components"
import { useAuthState } from "../../context/authState/AuthProvider"
import { deleteReview } from "../../context/storeState/storeActions"

import { useStoreDispatch } from "../../context/storeState/StoreProvider"
import {
  above,
  below,
  formatRatingToStars,
  handleFlex,
} from "../../src/utils/helpers"
interface ReviewProps {
  review: Review
}

const StyledReview = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  ${handleFlex("column", "center", "center")};
  padding: 0.4em;
  width: 90%;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  margin: 1rem 0;
  position: relative;
  .delete {
    position: absolute;
    top: 0.4rem;
    left: 1rem;
    button {
      cursor: pointer;
      background: transparent;
      border: none;
      font-size: 1.8rem;
      transition: ${({ theme }) => theme.transition.quickTransition};
      border-radius: ${({ theme }) => theme.borderRadius};
      &:hover {
        box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
        background: rgb(251, 137, 7, 0.4);
      }
    }
  }
  .head {
    ${handleFlex("column", "center", "center")};
    padding: 0.2em;
    width: 100%;
    ${above.small`
      width: 75%;
      ${handleFlex("row", "space-evenly", "center")};
    `}
    ${below.small`
        padding: 2rem 0;
    `}
  }
  ${above.medium`
    width: 80%;
  `}
  .stars {
    position: absolute;
    top: -1.6rem;
    right: -0.4rem;
    font-size: 2em;
  }
`

const Review: React.FC<ReviewProps> = ({ review }) => {
  const { user, token } = useAuthState()
  const dispatch = useStoreDispatch()

  const isOwnerForComment = review.author.id === user?.id

  return (
    <StyledReview>
      {isOwnerForComment && token && (
        <div className="delete">
          <button
            type="button"
            onClick={() => deleteReview(token)(dispatch)(review._id)}>
            ╳
          </button>
        </div>
      )}
      <div className="head">
        <strong>
          Posted by {review.author.firstName} {review.author.lastName}{" "}
        </strong>
      </div>
      <div className="text">
        <p>{review.text}</p>
      </div>

      <div className="stars">
        <span>{formatRatingToStars(review.rating)}</span>
      </div>
    </StyledReview>
  )
}
export default Review
