import React from "react";
import styled from "styled-components";

interface StarItemProps {
  rate: number;
}

const StyledStar = styled.div``;

const StarItem: React.FC<StarItemProps> = ({ rate }) => {
  return (
    <StyledStar>
      <p>{rate}</p>
    </StyledStar>
  );
};
export default StarItem;
