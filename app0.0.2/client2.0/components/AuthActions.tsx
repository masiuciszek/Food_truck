import * as React from "react";
import {
  useAuthDispatch,
  useAuthState,
} from "../context/authState/AuthProvider";
import { renderAuthElements } from "../src/utils/render_helpers";

interface AuthActionsProps {
  isOnSmallScreen: boolean;
}

const AuthActions = ({ isOnSmallScreen }: AuthActionsProps) => {
  const { isLoggedIn, user } = useAuthState();
  const dispatch = useAuthDispatch();

  return user
    ? renderAuthElements(isOnSmallScreen, isLoggedIn, user, dispatch)
    : renderAuthElements(isOnSmallScreen, isLoggedIn, null, dispatch);
};

export default AuthActions;
