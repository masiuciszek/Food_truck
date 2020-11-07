import React from "react"
import Review from "./Review"
import styled from "styled-components"
import { above, handleFlex } from "../../utils/helpers"
interface PostedCommentsProps {
  reviews: Review[]
}

const StyledPostedCommentsBox = styled.ul`
  ${handleFlex("column", "center", "center")};
  margin: 1rem auto 0 auto;
  width: 100%;
  padding: 0;
  ${above.medium`
    max-width: 700px;
  `}
`

const PostedComments: React.FC<PostedCommentsProps> = ({ reviews }) => {
  return (
    <StyledPostedCommentsBox>
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </StyledPostedCommentsBox>
  )
}
export default PostedComments
