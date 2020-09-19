import * as React from "react";
import { useAuthState } from "../context/authState/AuthProvider";
import { renderAuthElements } from "../src/utils/render_helpers";

interface AuthActionsProps {
  isOnSmallScreen: boolean;
}

const AuthActions = ({ isOnSmallScreen }: AuthActionsProps) => {
  const { isLoggedIn } = useAuthState();

  return renderAuthElements(isOnSmallScreen, isLoggedIn);
};

export default AuthActions;
