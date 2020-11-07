import React from "react"
import styled from "styled-components"
import { below, handleFlex } from "../../../utils/helpers"
import NavTitle from "../header/NavTitle"
import FooterList from "./FooterList"

interface FooterProps {
  className?: string
}

const Footer = ({ className = "main-footer" }: FooterProps) => {
  return (
    <footer className={className}>
      <NavTitle isOnFooter />
      <FooterList />
    </footer>
  )
}
export default styled(Footer)`
  ${handleFlex("row", "space-between", "center")};
  background: ${({ theme }) => theme.colors.illustrations.main};
  padding: 1.5rem 0.5rem;
  ${below.medium`
    ${handleFlex("column", "space-between", "center")};
  `}
`
