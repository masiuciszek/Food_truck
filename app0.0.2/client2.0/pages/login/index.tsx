import React from "react";
import LoginPageContainer from "../../components/containers/LoginPageContainer";
import Title from "../../components/elements/Title";
import { ColumnPage } from "../../components/styled/wrappers";
import { parseCookies } from "../../lib/parseCookies";

const LoginPage = () => {
  return (
    <>
      <ColumnPage>
        <Title className="login-page-title" title="Sign in" />
        <LoginPageContainer />
      </ColumnPage>
    </>
  );
};

export default LoginPage;
