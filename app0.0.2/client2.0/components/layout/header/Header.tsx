import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useToggle } from "../../../hooks/useToggle";
import { above } from "../../../src/utils/helpers";
import Nav from "./Nav";
import SearchFilter from "./SearchFilter";

interface NavProps {
  className?: string;
}

const MenuIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
  height: 100%;
  z-index: 3;
  img {
    width: 54px;
  }
  ${above.medium`
    display:none;
  `}
`;

const SearchLogo = styled(motion.span)`
  cursor: pointer;
  position: fixed;
  bottom: 170px;
  right: 2rem;
  background: ${({ theme }) => theme.colors.illustrations.highlight};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  img {
    width: 46px;
  }
`;

const Header: React.FC<NavProps> = ({
  className = "layout-header-main-header",
}) => {
  const { state: showFilerSearch, toggle: toggleFilterSearch } = useToggle();
  const { state: showMobileMenu, toggle: toggleMobileMenu } = useToggle();

  return (
    <header className={className}>
      <MenuIcon onClick={toggleMobileMenu}>
        <img src="/menu-white.png" alt="menu-white" />
      </MenuIcon>
      <Nav onShowMobileMenu={showMobileMenu} />
      <SearchLogo
        onClick={toggleFilterSearch}
        whileHover={{ width: "5rem", height: "5rem" }}
        transition={{ duration: 0.5 }}>
        <img src="/search-white.png" alt="search-logo" />
      </SearchLogo>
      <SearchFilter showFilerSearch={showFilerSearch} />
    </header>
  );
};

export default styled(Header)`
  padding: 2rem 1rem;
  position: relative;
`;
