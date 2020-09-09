import React from "react";
import styled from "styled-components";

interface Props {
  className: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={className}>
      <h1>Footer</h1>
    </footer>
  );
};

export default styled(Footer)`
  /* TODO: DELETE! */
  border: 2px solid red;
  height: 8rem;
  width: 100%;
`;
