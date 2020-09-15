import React from "react";
import styled from "styled-components";
import { above } from "../../src/utils/helpers";
import Nav from "./Nav";

interface NavProps {
  className?: string;
}

const MenuIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
  img {
    width: 54px;
  }
  ${above.medium`
    display:none;
  `}
`;

const Header: React.FC<NavProps> = ({
  className = "layout-header-main-header",
}) => {
  return (
    <header className={className}>
      <MenuIcon>
        <img src="/menu-white.png" alt="menu-white" />
      </MenuIcon>
      <Nav />
    </header>
  );
};

export default styled(Header)`
  border: 2px solid white;
  padding: 2rem 1rem;
  position: relative;
`;
