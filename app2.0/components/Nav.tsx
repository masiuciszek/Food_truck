import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store";
import { handleNavOpen } from "src/store/page/page.actions";
import { selectNavOpen, selectTheme } from "src/store/page/page.selector";
import styled from "styled-components";
import MainNavMenu from "./Main.nav.menu";
import { above } from "./styles/Helpers";
import ThemeToggler from "./Theme.toggler";

interface Props {
  className: string;
}

const NavLogo = styled.div`
  padding: 0.4rem;
  ${(props) => props.theme.shadow.elevations[2]};
  border-radius: 0.5rem;
  width: 15rem;
  img {
    width: 12rem;
  }
`;

const Nav = ({ className }: Props) => {
  const whatTheme = useSelector((state: AppState) => selectTheme(state));
  const isNavOpen = useSelector((state: AppState) => selectNavOpen(state));
  const dispatch = useDispatch();

  let navMenuImg =
    whatTheme === "LIGHT" ? "/images/menu-dark.png" : "/images/menu-light.png";

  return (
    <nav className={className}>
      <div className='title'>
        <NavLogo>
          <Link href='/'>
            <a>
              <img src='/images/logo4.png' alt='app logo' />
            </a>
          </Link>
        </NavLogo>
      </div>
      <ThemeToggler />
      <MainNavMenu isNavOpen={isNavOpen} />
      <div className='menu-icon' onClick={() => dispatch(handleNavOpen())}>
        <img src={navMenuImg} alt='menu icon' />
      </div>
    </nav>
  );
};

export default styled(Nav)`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
  position: relative;
  .title {
    flex: 1;
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
