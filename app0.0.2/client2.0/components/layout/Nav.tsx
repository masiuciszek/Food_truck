import React from "react";
import MainNavList from "../lists/MainNavList";
import styled from "styled-components";
import { above, below, handleFlex } from "../../src/utils/helpers";
import SearchFilter from "./SearchFilter";
import AuthActions from "./AuthActions";
import Link from "next/link";

interface NavProps {
  className?: string;
}

const Title = styled.div`
  flex: 1;
  height: 6rem;

  ${handleFlex("row", "flex-start", "center")};

  a {
    ${handleFlex("row", "flex-start", "center")};
    flex-basis: 100%;
    padding: 0.5rem;
    img {
      width: 64px;
    }
    strong {
      margin-left: 1rem;
      font-size: 1.7rem;
    }
  }
  position: relative;
`;

const SearchLogo = styled.span`
  cursor: pointer;
  img {
    width: 32px;
  }
`;

const Nav: React.FC<NavProps> = ({
  className = "layout-nav-main-navigation",
}) => {
  return (
    <nav className={className}>
      <Title>
        <Link href="/">
          <a>
            <img src="/ramen.png" alt="ramen-logo" />
            <strong>Sick tastes</strong>
          </a>
        </Link>
        <SearchLogo>
          <img src="/search-white.png" alt="search-logo" />
        </SearchLogo>
      </Title>
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
