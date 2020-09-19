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
  border: 2px solid red;
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

const AuthActions = ({
  isOnSmallScreen,
  onShowMobileMenu,
}: AuthActionsProps) => {
  return render(isOnSmallScreen, onShowMobileMenu);
};

export default AuthActions;
