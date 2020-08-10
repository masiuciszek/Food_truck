/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { handleFlex } from "./styles/Helpers";
import { Btn } from "./styles/Btns";

interface Props {
  mainTitle: string;
  subTitle?: string;
  cta?: boolean;
  ctaText?: string;
  ctaPath?: string;
  className: string;
  textColor?: string;
  shadow?: string;
  size?: string;
  size2?: string;
  bgColor?: string;
}

const Title: React.FC<Props> = ({
  mainTitle,
  subTitle,
  className,
  cta,
  ctaPath,
  ctaText,
}) => {
  return (
    <section className={className}>
      <h1>{mainTitle}</h1>
      {subTitle && <h3>{subTitle}</h3>}
      {cta && (
        <Link href={`/${ctaPath}`}>
          <Btn as="a"> {ctaText} </Btn>
        </Link>
      )}
    </section>
  );
};

export default styled(Title)`
  padding: 1rem;
  ${handleFlex("column", "center", "center")};
  ${({ theme, shadow }) => shadow && theme.shadow.elevations[2]};
  background: ${({ theme, bgColor }) => (bgColor ? bgColor : "none")};

  h1 {
    font-size: ${({ theme, size }) => (size ? size : "4rem")};
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.button};
    color: ${({ theme, textColor }) =>
      textColor ? textColor : theme.colors.text};
    text-transform: capitalize;
  }
  h3 {
    font-size: ${({ theme, size2 }) => (size2 ? size2 : "2rem")};
    color: ${({ theme, textColor }) =>
      textColor ? textColor : theme.colors.text};
  }
`;
