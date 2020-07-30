import React from "react";
import styled from "styled-components";

interface Props {
  className: string;
}

const Nav = ({ className }: Props) => {
  return (
    <nav className={className}>
      <h1>Nav</h1>
    </nav>
  );
};

export default styled(Nav)`
  padding: 1rem;
  background: ${(props) => props.theme.colors.background};
`;
