import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  className: string;
  subTitle?: string;
  cta?: boolean;
  ctaText?: string;
  ctaPath?: string;
}

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
    </section>
  );
};

export default styled(Title)``;
