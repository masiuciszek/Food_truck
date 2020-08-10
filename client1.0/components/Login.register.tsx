import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/store";
import { logoutUser } from "src/store/auth/auth.actions";
import { selectIsAuth, selectToken } from "src/store/auth/auth.selectors";
import styled from "styled-components";
import { above, below, handleFlex } from "./styles/Helpers";

const LoginRegisterStyles = styled.ul`
  flex: 1;
  border-radius: 1rem;
  padding: 1rem;
  ${handleFlex("row", "space-evenly", "center")};
  margin: 0 1rem;

  ${below.smallMedium`
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
    a,
    span {
      color: #fff;
    }
  }
`;

const LoginRegister = () => {
  const isAuth = useSelector((state: AppState) => selectIsAuth(state));
  const authToken = useSelector((state: AppState) => selectToken(state));

  const dispatch = useDispatch();

  return (
    <LoginRegisterStyles>
      {isAuth ? (
        <Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Item>
      ) : (
        <Item>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </Item>
      )}

      {isAuth ? (
        <Item onClick={() => dispatch(logoutUser(authToken))}>
          <span>Logout</span>
        </Item>
      ) : (
        <Item>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Item>
      )}
    </LoginRegisterStyles>
  );
};

export default LoginRegister;
