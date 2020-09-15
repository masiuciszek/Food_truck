import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { handleFlex } from "../../src/utils/helpers";

const TitleStyles = styled.div`
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

const NavTitle = () => {
  return (
    <TitleStyles>
      <Link href="/">
        <a>
          <img src="/ramen.png" alt="ramen-logo" />
          <strong>Sick tastes</strong>
        </a>
      </Link>
      <SearchLogo>
        <img src="/search-white.png" alt="search-logo" />
      </SearchLogo>
    </TitleStyles>
  );
};

export default NavTitle;
