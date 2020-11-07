import Link from "next/link"
import React from "react"
import styled from "styled-components"
import { handleFlex } from "../../../utils/helpers"

interface NavTitleProps {
  isOnFooter?: boolean
}

const TitleStyles = styled.div<NavTitleProps>`
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
      color: ${({ theme, isOnFooter }) =>
        isOnFooter ? theme.colors.illustrations.stroke : theme.colors.illustrations.main};
    }
  }
  position: relative;
`

const NavTitle = ({ isOnFooter = false }: NavTitleProps) => {
  return (
    <TitleStyles isOnFooter={isOnFooter}>
      <Link href="/">
        <a>
          <img src="/ramen.png" alt="ramen-logo" />
          <strong>Sick tastes</strong>
        </a>
      </Link>
    </TitleStyles>
  )
}

export default NavTitle
