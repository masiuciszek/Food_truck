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
      {subTitle && <h4>{subTitle}</h4>}
      {cta && (
        <Link href={`/${ctaPath}`}>
          <Btn as='a'> {ctaText} </Btn>
        </Link>
      )}
    </section>
  );
};

export default styled(Title)`
  padding: 1rem;
  ${handleFlex("column", "center", "center")};
  h1 {
    font-size: 4rem;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.button};
  }
`;
