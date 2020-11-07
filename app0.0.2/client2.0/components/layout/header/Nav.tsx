import React from "react"
import MainNavList from "../../lists/MainNavList"
import styled from "styled-components"
import { handleFlex } from "@utils/helpers"
import AuthActions from "../../AuthActions"
import NavTitle from "./NavTitle"
import MobileList from "./MobileList"
import { navigationLinks } from "@utils/initialData"

interface NavProps {
  className?: string
  onShowMobileMenu: boolean
}

const Nav: React.FC<NavProps> = ({
  className = "layout-nav-main-navigation",
  onShowMobileMenu,
}) => {
  const [navData, setNavData] = React.useState<Link[]>(navigationLinks)
  return (
    <nav className={className}>
      <NavTitle />
      <MainNavList onNavData={navData} />
      <AuthActions isOnSmallScreen={false} />
      <MobileList onShowMobileMenu={onShowMobileMenu} className="mobile-list" onNavData={navData} />
    </nav>
  )
}

export default styled(Nav)`
  ${handleFlex("row", "space-between", "center")};
`
