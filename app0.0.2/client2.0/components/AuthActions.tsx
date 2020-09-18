import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { below, above, handleFlex } from "../src/utils/helpers";
import { Button } from "./styled/Buttons";

interface AuthActionsProps {
  isOnSmallScreen: boolean;
}

const StyledAuthActionsLargeScreen = styled.div`
  flex-basis: 40%;
  ${handleFlex("row", "space-around", "center")};
  height: 6rem;
  ${above.medium`
    flex-basis: 20%;
  `}

  ${below.small`
    display: none;
  `}
`;

const StyledAuthActionsSmallScreen = styled.div``;

const render = (isOnSmallScreen: boolean) =>
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
          <Button>Login</Button>
        </a>
      </Link>

      <Link href="/register">
        <a>
          <Button>Register</Button>
        </a>
      </Link>
    </StyledAuthActionsSmallScreen>
  );

const AuthActions = ({ isOnSmallScreen }: AuthActionsProps) => {
  return <>{render(isOnSmallScreen)}</>;
};
export default AuthActions;
