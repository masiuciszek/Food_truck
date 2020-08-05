import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store";
import { handleNavOpen } from "src/store/page/page.actions";
import { selectNavOpen, selectTheme } from "src/store/page/page.selector";
import styled from "styled-components";
import MainNavMenu from "./Main.nav.menu";
import { above, handleFlex } from "./styles/Helpers";
import { NavLogo } from "./styles/Wrappers";
import ThemeToggler from "./Theme.toggler";

interface Props {
  className: string;
}

const Nav = ({ className }: Props) => {
  const whatTheme = useSelector((state: AppState) => selectTheme(state));
  const isNavOpen = useSelector((state: AppState) => selectNavOpen(state));
  const dispatch = useDispatch();

  const navMenuImg =
    whatTheme === "LIGHT" ? "/images/menu-dark.png" : "/images/menu-light.png";

  return (
    <nav className={className}>
      <div className="title">
        <NavLogo>
          <Link href="/">
            <a>
              <img src="/images/logo4.png" alt="app logo" />
            </a>
          </Link>
        </NavLogo>
      </div>
      <ThemeToggler />
      <MainNavMenu isNavOpen={isNavOpen} />
      <div className="menu-icon" onClick={() => dispatch(handleNavOpen())}>
        <img src={navMenuImg} alt="menu icon" />
      </div>
    </nav>
  );
};

export default styled(Nav)`
  padding: 2rem 1rem;
  background: ${(props) => props.theme.colors.background};
  ${handleFlex("row", "space-between", "center")};

  position: relative;
  .title {
    flex: 1;
    ${above.medium`
      flex: 2;
    `}
  }
  .menu-icon {
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 2rem;
    cursor: pointer;
    img {
      width: 5rem;
    }
    ${above.smallMedium`
      display: none;
    `}
  }
`;
