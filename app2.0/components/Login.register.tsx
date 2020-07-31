import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { below, handleFlex } from "./styles/Helpers";

const LoginRegisterStyles = styled.ul`
  flex: 1;
  border-radius: 1rem;
  padding: 1rem;
  width: 10rem;
  ${handleFlex("row", "space-evenly", "center")};
  /* display: flex;
  justify-content: space-evenly;
  align-items: center; */
  margin: 0 1rem;
  ${below.smallMedium`
    width: 30rem;
    display:none;
  `}
`;

const Item = styled.li`
  text-transform: capitalize;
  padding: 0.5rem;
  ${({ theme }) => theme.shadow.elevations[2]};
  display: block;
  border-radius: 1rem;
  flex: 1;
  text-align: center;
  margin: 0 0.5rem;
  transition: ${({ theme }) => theme.transition.quickTransition};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.button};
    ${({ theme }) => theme.shadow.elevations[1]};
    a {
      color: #fff;
    }
  }
`;

const LoginRegister = () => {
  return (
    <LoginRegisterStyles>
      <Item>
        <Link href='/register'>
          <a>Register</a>
        </Link>
      </Item>

      <Item>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </Item>
    </LoginRegisterStyles>
  );
};

export default LoginRegister;
