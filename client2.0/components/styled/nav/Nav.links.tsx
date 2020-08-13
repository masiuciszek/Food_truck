import React, { useState } from "react";
import { navigationLinks } from "../../../src/utils/initialData";
import styled from "styled-components";
import Link from "next/link";
import { above, below, handleFlex } from "../../../src/utils/helpers";

const StyledLinksList = styled.ul`
  display: none;
  padding: 1rem;
  flex: 3;

  li {
    padding: 1rem;
  }
  a {
    text-transform: capitalize;
    font-size: 1.2rem;
    transition: ${(props) => props.theme.transition.mainTransition};
    display: block;
    position: relative;
    color: ${(props) => props.theme.colors.text};
    &:after {
      content: "";
      position: absolute;
      transition: ${(props) => props.theme.transition.mainTransition};
      bottom: 0;
      left: 0;
      width: 1%;
      padding: 0;
      height: 0;
      background: ${({ theme: { colors } }) => colors.text};
    }
    &:hover {
      &:after {
        width: 100%;
        padding: 0.1rem;
        height: 0.1rem;
      }
    }
  }

  ${above.medium`
    ${handleFlex("row", "center", "center")};
  `}
`;

const NavLinks = () => {
  const [state, setstate] = useState(navigationLinks);
  return (
    <StyledLinksList>
      {state.map(({ name, path }) => (
        <li key={path}>
          <Link href={path}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </StyledLinksList>
  );
};

export default NavLinks;
