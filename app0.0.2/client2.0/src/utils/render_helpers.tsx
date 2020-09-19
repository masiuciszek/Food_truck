import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "../../components/styled/Buttons";
import {
  FormGroup,
  FormLabel,
  FormInput,
} from "../../components/styled/FormElements";
import { above, below, handleFlex } from "./helpers";

export const renderForm = (isLoginForm: boolean) =>
  !isLoginForm ? (
    <>
      <FormGroup>
        <FormLabel>
          <span>firstname</span>
          <FormInput type="text" placeholder="firstname" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>lastname</span>
          <FormInput type="text" placeholder="lastname" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>email</span>
          <FormInput type="email" placeholder="email" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>password</span>
          <FormInput type="password" placeholder="password" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>confirm password</span>
          <FormInput type="password" placeholder="repeat password" />
        </FormLabel>
      </FormGroup>
    </>
  ) : (
    <>
      <FormGroup>
        <FormLabel>
          <span>email</span>
          <FormInput type="email" placeholder="email" />
        </FormLabel>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <span>password</span>
          <FormInput type="password" placeholder="password" />
        </FormLabel>
      </FormGroup>
    </>
  );

const StyledAuthActionsLargeScreen = styled.div`
  flex-basis: 40%;
  ${handleFlex("row", "space-around", "center")}
  height: 6rem;
  a {
    margin: 0 0.5rem;
  }
  ${above.medium`
    flex-basis: 20%;
  `}

  ${below.medium`
    display: none;
  `}
`;
const StyledAuthActionsSmallScreen = styled.div`
  width: 100%;
  ${handleFlex("row", "space-around", "center")};
`;

export const renderAuthElements = (
  isOnSmallScreen: boolean,
  isLoggedIn: boolean,
) =>
  !isOnSmallScreen ? (
    <StyledAuthActionsLargeScreen>
      <Link href="/login">
        <a>
          <Button>Login</Button>
        </a>
      </Link>

      <Link href="/register">
        <a>
          <Button>Register</Button>
        </a>
      </Link>
    </StyledAuthActionsLargeScreen>
  ) : (
    <StyledAuthActionsSmallScreen>
      <Link href="/login">
        <a>
          <Button bgColor textColor>
            Login
          </Button>
        </a>
      </Link>

      <Link href="/register">
        <a>
          <Button bgColor textColor>
            Register
          </Button>
        </a>
      </Link>
    </StyledAuthActionsSmallScreen>
  );
