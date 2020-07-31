import Link from "next/link";
import React from "react";
import styled from "styled-components";
import FooterList from "./FooterList";
import { below, handleFlex } from "./styles/Helpers";
import { NavLogo } from "./styles/Wrappers";

interface Props {
  className: string;
}
const Footer = ({ className }: Props) => {
  return (
    <footer className={className}>
      <div className='logo'>
        <NavLogo>
          <Link href='/'>
            <a>
              <img src='/images/logo4.png' alt='main logo' />
            </a>
          </Link>
        </NavLogo>
      </div>
      <FooterList />
    </footer>
  );
};

export default styled(Footer)`
  padding: 2rem 1rem;
  background: ${(props) => props.theme.colors.background};
  ${handleFlex("row", "space-between", "center")};
  .logo {
    flex: 1;
  }
  ${below.small`
    ${handleFlex("column-reverse", "space-between", "center")};
  `}
`;
