import React from "react"
import styled from "styled-components"
import { formatRatingToStars, handleFlex } from "../../src/utils/helpers"

interface StarItemProps {
  rate: number
}

const StyledStar = styled.div`
  border: 2px solid red;
  padding: 0.5em;
  text-align: center;
  ${handleFlex("row", "center", "center")};
  input[type="radio"] {
    opacity: 0;
    width: 1em;
    height: 1em;
  }
  label {
    position: absolute;
  }
`

const StarItem: React.FC<StarItemProps> = ({ rate }) => {
  return <StyledStar></StyledStar>
}
export default StarItem

{
  /* <StyledStar>
<input type="radio" value={rate} name="rating" id={`stars${rate}`} />
<label htmlFor={`star${rate}`}>
  <span>{formatRatingToStars(rate)}</span>
</label>
</StyledStar> */
}
