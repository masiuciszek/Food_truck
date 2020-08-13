import React from "react";
import styled from "styled-components";
import { above, handleFlex } from "../../../src/utils/helpers";
import NavLinks from "./Nav.links";
import Link from "next/link";

interface Props {
  className: string;
}

const Logo = styled.div`
  flex: 2;
`;

const MenuToggle = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 1rem;
  img {
    margin-top: 1rem;
    width: 2em;
    cursor: pointer;
    margin-left: auto;
    display: block;
  }
  ${above.medium`
    display: none;
  `}
`;

const Nav = ({ className }: Props) => {
  return (
    <nav className={className}>
      <Logo>
        <Link href="/">
          <a>
            <img src="/logo2.svg" alt="app logo" />
          </a>
        </Link>
      </Logo>

      <NavLinks />
      <MenuToggle>
        <img src="/menu.svg" alt="menu-icon" />
      </MenuToggle>
    </nav>
  );
};

export default styled(Nav)`
  padding: 0 0.5rem;
  border: 3px solid red;
  ${handleFlex("row", "space-between", "center")};
  height: 12rem;
  width: 100%;
  position: relative;
`;
