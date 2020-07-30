import Link from "next/link";
import React from "react";
import styled from "styled-components";
import LoginRegister from "./Login.register";
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
      <LoginRegister />
      <ThemeToggler />
    </nav>
  );
};

export default styled(Nav)`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.background};

  .title {
    flex: 1;
  }
`;
