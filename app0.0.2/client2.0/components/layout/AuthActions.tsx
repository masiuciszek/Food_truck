import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { below, above, handleFlex } from "../../src/utils/helpers";
import { Button } from "../styled/Buttons";

interface AuthActionsProps {}

const StyledAuthActions = styled.div`
  flex-basis: 40%;
  ${handleFlex("row", "space-around", "center")};
  height: 6rem;
  border: 2px solid red;
  ${above.medium`
    border: 2px solid #fff;
    flex-basis: 20%;
  `}

  ${below.small`
    display: none;
  `}
`;

const AuthActions = () => {
  return (
    <StyledAuthActions>
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
    </StyledAuthActions>
  );
};
export default AuthActions;
