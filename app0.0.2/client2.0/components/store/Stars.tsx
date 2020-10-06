import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Star from "./StarItem";
import { handleFlex } from "../../src/utils/helpers";

const StyledStars = styled.section`
  border: 2px solid red;
  ${handleFlex("row", "space-evenly", "center")};
  width: 85%;
  padding: 1em 0;
  margin: 0.4rem 0;
`;

const Stars = ({}) => {
  const [rating, setRating] = useState([...Array(5).keys()]);

  return (
    <StyledStars>
      {rating.map((rate) => (
        <Star key={uuidv4()} rate={rate} />
      ))}
    </StyledStars>
  );
};
export default Stars;
