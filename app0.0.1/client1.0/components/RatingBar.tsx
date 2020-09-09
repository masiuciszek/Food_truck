/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import styled from "styled-components";
import { handleFlex } from "./styles/Helpers";

interface Props {
  onStars: number[];
  onSelectedRate: number;
  onHandleSelectedRate: (star: number) => void;
}

const Stars = styled.div`
  ${handleFlex("row", "space-evenly", "center")}
`;
interface StarProps {
  star: number;
  selectedRate: number;
}

const Star = styled.div<StarProps>`
  cursor: pointer;
  background: ${({ theme, selectedRate, star }) =>
    star === selectedRate ? theme.colors.shadowOne : "none"};
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  ${({ theme, selectedRate, star }) =>
    star === selectedRate && theme.shadow.elevations[2]};
  transition: ${({ theme, selectedRate, star }) =>
    star === selectedRate && theme.transition.quickTransition};
`;

const RatingBar = ({
  onStars,
  onSelectedRate,
  onHandleSelectedRate,
}: Props) => {
  // here we will dispatch the rating to the reducer

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
      {onStars.map((star) => (
        <Star
          key={star}
          star={star}
          selectedRate={onSelectedRate}
          className="star"
          onClick={() => onHandleSelectedRate(star)}
        >
          {convertStar(star)}
        </Star>
      ))}
    </Stars>
  );
};
export default RatingBar;
