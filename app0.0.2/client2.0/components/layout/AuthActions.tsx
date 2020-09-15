import React from "react";
import styled from "styled-components";
import { below, above, handleFlex } from "../../src/utils/helpers";
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
`;
const AuthActions: React.FC<AuthActionsProps> = ({}) => {
  return (
    <StyledAuthActions>
      <button>Login</button>
      <button>Register</button>
    </StyledAuthActions>
  );
};
export default AuthActions;
