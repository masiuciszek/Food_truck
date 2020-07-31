import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { handleFlex } from "./styles/Helpers";

interface Props {
  mainTitle: string;
  subTitle?: string;
  cta?: boolean;
  ctaText?: string;
  ctaPath?: string;
  className: string;
}

const Title = ({
  mainTitle,
  subTitle,
  className,
  cta,
  ctaPath,
  ctaText,
}: Props) => {
  return (
    <section className={className}>
      <h1>{mainTitle}</h1>
      {subTitle && <h4>{subTitle}</h4>}
      {cta && (
        <Link href={`/${ctaPath}`}>
          {" "}
          <a> {ctaText} </a>{" "}
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
  }
`;
