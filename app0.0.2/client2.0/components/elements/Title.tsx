import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { handleFlex } from "../../src/utils/helpers";
import { Button } from "../styled/Buttons";

interface TitleProps {
  title: string;
  className?: string;
  subTitle?: string;
  ctaPath?: string;
  isCta?: boolean;
}

const Title = ({
  className = "main-title",
  title,
  subTitle,
  ctaPath,
  isCta,
}: TitleProps) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {isCta && (
        <Link href={`/${ctaPath}`}>
          <a>
            <Button>{ctaPath}</Button>
          </a>
        </Link>
      )}
    </section>
  );
};

export default styled(Title)`
  padding: 2rem 0.5em;
  ${handleFlex("column", "center", "center")};
  height: 100%;

  h1 {
    text-align: center;
  }
  ${Button} {
    text-transform: capitalize;
    width: 8em;
  }
`;
