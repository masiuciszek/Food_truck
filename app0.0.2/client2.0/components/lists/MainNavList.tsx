import React from "react";
import { navigationLinks } from "../../src/utils/initialData";
import styled from "styled-components";
import { above, handleFlex } from "../../src/utils/helpers";
import { AppLink } from "../styled/links";

interface MainNavListProps {}

const StyledNavList = styled.ul`
  flex: 2;
  display: none;
  li {
    padding: 1em;
  }
  a {
    transition: ${({ theme }) => theme.transition.quickTransition};
    display: block;
    position: relative;
    padding: 0.5em;

    &:after {
      content: "";
      transition: ${({ theme }) => theme.transition.quickTransition};
      position: absolute;
      background: ${(props) => props.theme.colors.elements.headline};
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      padding: 0;
    }
    &:hover {
      &:after {
        width: 100%;

        opacity: 0.8;
        height: 0.1rem;
        padding: 0.1rem;
      }
    }
  }

  ${above.medium`
    ${handleFlex("row", "space-between", "center")};
  `}
`;

const MainNavList: React.FC<MainNavListProps> = ({}) => {
  const [navData, setNavData] = React.useState<Link[]>(navigationLinks);

  return (
    <StyledNavList>
      {navData.map(({ name, path }) => (
        <li key={path}>
          <AppLink href={path}>
            <a>{name}</a>
          </AppLink>
        </li>
      ))}
    </StyledNavList>
  );
};
export default MainNavList;
