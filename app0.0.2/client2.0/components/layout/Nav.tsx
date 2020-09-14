import React from "react";
import MainNavList from "../lists/MainNavList";
import styled from "styled-components";
import { handleFlex } from "../../src/utils/helpers";
import SearchFilter from "./SearchFilter";
interface NavProps {
  className?: string;
}

const Title = styled.div`
  ${handleFlex("row", "flex-start", "center")};
  flex: 1;
  border: 2px solid blue;
  height: 6rem;
`;

const Nav: React.FC<NavProps> = ({
  className = "layout-nav-main-navigation",
}) => {
  return (
    <nav className={className}>
      <Title>
        <h3>Title</h3>
      </Title>
      <SearchFilter />
      <MainNavList />
    </nav>
  );
};

export default styled(Nav)`
  border: 2px solid red;
  ${handleFlex("row", "space-between", "center")};
`;
