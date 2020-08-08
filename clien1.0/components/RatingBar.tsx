import * as React from "react";
import styled from "styled-components";
import { handleFlex } from "./styles/Helpers";
interface Props {}

const Stars = styled.div`
  ${handleFlex("row", "space-evenly", "center")}
`;

const RatingBar: React.FC<Props> = () => {
  const [stars, setStars] = React.useState(
    Array.from(Array(5), (_, i) => i + 1),
  );

  const convertStar = (key: number) => {
    switch (key) {
      case 1:
        return "⭐️";
      case 2:
        return "⭐️⭐️";
      case 3:
        return "⭐️⭐️⭐️";
      case 4:
        return "⭐️⭐️⭐️⭐️";
      case 5:
        return "⭐️⭐️⭐️⭐️⭐️";
      default:
        return "";
    }
  };

  return (
    <Stars>
      {stars.map((star) => (
        <div key={star}> {convertStar(star)} </div>
      ))}
    </Stars>
  );
};
export default RatingBar;
