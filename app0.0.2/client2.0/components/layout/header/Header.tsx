import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { useToggle } from "../../../hooks/useToggle"
import { above } from "@utils/helpers"
import FilteredStoresBox from "../../elements/FilteredStoresBox"
import Nav from "./Nav"
import SearchFilter from "./SearchFilter"
import Image from "next/image"

interface NavProps {
  className?: string
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
`

const SearchLogo = styled(motion.span)`
  cursor: pointer;
  position: fixed;
  bottom: 170px;
  right: 2rem;
  background: ${({ theme }) => theme.colors.illustrations.highlight};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`

const Header: React.FC<NavProps> = ({ className = "layout-header-main-header" }) => {
  const { state: showFilerSearch, toggle: toggleFilterSearch } = useToggle()
  const { state: showMobileMenu, toggle: toggleMobileMenu } = useToggle()

  return (
    <header className={className}>
      <MenuIcon onClick={toggleMobileMenu}>
        <img src="/menu-white.png" alt="menu-white" />
      </MenuIcon>
      <Nav onShowMobileMenu={showMobileMenu} />
      <SearchLogo
        onClick={toggleFilterSearch}
        whileHover={{ width: "3.4rem", height: "3.3rem" }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/search-white.png" alt="search-logo" width={30} height={30} />
      </SearchLogo>
      <SearchFilter showFilerSearch={showFilerSearch} />
      <FilteredStoresBox />
    </header>
  )
}

export default styled(Header)`
  padding: 2rem 1rem;
  position: relative;
`
