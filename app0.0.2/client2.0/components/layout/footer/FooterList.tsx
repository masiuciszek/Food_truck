import React from "react";
import styled from "styled-components";
import { below, handleFlex, renderList } from "../../../src/utils/helpers";
import { navigationLinks } from "../../../src/utils/initialData";
interface FooterListProps {}

const StyledFooterList = styled.ul`
  flex: 1;
  ${handleFlex("row", "space-between", "center")};
  padding: 0.5em;
  li {
  }

  a {
    color: ${({ theme }) => theme.colors.elements.bg};
    transition: ${({ theme }) => theme.transition.quickTransition};
    &:after {
      content: "";
      transition: ${({ theme }) => theme.transition.mainTransition};
      position: absolute;
      background: ${(props) => props.theme.colors.elements.bg};
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      padding: 0;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.elements.button};
      &:after {
        width: 100%;

        opacity: 0.8;
        height: 0.1rem;
        padding: 0.1rem;
      }
    }
  }
  ${below.medium`
    width: 80%;
    margin: 1.5em 0;
  `}
  ${below.small`
    width: 100%;
  `}
`;

const FooterList: React.FC<FooterListProps> = ({}) => {
  const [navData, setNavData] = React.useState(navigationLinks);
  return <StyledFooterList>{renderList(navData)}</StyledFooterList>;
};
export default FooterList;
