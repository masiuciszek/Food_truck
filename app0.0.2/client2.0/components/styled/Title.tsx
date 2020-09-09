import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { handleFlex } from "../../src/utils/helpers";
import { Button } from "./Buttons";

interface Props {
  title: string;
  className: string;
  subTitle?: string;
  cta?: boolean;
  ctaText?: string;
  ctaPath?: string;
}

const CtaWrapper = styled.div``;

const Title = ({
  title,
  subTitle,
  cta,
  ctaPath,
  ctaText,
  className,
}: Props) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      {cta && (
        <CtaWrapper>
          <Link href={`/${ctaPath || "stores"}`}>
            <a>
              <Button>{ctaText || "stores"}</Button>
            </a>
          </Link>
        </CtaWrapper>
      )}
    </section>
  );
};

export default styled(Title)`
  width: 100%;
  padding: 1rem 0.5rem;
  ${handleFlex("column", "center", "center")};
  h1 {
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.text};
  }
`;
