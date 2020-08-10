import React from "react";
import styled from "styled-components";
interface Props {
  imagePath?: string;
  imageAlt?: string;
}

const StyledImg = styled.img``;

const Image = ({ imagePath, imageAlt }: Props) => {
  return (
    <StyledImg
      src={imagePath || "/images/the-munchies.png"}
      alt={imageAlt || "hero"}
    />
  );
};

export default Image;
