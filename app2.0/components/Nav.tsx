import React from "react";
import styled from "styled-components";
import ThemeToggler from "./Theme.toggler";

interface Props {
  className: string;
}

const Nav = ({ className }: Props) => {
  return (
    <nav className={className}>
      <div className='title'>
        <h1>Nav</h1>
      </div>
      <ThemeToggler />
    </nav>
  );
};

export default styled(Nav)`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
  .title {
    flex: 1;
  }
`;
