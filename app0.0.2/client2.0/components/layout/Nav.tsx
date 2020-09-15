import React from "react";
import MainNavList from "../lists/MainNavList";
import styled from "styled-components";
import { above, below, handleFlex } from "../../src/utils/helpers";
import SearchFilter from "./SearchFilter";
import AuthActions from "./AuthActions";
import Link from "next/link";
import { useToggle } from "../../hooks/useToggle";
import NavTitle from "./NavTitle";

interface NavProps {
  className?: string;
}

const Nav: React.FC<NavProps> = ({
  className = "layout-nav-main-navigation",
}) => {
  const { state: showFiler, toggle: toggleFilter } = useToggle();
  return (
    <nav className={className}>
      <NavTitle />
      {/* <SearchFilter /> */}
      <MainNavList />
      <AuthActions />
    </nav>
  );
};

export default styled(Nav)`
  border: 2px solid red;
  ${handleFlex("row", "space-between", "center")};
`;
