import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { handleFlex } from "../../src/utils/helpers";

interface TitleProps {
  title: string;
  className?: string;
  subTitle?: string;
  ctaPath?: string;
  ctaText?: string;
  isCta?: boolean;
  isInCol?: boolean;
}

const Title = ({
  className = "main-title",
  title,
  subTitle,
  ctaPath,
  ctaText,
  isCta,
  isInCol,
}: TitleProps) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {isCta && (
        <Link href={`/${ctaPath}`}>
          <a> {ctaText}</a>
        </Link>
      )}
    </section>
  );
};

export default styled(Title)`
  padding: 1em 0.5em;
  ${handleFlex("column", "center", "center")};
  height: 100%;
`;
