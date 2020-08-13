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

const AuthOptions = styled.div`
  display: none;
  flex: 1;
  a {
    display: block;
    ${({ theme }) => theme.shadow.elevations[1]};
    padding: 0.5rem;
    border-radius: 4px;
    text-transform: capitalize;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};
    transition: ${(props) => props.theme.transition.mainTransition};
    margin: 0 0.5rem;
    width: 5em;
    text-align: center;
    &:hover {
      ${({ theme }) => theme.shadow.elevations[2]};
    }
  }

  ${above.medium`
    ${handleFlex("row", "space-between", "center")};
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
      <AuthOptions>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </AuthOptions>
      <MenuToggle>
        <img src="/menu.svg" alt="menu-icon" />
      </MenuToggle>
    </nav>
  );
};

export default styled(Nav)`
  padding: 0 0.5rem;
  ${handleFlex("row", "space-between", "center")};
  height: 12rem;
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.colors.background};
`;
